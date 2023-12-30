import React from "react";
import Background from "../../assets/public/bglog.jpg";
export default function LoginLayout() {
  return (
    <div className="font-sans m-0 p-0 flex items-center justify-center h-screen bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${Background})` }} >
         
    <div className="text-white w-500 p-20 rounded-8 bg-slate-800 bg-opacity-10 ">
        <h2>Login</h2>
        <div className="mr-25 mb-3 rounded-sm">
            <label className="text-base mb-2 block" for="username">Username:</label>
            <input type="text" id="username" className="text-lg w-full p-10px border-solid outline rounded bg-transparent text white"/>
        </div>

        <div className="mr-25 mb-3 rounded-sm">
            <label className="text-base mb-2 block" for="password">Password:</label>
            <input type="password" id="password" className="text-lg w-full p-10px border-solid outline rounded bg-transparent text white"/>
        </div>
        
        <div>
          <label className="text-base mb-2 block"><input type="checkbox"/> Remeber me</label>
          <a href="#">Forgot password?</a> 
      </div>

      <button className="bg-amber-300 text-white p-2 py-1 ml-3 mt-2 border-none text-lg cursor-pointer rounded-3xl hover:bg-amber-200" type="submit">Login</button>

      <div>
        <p>Don't have an account?<a 
        href="#"> Register</a></p>
      </div>
      
    </div>
    </div>
  );
}