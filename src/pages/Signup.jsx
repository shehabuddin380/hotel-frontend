import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("register/", {
      username: e.target.username.value,
      password: e.target.password.value,
    });

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-[350px]">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <input name="username" placeholder="Username" className="w-full mb-3 p-2 border rounded" required />
        <input name="password" type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" required />

        <button className="w-full bg-black text-white py-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
