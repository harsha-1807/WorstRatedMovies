import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie'; 
// import { useNavigate } from "react-router-dom";

function Signin() {
 
    const [loginUser, setloginUser] = useState({
        username : "",
        password : "",
      });    


      const handleChange = (e,field) => {
        e.preventDefault();
        setloginUser({...loginUser,[field]:e.target.value})
        // console.log(loginUser.username);
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('https://worst-rated-movies-webapp.vercel.app/api/signin', { username:loginUser.username, password: loginUser.password });
          console.log("response",response);
          if (response.status === 200) {
            console.log(response.data);
            // Save the token in a cookie
            Cookies.set('username',loginUser.username);
            Cookies.set("Token",response.data.TOKEN)
            // Cookies.set('token',response.data.token)
            // document.cookie = "token=" + response.data.token
           
            // notify()
            // useNavigate('/listings')



            
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('An error occurred while logging in', error);
        }
      };
  return (
    // <div className='bg-black w-[100vw] h-[80vh]'> 
    <div className="bg-[rgba(0, 0, 0, 0.932)] rounded-lg py-5 text-black">
    <div className="container flex flex-col mx-auto bg-gray-300 rounded-lg w-[40vw] ">
      <div className="flex justify-center w-full h-full xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form className="flex flex-col w-full h-full pb-2 text-center bg-gray-300 rounded-3xl">
              <h3 className="mb-3 text-2xl font-extrabold text-dark-grey-900">Sign in</h3>
              <p className="mb-4 text-grey-700">Enter your email and password</p>
              <a className="flex items-center justify-center w-full  mb-2 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-500 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 cursor-pointer">
                <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                Sign in with Google
              </a>
              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">or</p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <label  className="mb-2 text-sm text-start text-grey-900">Username*</label>
              <input id="username" type="text" placeholder="username" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-4 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" onChange={(e)=>{handleChange(e,"username")}} />
              <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
              <input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" onChange={(e)=>{handleChange(e,"password")}} />
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
              <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none transition duration-300 md:w-96 rounded-2xl  bg-[#591FF9] text-white
               " onClick={handleSubmit}>Sign In</button>
              <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="/Signup" className="font-bold text-grey-700">Create an Account</a></p>
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

  )
}

export default Signin