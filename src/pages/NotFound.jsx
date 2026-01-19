import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      
      <p className="mt-2 mb-5 text-lg font-medium text-gray-700">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
