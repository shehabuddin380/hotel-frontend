import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white">

      <h1 className="text-7xl font-bold text-yellow-400">404</h1>

      <p className="mt-2 mb-5 text-lg font-medium text-slate-300">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-5 py-2 rounded-lg transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;