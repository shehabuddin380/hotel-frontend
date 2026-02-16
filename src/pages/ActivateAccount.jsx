import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

const ActivateAccount = () => {
  const { uid, token } = useParams();

  const [message, setMessage] = useState("Activating your account...");
  const [error, setError] = useState("");

  useEffect(() => {
    const activate = async () => {
      try {
        await api.post("users/activate/", { uid, token });
        setMessage("Account activated successfully!");
      } catch {
        setMessage("");
        setError("Activation link invalid or expired!");
      }
    };

    activate();
  }, [uid, token]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded text-center w-[350px]">
        
        {/* Success Message */}
        {message && (
          <p className="text-green-600 font-medium">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-600 font-medium">
            {error}
          </p>
        )}

        <Link to="/login">
          <button className="mt-5 bg-black text-white px-4 py-2 rounded">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivateAccount;
