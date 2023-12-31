import React from "react";
import Background from "../../assets/public/8.jpg"
export default function registerForm() {
    return (

        <div className="font-sans m-0 p-0 flex items-center justify-center bg-white h-screen" style={{ backgroundImage: `url(${Background})` }} >
            <div className="text-white  w-96 p-20px rounded-lg shadow-lg shadow-neutral-950 z-10 ">
                <h2 className="text-2xl font-bold mb-4 text-center mt-4">Register</h2>
                <div className="mr-25px mb-20px rounded-sm flex">
                    <div className="mr-25px mb-20px rounded-sm">
                        <label className="text-base ml-8 my-1.5 block" for="username">First name</label>
                        <input className="text-base w-36 p-10px ml-8 border-solid outline rounded-xl bg-transparent text-white" type="text" id="username" name="username" required />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm ">
                        <label className="text-base ml-7 my-1.5 block" for="username">Last name</label>
                        <input className="text-base w-36 p-10px ml-7 border-solid outline rounded-xl bg-transparent text-white" type="text" id="username" name="username" required />
                    </div>
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base ml-8 my-1.5 block" for="username">User name</label>
                    <input className="text-base w-80 p-10px ml-8 border-solid outline rounded-xl bg-transparent text-white" type="text" id="username" name="username" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base my-1.5 ml-8 block" for="password">Password</label>
                    <input className="text-base w-80 p-10px ml-8 border-solid outline rounded-xl bg-transparent text-white" type="password" id="password" name="password" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base ml-8 my-1.5 block" for="numberphone">Number Phone</label>
                    <input className="text-base w-80 p-10px ml-8 border-solid outline rounded-xl bg-transparent text-white" type="text" id="numberphone" name="numberphone" required />
                </div>
                <div className="mr-25px mb-20px rounded-sm">
                    <label className="text-base my-1.5 ml-8 block" for="email">Email</label>
                    <input className="text-base w-80 p-10px ml-8 border-solid outline rounded-xl bg-transparent text-white" type="email" id="email" name="email" required />
                </div>
                <button className="bg-amber-300 text-white px-2 py-1 my-3 border-none text-lg cursor-pointer rounded-full hover:bg-amber-200" type="submit">Register</button>
                <div className="pt-3 pb-3 text-center shadow.md text-white">I already have an account ? <a className="decoration-none" href="/login">Log in</a>

                </div>
            </div>
        </div>


    );
}
