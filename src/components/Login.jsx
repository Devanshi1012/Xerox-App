import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login({ setLoginModal }) {
  const [phone, setPhone] = useState(" ");
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
              onClick={() => setLoginModal && setLoginModal(false)}
            >
              X
            </h1>
            <h1 className="font-semibold text-3xl mt-3">Login</h1>
            <h1 className="mt-3">
              or{" "}
              <span className="text-blue-500 text-sm">create an account</span>
            </h1>

            <PhoneInput
              inputStyle={{ height: "63px", width: "320px" }}
              containerStyle={{ marginTop: "20px" }}
              placeholder="Phone Number"
              value={phone}
              onChange={() => setPhone(phone)}
            />
            <input
              className="p-5 border border-gray-300 mt-7 w-80"
              placeholder="One time password"
            />
            <button className="bg-blue-500 text-white p-5 font-semibold text-xs w-80 mt-4">
              LOGIN
            </button>
            <h1 className="text-xs font-medium mt-2">
              By clicking on login I accept the Terms & Condtions & <br />{" "}
              Privacy policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
