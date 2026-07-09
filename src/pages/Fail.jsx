import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 text-white">

      <div className="bg-slate-900 border border-red-400/30 rounded-xl p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-400">
          Payment Failed ❌
        </h1>

        <p className="text-slate-300 mb-6">
          Something went wrong with your payment. Please try again or contact support if the issue persists.
        </p>

        <Link
          to="/rooms"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg font-semibold transition"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default Fail;