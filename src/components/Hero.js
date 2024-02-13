import React from "react";

const Hero = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  return (
    <div className="bg-gray-400 p-8 mb-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2 pr-2 mt-3">
          <p className="text-5xl font-extrabold text-gray-800 mb-4">
            This is the Savannah Information Doctor Plaza where we consume some
            data.
          </p>
        </div>
        <div className="w-1/2 p-6 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold mb-2">Welcome to Your Website</h1>
          <p className="text-lg mb-4">
            Explore amazing features and join our community.
          </p>

          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <button
              className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline"
              type="button" 
            >
              Log In
            </button>
            <button
              className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
            <div>
              <p className="text-black text-opacity-75 text-lg">
                Don't have an account?
                <span className="text-blue-600 hover:underline"> Sign Up</span>
              </p>
            </div>
            {/* Buttons for Google, GitHub, and Facebook */}
            <div className="flex space-x-2">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={google}
              >
                Google
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                GitHub
              </button>
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
