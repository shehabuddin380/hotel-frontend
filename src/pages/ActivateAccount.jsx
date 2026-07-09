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
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <div className="bg-slate-900 border border-white/10 p-8 shadow-lg rounded-xl text-center w-[350px] text-white">

        {message && (
          <p className="text-green-400 font-medium">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-400 font-medium">
            {error}
          </p>
        )}

        <Link to="/login">
          <button className="mt-5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-4 py-2 rounded-lg transition">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivateAccount;