import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Company Info */}
        <div>
          <div className="text-2xl font-bold flex items-center justify-center md:justify-start space-x-2">
            <span>ICAR</span>
            <span className="text-gray-500"></span>
          </div>
          <div className="mt-4">
            <button className="mr-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcx8sRXXQmSlzJSrNHCefb7yHRWl2BPBTuTA&s"
                alt="Google Play"
                className="w-24"
              />
            </button>
            <button>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HPB6gEgVCXUwaNqSvxi5caOQ3ud_4eqasA&s"
                alt="App Store"
                className="w-24"
              />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Company # 450039-445, Registered with House of companies.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Get Help</h3>
          <div className="flex items-center justify-center md:justify-start mt-4">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="p-2 border border-gray-300 rounded-l-lg w-2/3 focus:outline-none focus:ring focus:border-orange-500"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
            Send
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            We won’t spam, read our <a href="#" className="text-orange-500 underline">email policy</a>.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mt-4">
            <a href="#" aria-label="Facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6"
              />
            </a>
       
            {/* <a href="#" aria-label="Snapchat">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg"
                alt="Snapchat"
                className="w-6"
              />
            </a> */}
          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h3 className="text-lg font-semibold">Legal Pages</h3>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="#" className="text-gray-600 hover:underline">Terms and conditions</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">Privacy</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">Cookies</a>
            </li>
       
          </ul>
        </div>

        

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold">Important Links</h3>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="#" className="text-gray-600 hover:underline">Get help</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">Create Account</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">Become Affiliates</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">Shipping Rates</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm"> Copyright 2024, All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms</a>
            {/* <a href="#" className="text-sm hover:underline"></a> */}
            <a href="#" className="text-sm hover:underline">Do not sell or share my personal information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
