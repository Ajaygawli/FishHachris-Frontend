import React, { useState } from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate= useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gradient-to-r from-amber-100 to-indigo-600 shadow-lg">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} className="w-20 h-16"/>
            
         
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <p  className="text-white hover:text-gray-200">
              Home
            </p>
            <p  className="text-white hover:text-gray-200">
              About
            </p>
            <p  className="text-white hover:text-gray-200">
            Shrimps/Prawns
            </p>
            <p  className="text-white hover:text-gray-200">
            Crabs
            </p>
            <p  className="text-white hover:text-gray-200">
            Molluse
            </p>
            <p  className="text-white hover:text-gray-200">
              Services
            </p>
            <p  className="text-white hover:text-gray-200 " onClick={()=>navigate('/login')}>
              Login
            </p>
            <p  className="text-white hover:text-gray-200" onClick={()=>navigate('/signup')}>
              Signup
            </p>
            <p  className="text-white hover:text-gray-200">
              Contact
            </p>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-300">
          <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
              Home
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
              About
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
            Shrimps/Prawns
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
            Crabs
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
            Molluse
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
              Services
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500"  onClick={()=>navigate('/login')}>
              Login
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" onClick={()=>navigate('/signup')} >
              Signup
            </p>
            <p  className="block px-4 py-2 text-white hover:bg-blue-500" >
              Contact
            </p>


          {/* className="block px-4 py-2 text-white hover:bg-blue-700" */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
