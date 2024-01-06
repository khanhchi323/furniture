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
      <nav
        class=" flex  max-w-7xl items-center justify-between p-[2vh] sm:px-8 "
        aria-label="Global"
      >
        <div className="flex sm:flex-1 h-[8vh]  text-white justify-between items-center">
          <p className=" text-amber-100 text-3xl">CCHLB</p>
          
          <div className="hidden sm:ml-6 sm:block sm:flex sm:gap-x-10  m-[4vh]">
            <NavLink
              to="#"
              className="text-md  leading-6 text-white hover:text-yellow-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/Register"
              className="text-md  leading-6 text-white hover:text-yellow-200"
            >
              Category
            </NavLink>
            <NavLink
              to="/LogIn"
              className="text-md  leading-6 text-white hover:text-yellow-200"
            >
              About us
            </NavLink>
            <NavLink
              to="/LogIn"
              className="text-md  leading-6 text-white hover:text-yellow-200"
            >
              Contact us
            </NavLink>
            </div>
          </div>


          <div class="m-[4vh] flex-row  items-center">
            <NavLink
              to="/Profile"
              class=" block sm:flex flex-row sm:gap-x-6 -mx-3  rounded-lg px-3   leading-6 "
            >
              <img className="hidden sm:flex" src={Cart} alt="" />
              <img
                className="hidden sm:flex"
                src={Search}
                alt=""
              />
            </NavLink>

            <NavLink >
                               
              <button
                type="button"
                class="relative flex   text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">
                  Open user menu
                </span>
                <img
                  className="hidden sm:flex"
                  src={User}
                  alt=""
                />
            
            {/* Dropdown menu */}

            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              onClick={handleToggleDropdown}
              onBlur={() => setIsOpen(false)} // Ẩn menu khi mất focus
            >
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              <Link
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </Link>
              <Link
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
              >
                Settings
              </Link>
              <Link
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
              >
                Sign out
              </Link>
            </div>
            </button>
          </NavLink>
        </div>
    </nav >

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
