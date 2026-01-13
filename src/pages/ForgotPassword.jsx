import api from "../api/axios";

const ForgotPassword = () => {
    const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("password-reset/", {
    email: e.target.email.value,
    });
    alert("Reset link sent to email!");
    };
    return(
    <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        <input name="email" placeholder="Email"
            className="w-full mb-3 p-2 border rounded" required />
        <button className="w-full bg-black text-white py-2 rounded">
            Send Reset Link
        </button>
        </form>
    </div>
    );
};

export default ForgotPassword;
