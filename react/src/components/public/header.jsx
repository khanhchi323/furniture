import React, { useState } from "react";
import Background from "../../assets/public/bg.svg";
import Cart from "../../assets/public/icon/cart.svg";
import Search from "../../assets/public/icon/search.svg";
import User from "../../assets/public/icon/user.svg";
import SearchBlack from "../../assets/public/icon/search-black.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="bg-cover h-screen bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="h-full">
        <nav
          class=" flex  max-w-7xl items-center justify-between p-[2vh] lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 h-[8vh] font-bold text-white justify-between items-center">
            <div className="logo p-[2vh]">
              <p className="text-amber-100 text-3xl">CCHLB</p>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 m-[4vh]">
              <Link
                to="#"
                class="text-md  leading-6 text-white-900 hover:text-yellow-200"
              >
                HOME
              </Link>
              <Link
                to="/ProductList"
                class="text-md  leading-6 text-white-900 hover:text-yellow-200"
              >
                CATEGORIES
              </Link>
              <Link
                to="/LogIn"
                class="text-md  leading-6 text-white-900 hover:text-yellow-200"
              >
                NEW ARRIVALS
              </Link>
            </div>
            <div class="block lg:flex flex-row lg:gap-x-6 -mx-3  rounded-lg px-3   leading-6 ">
              <Link
                to="/ProductDetail"
                class=" "
              >
                <img className="h-6 w-6" src={Cart} alt="" />
              </Link>
              <Link>
                <img
                  className="hidden sm:flex"
                  src={Search}
                  alt=""
                />
              </Link>
              <Link to="/Profile">
                <img className="hidden sm:flex" src={User} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-full">
        <div className="flex justify-center items-center flex-col   h-[40vh] ">
          <p className="font-bold text-68 leading-6 text-amber-100 text-5xl text-center sm:text-left">
            Discover The Best Convenient Furniture
          </p>
          <p className=" text-white mt-12">Product by CCHLB</p>
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

export default DropdownMenu;
