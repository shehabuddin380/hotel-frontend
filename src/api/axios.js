import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  "https://hotel-booking-website-zpp5.vercel.app/api/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Plain axios instance (no interceptors) used only for the refresh call,
// so it doesn't trigger the response interceptor below and cause a loop.
const plainAxios = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let pendingRequests = [];

const resolvePendingRequests = (newToken) => {
  pendingRequests.forEach((callback) => callback(newToken));
  pendingRequests = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthError = error.response?.status === 401;
    const alreadyRetried = originalRequest?._retry;

    if (isAuthError && !alreadyRetried) {
      const refreshToken =
        localStorage.getItem("refresh") || sessionStorage.getItem("refresh");

      // No refresh token available at all -> nothing we can do, log out.
      if (!refreshToken) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh");

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      // If a refresh is already in progress, wait for it instead of
      // firing multiple refresh requests at once.
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingRequests.push((newToken) => {
            if (!newToken) {
              reject(error);
              return;
            }
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const res = await plainAxios.post("users/token/refresh/", {
          refresh: refreshToken,
        });

        const newAccessToken = res.data.access;

        // Save the new access token back to whichever storage was used
        if (localStorage.getItem("refresh")) {
          localStorage.setItem("token", newAccessToken);
        } else {
          sessionStorage.setItem("token", newAccessToken);
        }

        isRefreshing = false;
        resolvePendingRequests(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        resolvePendingRequests(null);

        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh");

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;