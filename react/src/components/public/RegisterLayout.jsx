import React from "react";
import Background from "../../assets/public/noithat-intro5.jpeg"
export default function registerForm() {
    return (

        <div className="font-sans m-0 p-0 flex items-center justify-center bg-white h-screen" style={{ backgroundImage: `url(${Background})` }} >
            <div className="text-black bg-transparent w-96 p-20px rounded-lg shadow-md z-10 shadow-2xl">
                <h2 className="text-lg ml-20">Register</h2>
                <div className="mr-25px mb-20px rounded-sm flex">
                    <div className="mr-25px mb-20px rounded-sm">
                        <label className="text-base ml-6 mb-2 block" for="username">First name</label>
                        <input className="text-base w-20 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="text" id="username" name="username" required />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm ">
                        <label className="text-base ml-6 mb-2 block" for="username">Last name</label>
                        <input className="text-base w-25 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="text" id="username" name="username" required />
                    </div>
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base ml-6 mb-2 block" for="username">User name</label>
                    <input className="text-base w-80 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="text" id="username" name="username" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base mb-2 ml-6 block" for="password">Password</label>
                    <input className="text-base w-80 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="password" id="password" name="password" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base ml-6 mb-2 block" for="numberphone">Number Phone</label>
                    <input className="text-base w-80 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="text" id="numberphone" name="numberphone" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base mb-2 ml-6 block" for="email">Email</label>
                    <input className="text-base w-80 p-10px ml-6 border-solid outline rounded bg-transparent text-white" type="email" id="email" name="email" required />
                </div>
                <button className="bg-amber-300 text-white p-2 py-1 mt-3 ml-20 border-none text-lg cursor-pointer rounded-3xl hover:bg-amber-200" type="submit">Đăng kí</button>
                <div className="pt-3 pb-3 ml-20 ">I had an account <a className="decoration-none	" href="/login">Log in</a>

                </div>
            </div>
        </div>


    );
}
