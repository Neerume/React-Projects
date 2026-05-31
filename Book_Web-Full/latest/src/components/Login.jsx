import React from 'react';

const Login = ({ setShowLogin }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[600px] bg-white p-6 rounded-xl relative">

        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-2 right-3"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold">Login Form</h1>

        <form className="flex flex-col gap-3 mt-4">
          <button className="w-full">Continue with Google</button>
          <button className="w-full">Continue with Facebook</button>

          <p>OR</p>

          <input className="p-4 border border-black" placeholder="Email Address" />
          <input className="p-4 border border-black" placeholder="Password" />

          <button className="w-full bg-blue-500 text-white py-2">
            Login
          </button>

          <div className="flex justify-between text-sm">
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <a href="#" className="text-blue-500">Forgot Password?</a>
          </div>

          <p>
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;