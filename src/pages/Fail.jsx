import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-700 text-center">
        Payment Failed ❌
      </h1>

      <p className="text-gray-700 text-center max-w-md mb-6">
        Something went wrong with your payment. Please try again or contact support if the issue persists.
      </p>

      <Link
        to="/rooms"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Try Again
      </Link>

    </div>
  );
};

export default Fail;
