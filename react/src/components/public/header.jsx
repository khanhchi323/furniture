import React from "react";
import Navbar from "./Navbar";
import Background from "../../assets/public/bg-main.svg";
import Logo from "/public/logo.svg";
import Cart from "/public/cart.svg";
import Search from "/public/search.svg";
import User from "/public/user.svg";
import SearchBlack from "/public/search-black.svg";



export default function Header() {
  return (
    <div
      className="bg-cover bg-center h-screen align-middle font-roboto"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="h-full">
        <div className="flex justify-center items-center flex-col bg-slate-100 bg-opacity-10  h-[40vh] ">
          <p className="font-roboto leading-6 text-yellow-200   text-5xl drop-shadow-lg shadow-black">
            Enjoy a part of every day
          </p>
          <p className=" text-white mt-12">
            Product by CCHLB 
          </p>
        </div>

        <div className="flex justify-center items-center opacity-50  ">
          <div className="relative">
            <input
              className="p-2 pl-8 border rounded-lg"
              type="text"
              placeholder="Type something..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={SearchBlack} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
