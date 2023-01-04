import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-green-400">REACT.</h1>
      <ul className="hidden md:flex items-center">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <button className="px-6 py-2 w-48 bg-white text-black rounded-md">
          Get Started
        </button>
      </ul>
      <div className="md:hidden">
        {showMenu ? (
          <AiOutlineClose size={20} onClick={() => setShowMenu(false)} />
        ) : (
          <AiOutlineMenu size={20} onClick={() => setShowMenu(true)} />
        )}
      </div>
      <div
        className={
          showMenu
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 px-4 uppercase">
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
