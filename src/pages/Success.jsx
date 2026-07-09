import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 text-white">

      <div className="bg-slate-900 border border-green-400/30 rounded-xl p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          Payment Successful! 🎉
        </h1>

        <p className="text-slate-300 mb-6">
          Thank you for booking with us. Your room has been confirmed. Enjoy your stay!
        </p>

        <Link
          to="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;