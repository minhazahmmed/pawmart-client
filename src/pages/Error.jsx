import React from "react";
import { Link } from "react-router";


const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-violet-50 p-6">
      
      <h1 className="text-7xl font-extrabold text-purple-700 drop-shadow-lg">
        404
      </h1>

      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page Not Found
      </p>

      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default Error;
