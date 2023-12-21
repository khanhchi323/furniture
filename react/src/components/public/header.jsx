import React from "react";
import Background from "../../assets/public/bg-main.svg";
import Logo from "/public/logo.svg"
import Cart from "/public/cart.svg"
import Search from "/public/search.svg"
import User from "/public/user.svg"
import Plus from "/public/plus-circle.svg"

export default function Header() {
  return (
    <div className="bg-cover bg-center h-screen align-middle" style={{ backgroundImage: `url(${Background})` }}>
      <nav class=" flex max-w-7xl items-center justify-between p-[2vh] lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 h-[8vh] text-white justify-between">
          <div className="logo p-[2vh]">
            <img className=" w-16 h-16"  src={Logo} alt="" />
          </div>
          <div className="hidden lg:flex lg:gap-x-12 m-[4vh]">
            <a href="#" class="text-md font-semibold leading-6 text-white-900 hover:text-yellow-100">Home</a>
            <a href="#" class="text-md font-semibold leading-6 text-white-900 hover:text-yellow-100">Category</a>
            <a href="#" class="text-md font-semibold leading-6 text-white-900 hover:text-yellow-100">New Arrivals</a>
            <a href="#" class="text-md font-semibold leading-6 text-white-900 hover:text-yellow-100">About Us</a>
            <a href="#" class="text-md font-semibold leading-6 text-white-900 hover:text-yellow-100">Contact Us</a>
          </div>
          <div class="m-[4vh] flex-row  items-center">
            <a href="#" class=" lg:flex lg:gap-x-6 -mx-3  rounded-lg px-3  font-semibold leading-6  text-white hover:text-yellow-100">
               <img className="h-6 w-6" src= {Cart} alt="" />
               <img src= {Search} alt="" />
               <img src= {User} alt="" />
            </a>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center flex-col  h-[40vh] ">
          <p className="font-roboto leading-6 text-yellow-400 text-5xl drop-shadow-lg shadow-black">Enjoy a part of every day</p>
          <p className="font-semibold text-white mt-12">Product by CCHLB</p>
      </div>

      <div className="flex justify-center items-center" >
        <a href="">
          <button style={{border:'solid 2px #f5c21c'}} className="text-[#f5c21c] bg-none font-bold  p-2 px-6 rounded-full mt-52 hover:border-zinc-50 hover:text-zinc-50 transition-colors duration-300 ease-in-out"type="button">
            SHOP NOW
          </button>
        </a>
      </div>
    </div>
  );
}