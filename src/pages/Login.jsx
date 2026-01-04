import api from "../api/axios";

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post("login/", {
      username: e.target.username.value,
      password: e.target.password.value,
    });
    localStorage.setItem("token", res.data.access);
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleLogin} className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input name="username" className="w-full mb-3 p-2 border" />
      <input name="password" type="password" className="w-full mb-3 p-2 border" />
      <button className="w-full bg-black text-white py-2">Login</button>
    </form>
  );
};

export default Login;
