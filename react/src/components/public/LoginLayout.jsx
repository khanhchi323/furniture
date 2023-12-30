import React from "react";
// import Background from "../../assets/public/bglogin.jpg";
export default function LoginLayout() {
  return (
    <div className="font-sans m-0 p-0 flex items-center justify-center h-screen bg-white" >
         {/* style={{ backgroundImage: `url(${Background})` }} */}
    <div className="text-white bg-transparent w-500 p-20 rounded-8 shadow-md">
        <h2>Login</h2>
        <div className="mr-25 mb-20 rounded-sm">
            <label className="text-base mb-2 block" for="username">Username:</label>
            <input type="text" id="username" className="text-lg w-full p-10px border-solid outline rounded bg-transparent text white"/>
        </div>

        <div className="mr-25 mb-20 rounded-sm">
            <label className="text-base mb-2 block" for="password">Password:</label>
            <input type="password" id="password" className="text-lg w-full p-10px border-solid outline rounded bg-transparent text white"/>
        </div>
        

    

        <div>
          <label className="text-base mb-2 block"><input type="checkbox"/>Remeber me</label>
          <a href="#">Forgot password?</a> 
      </div>

      <button type="bg-amber-300 text-white py-2.5 px-5 pb-2.5 border-none text-lg cursor-pointer rounded-3xl hover:bg-amber-200">Login</button>

      <div>
        <p>Don't have an account?<a 
        href="#">Register</a></p>
      </div>
      
    </div>
    </div>
  );
}