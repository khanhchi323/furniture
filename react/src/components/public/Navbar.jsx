import React from "react";
import {Link} from "react-router-dom";
import Logo from "/public/logo.svg";
import Cart from "/public/cart.svg";
import Search from "/public/search.svg";
import User from "/public/user.svg";

export default function Navbar() {
    return (
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
                        <Link
                            to="#"
                            class="text-md  leading-6 text-white-900 hover:text-yellow-200"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/Register"
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
                    <div class="m-[4vh] flex-row  items-center">
                        <Link
                            to="/Profile"
                            class=" block lg:flex flex-row lg:gap-x-6 -mx-3  rounded-lg px-3   leading-6 "
                        >
                            <img className="h-6 w-6" src={Cart} alt="" />
                            <img
                                className="hidden sm:flex"
                                src={Search}
                                alt=""
                            />
                            <img src={User} alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
