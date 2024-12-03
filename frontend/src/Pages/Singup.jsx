import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    phone: "",
    organization: "",
    department: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Join us and manage your account seamlessly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="userId">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="Enter your User ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.userId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="organization"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Enter your Organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="department"
            >
              Department Name
            </label>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="Enter your Department Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your Designation"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
