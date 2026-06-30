import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700 text-center">
        Payment Successful! 🎉
      </h1>

      <p className="text-gray-700 text-center max-w-md mb-6">
        Thank you for booking with us. Your room has been confirmed. Enjoy your stay!
      </p>

      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default Success;
