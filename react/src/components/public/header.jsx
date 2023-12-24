import React from "react";
import Background from "../../assets/public/bg-main.svg";
import Logo from "/public/logo.svg";
import Cart from "/public/cart.svg";
import Search from "/public/search.svg";
import SearchBlack from "/public/search-black.svg";
import User from "/public/user.svg";
import Plus from "/public/plus-circle.svg";

export default function Header() {
  return (  
    <div
      className="bg-cover bg-center h-screen align-middle font-roboto"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="h-full">
      <nav
        class=" flex  max-w-7xl items-center justify-between p-[2vh] lg:px-8 bg-slate-900 bg-opacity-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 h-[8vh] font-bold text-white justify-between items-center">
          <div className="logo p-[2vh]">
            <img className="  w-16 h-16" src={Logo} alt="" />
          </div>
          <div className="hidden lg:flex lg:gap-x-12 m-[4vh]">
            <a
              href="#"
              class="text-md  leading-6 text-white-900 hover:text-yellow-200"
            >
              HOME
            </a>
            <a
              href="#"
              class="text-md  leading-6 text-white-900 hover:text-yellow-200"
            >
              CATEGORIES
            </a>
            <a
              href="#"
              class="text-md  leading-6 text-white-900 hover:text-yellow-200"
            >
              NEW ARRIVALS
            </a>
          </div>
          <div class="m-[4vh] flex-row  items-center">
            <a
              href="#"
              class=" block lg:flex flex-row lg:gap-x-6 -mx-3  rounded-lg px-3   leading-6 "
            >
              <img className="h-6 w-6" src={Cart} alt="" />
              <img
                className="hidden sm:flex"
                src={Search}
                alt=""
              />
              <img src={User} alt="" />
            </a>
          </div>
        </div>
      </nav>

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
