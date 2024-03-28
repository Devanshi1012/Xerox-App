import React from "react";
import logo from "../Images/logo.png";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

function NavBar() {
  return (
    <div className="flex items-center p-4 shadow-lg h-20">
      <img src={logo} className="h-14 w-14 m-5" />
      <h1 className="font-bold text-sm underline">Other</h1>
      <h1 className="text-sm ml-3">Location</h1>
      <IoIosArrowDown />
      <IoSearch className="h-4 w-4 ml-96" />
      <h1 className="ml-3">Search</h1>
      <CgProfile className="h-4 w-4 ml-28" />
      <h1 className="ml-3">Sign-In</h1>
    </div>
  );
}

export default NavBar;
