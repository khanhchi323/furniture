import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/public/icon/cart.svg";
import Search from "../../assets/public/icon/search.svg";
import User from "../../assets/public/icon/user.svg";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="h-full">
            <nav
                class=" bg-[#EEEDEA] flex  max-w-7xl items-center justify-between p-[2vh] lg:px-8 "
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
                    <div class="block lg:flex flex-row lg:gap-x-6 -mx-3  rounded-lg px-3   leading-6 ">
                        <Link
                            to=""
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
    );
}
