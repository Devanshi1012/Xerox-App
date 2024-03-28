import React from "react";

function SignUp({ setSignUpModal }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
          <div className=" p-10 relative transform overflow-hidden  bg-white text-left h-screen shadow-xl transition-all  sm:w-4/12 sm:max-w-lg">
            <h1
              className="text-2xl cursor-pointer"
              onClick={() => setSignUpModal && setSignUpModal(false)}
            >
              X
            </h1>
            <h1 className="font-semibold text-3xl mt-3">Sign-Up</h1>
            <h1 className="mt-3">
              or{" "}
              <span className="text-blue-500 text-sm">
                login to your account
              </span>
            </h1>
            <input
              className="p-6 border border-gray-300 mt-9 w-80"
              placeholder="Phone Number"
            />
            <input
              className="p-6 border border-gray-300  w-80"
              placeholder="Name"
            />
            <input
              className="p-6 border border-gray-300  w-80"
              placeholder="Email"
            />
            <button className="bg-blue-500 text-white p-6 font-semibold text-xs w-80 mt-7">
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
