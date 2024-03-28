import React from "react";
import NavBar from "./NavBar";
import Menu from "./Items";

function Main() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <Menu />
      </div>
    </div>
  );
}

export default Main;
