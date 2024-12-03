import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png"
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("YOUR_API_ENDPOINT", { username, password });
  //     const data = response.data;
  //     if (response.status === 200) {
  //       toast.success("Login Successful!");
  //       localStorage.setItem("token", data.token);
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     toast.error("Invalid Credentials");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section - Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            // src="https://thumbs.dreamstime.com/z/colorful-d-cartoon-fish-swimming-vibrant-coral-reef-bright-lively-animated-swim-showcasing-underwater-paradise-339003539.jpg?w=992"
          src={logo}
            alt="Login Banner"
            className="p-6 h-full w-full"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-center mb-6">
            New here?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register now!
            </span>
          </p>

          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => navigate("/")} // Replace with handleLogin() for API integration
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
