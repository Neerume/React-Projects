import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const Register = ({ setShowLogin, setShowRegister }) => {
  const [emailMode, setEmailMode] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[600px] p-6 rounded-lg relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShowRegister(false)}
          className="absolute top-2 right-3"
        >
          X
        </button>

        {!emailMode ? (
          <>
            <h1 className="text-4xl p-4 font-semibold text-center">
              Register here
            </h1>

            <p className="text-lg text-center">
              Already have an account?{" "}
              <button
                className="text-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(true);
                  setShowRegister(false);
                }}
              >
                Login
              </button>
            </p>

            <div className="flex flex-col gap-5 mt-4">

              <div className="flex w-full p-2 rounded-lg border border-black items-center gap-2">
                <FcGoogle className="text-3xl" />
                <button className="text-lg font-semibold">
                  Signup with Google
                </button>
              </div>

              <div className="flex w-full p-2 rounded-lg border border-black items-center gap-2">
                <CiFacebook className="text-3xl" />
                <button className="text-lg font-semibold">
                  Signup with Facebook
                </button>
              </div>

              <p className="text-center">OR</p>

              <div
                className="flex w-full p-2 rounded-lg border border-black items-center gap-2 cursor-pointer"
                onClick={() => setEmailMode(true)}
              >
                <TfiEmail className="text-3xl" />
                <button type="button" className="text-lg font-semibold">
                  Signup with Email
                </button>
              </div>

              <p className="text-sm text-center">
                By creating an account I accept the{" "}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </>
        ) : (
          /* ================= EMAIL MODE ================= */
          <>
            <h1 className="text-3xl font-semibold m-5 mb-8 text-center">
              Register With Email
            </h1>

            <div className="flex flex-col gap-5 mt-4 mx-5">

              <input className="border p-2 rounded-lg" placeholder="Full Name" />
              <input className="border p-2 rounded-lg" placeholder="Email" />
              <input className="border p-2 rounded-lg" placeholder="Password" />
              <input className="border p-2 rounded-lg" placeholder="Confirm Password" />

              <button className="bg-green-600 text-white p-2 rounded-lg">
                Create Account
              </button>
                 <p className="text-sm text-center">
                By creating an account I accept the{" "}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </p>
              <button
                type="button"
                className="text-blue-500"
                onClick={() => setEmailMode(false)}
              >
                ← Back to Social Signup
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;