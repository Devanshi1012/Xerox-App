import React, { useState } from "react";
import machine from "../Images/machine.jpg";
import paper from "../Images/paper.jpg";
import Login from "./Login";
import SignUp from "./SignUp";

function Welcome() {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <div className="flex">
      <div className="h-screen w-9/12 p-16">
        <div className="flex items-center">
          <img src={paper} className="w-55 h-16" />
          <h1
            className="font-semibold ml-80 cursor-pointer"
            onClick={() => setLoginModal(true)}
          >
            Login
          </h1>
          <button
            className="w-28 bg-black text-white font-bold p-3 ml-7 cursor-pointer"
            onClick={() => setSignUpModal(true)}
          >
            Sign-Up
          </button>
        </div>
        <h1 className="font-bold text-4xl mt-20 text-gray-800">
          Late for file submission?
        </h1>
        <h1 className="mt-3 text-2xl text-zinc-600">
          Print it right way from the choice of your shop
        </h1>
        <input
          className="border border-black mt-12 p-4 w-8/12"
          placeholder="Enter your location"
        />
        <button className="bg-blue-600 text-white p-4">FIND SHOPS</button>
      </div>
      <img src={machine} className="h-screen w-5/12" />
      {loginModal && <Login setLoginModal={setLoginModal} />}
      {signUpModal && <SignUp setSignUpModal={setSignUpModal} />}
    </div>
  );
}

export default Welcome;
