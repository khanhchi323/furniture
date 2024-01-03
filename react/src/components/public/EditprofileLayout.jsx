import React from "react";
import Image from '../../assets/public/bg1.jpg'
export default function EditProfile() {
    return (
        <div className="font-sans m-0 p-0  bg-white h-screen">
            <div className="bg-gray-300	h-1/5 sm:h-1/6 w-full ">
                <h1 className="text-4xl p-auto  ">Edit Profile</h1>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row">
                    <div className="text-center sm:w-2/5">
                        <h2 className="text-2xl m-1.5 text-slate-600">Profile</h2>
                        <div className="flex items-center justify-center"> <img className="w-48 h-48 rounded-full m-2.5 sm:" src="src/assets/public/bg1.jpg" alt="#" /></div>
                        <h2 className="text-2xl md:m-2.5 mb-2 sm:m-0.5">Đừu Mạnh Lam</h2>
                        <h4 className="text-xl md:m-2.5 mt-1  text-slate-600	">User</h4>
                        <button className=" bg-green-900 text-white  px-3 py-1  text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Upload new avatar</button>
                    </div>
                    <div className="lg:h-80 w-0.5 bg-slate-300	"></div>
                    <div className="sm:w-3/5">
                        <div className="flex justify-between align-middle pt-5 w-5/6">
                            <h2 className="text-2xl text-slate-600 ml-10  ">Basic Info</h2>
                            <div className=" ">
                                <button className=" bg-green-900 text-white  px-3 mr-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Cancel</button>
                                <button className=" bg-green-900 text-white  px-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Save</button>
                            </div>
                        </div>
                        <div className="h-0.5 w-5/6 bg-slate-300 mt-3 ml-10"></div>
                        <div className="flex ml-10 mt-2">
                            <div className="sm:w-1/2">
                                <label className="text-base  my-4 block" for="username">FIRST NAME</label>
                                <input className="text-base w-5/6 pl-2 pb-0.4 border-solid outline rounded-xl  text-black" type="text" id="username" name="username" required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="text-base my-4  block" for="username">LAST NAME</label>
                                <input className="text-base w-5/6 pl-2 pb-0.4  border-solid outline rounded-xl  text-black" type="text" id="username" name="username" required />
                            </div>
                        </div>
                        <div className=" ml-10">
                            <label className="text-base my-4 block" for="username">ADDRESS</label>
                            <input className="text-base w-11/12 pl-2 pb-0.4 border-solid outline rounded-xl  text-black" type="text" id="username" name="username" required />
                        </div>
                        <div className="ml-10">
                            <label className="text-base my-4 block" for="username">EMAIL</label>
                            <input className="text-base w-11/12 pl-2 pb-0.4 border-solid outline rounded-xl  text-black" type="text" id="username" name="username" required />
                        </div>
                        <div className="ml-10 my-6">
                            <label className="">DATE OF BIRTH:</label>
                            <input className="ml-3" type="date" />
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </div>

    );
}