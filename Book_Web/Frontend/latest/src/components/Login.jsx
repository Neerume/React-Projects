import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";


const Login = ({ setShowLogin, setShowRegister }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[600px] bg-white p-6 rounded-xl relative">

        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-2 right-3"
        >
          ✕
        </button>

        <h1 className="text-4xl p-4 font-semibold text-center">Login Form</h1>

        <form className="flex flex-col gap-3 mt-4">
          <div className='flex w-full p-1 rounded-lg border border-black'>
            <FcGoogle className="text-blue-500 m-2 text-3xl" />
            <button className="text-lg font-semibold">Continue with Google</button>
          </div>
          <div className='flex w-full p-1 rounded-lg border border-black'>
            <CiFacebook className="text-blue-500 m-2 text-3xl" />
            <button className="text-lg font-semibold">Continue with Facebook</button>
          </div>
          <p>OR</p>

          <input className="p-4 border border-black rounded-lg" placeholder="Email Address" />
          <input className="p-4 border border-black rounded-lg" placeholder="Password" />

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold">
            LOGIN
          </button>

          <div className="flex justify-between text-lg">
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <a href="#" className="text-blue-500">Forgot Password?</a>
          </div>

          <p className="text-lg">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500" onClick={(e)=>{    e.preventDefault();
            setShowLogin(false); setShowRegister(true);}}>Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;