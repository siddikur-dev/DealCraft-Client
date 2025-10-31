import React from "react";
import { Link } from "react-router";
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Register Form Section */}
      <div className="flex justify-center items-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 md:p-10">
          <div className="text-center mb-6">
            <FaUserPlus className="text-primary text-4xl mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 text-sm mt-2">
              Join SmartDeals and start selling or buying smartly!
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Image URL
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mt-6">
              <button className="btn my-btn w-full text-white">Register</button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Login Here
            </Link>
          </p>
          {/* divider */}
          <div className="flex w-full flex-col">
            <div className="divider">OR</div>
          </div>
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
