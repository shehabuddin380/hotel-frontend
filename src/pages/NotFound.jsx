import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mb-4">Page Not Found</p>
      <Link to="/" className="bg-black text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
