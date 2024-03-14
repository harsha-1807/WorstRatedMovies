import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie'; 
import { useNavigate } from "react-router-dom";

function signup() {
  const [newUser, setNewUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  
  const handleChange = (e, field) => {
    setNewUser({ ...newUser, [field]: e.target.value });
  };

  const handleValidation = () => {
    const errors = {};
    if (newUser.fullname.length < 5) {
      errors.fullname = "Full name must be at least 5 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = "Invalid email address.";
    }
    if (newUser.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await axios.post(
          "https://worst-rated-movies-webapp.vercel.app/api/signup",
          {
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
          }
        );
        console.log("Response:", response.data);
        Cookies.set("username",newUser.username);
        Cookies.set("Token",response.data.TOKEN)
        // Redirect or perform any other actions upon successful registration
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, such as displaying error messages to the user
      }
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <div className="bg-[rgba(0, 0, 0, 0.932)] rounded-lg py-5 text-black">
      <div className="container flex flex-col mx-auto bg-gray-300 rounded-lg w-[40vw] ">
        <div className="flex justify-center w-full h-full xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-gray-300 rounded-3xl">
                <h3 className="mb-3 text-2xl font-extrabold text-dark-grey-900">
                  Sign up
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <a className="flex items-center justify-center w-full  mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-500 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 cursor-pointer">
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Sign in with Google
                </a>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label className="mb-2 text-sm text-start text-grey-900">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-4 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  onChange={(e) => handleChange(e, "fullname")}
                />
                <label className="mb-2 text-sm text-start text-grey-900">
                  User name
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-4 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  onChange={(e) => handleChange(e, "username")}
                />
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-4 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  onChange={(e) => handleChange(e, "email")}
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  onChange={(e) => handleChange(e, "password")}
                />
                {/* <div className="flex flex-row justify-between mb-8">
                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                  <input type="checkbox" checked value="" className="sr-only peer" />
                  <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                    <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick" />
                  </div>
                  <span className="ml-3 text-sm font-normal  lowercase">Keep me logged in</span>
                </label>
                <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
              </div> */}
                <button
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none transition duration-300 md:w-96 rounded-2xl  bg-[#591FF9] text-white
               "
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Already registered?{" "}
                  <a href="/Signin" className="font-bold text-grey-700">
                    {" "}
                    Sign in{" "}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          {/* <p className="text-sm text-slate-500 py-1">
          Tailwind CSS Component from <a href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-900" target="_blank" rel="noopener noreferrer">Motion Landing Library</a> by <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank" rel="noopener noreferrer">Loopple Builder</a>.
        </p> */}
        </div>
      </div>
    </div>
  );
}

export default signup;
