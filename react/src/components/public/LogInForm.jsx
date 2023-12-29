import React from "react";
import videoBg from "../../assets/public/Videobg/noithat";

export default function logInForm() {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted></video>

      <div className="text-white bg-transparent w-500 p-20 rounded-8 shadow-md">
        <h2>Login</h2>
        <div className="mr-25 mb-20 rounded-sm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mr-25 mb-20 rounded-sm">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="login-link">
          <p>
            Don't have an account?<a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}


  



