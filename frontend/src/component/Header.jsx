import React from "react";
import logo from "../images/Group 1.svg";

const Header = () => {
  return (
    <div className="bg-black px-10 py-5 text-white flex flex-row w-full justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex-row gap-6 text-xl cursor-pointer sm:flex hidden">
        <p>Learn</p>
        <p>Certify</p>
        <p>Blogs</p>
      </div>
      <button className="bg-[#FF7C1D] px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-lg">
        Login
      </button>
    </div>
  );
};

export default Header;
