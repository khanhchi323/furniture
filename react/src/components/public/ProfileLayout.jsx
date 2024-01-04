import React from "react";
export default function ProfileLayout() {
    return (
        <div className="font-sans m-0 p-0 min-h-screen bg-cover bg-no-repeat">
            <div className="bg-teal-700 w-full h-1/3">
                <h2 className="p-16 pt-12 text-3xl text-white ">Individual Profile</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center mt-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            <img className="w-48 h-48 rounded-full md:mt-[-100px]" src="src/assets/public/bg1.jpg" alt="#" />
                        </div>
                        <h2 className="text-4xl m-2.5 mb-2">Đừu Mạnh Lam</h2>
                        <h3 className="text-xl m-2.5 mt-1.5 text-slate-600">Hồ Chí Minh - Việt Nam</h3>
                        <a href="./EditProfile" className="bg-teal-800 text-white px-3 py-1 mt-3 text-lg cursor-pointer rounded-full hover:bg-green-700">Edit Profile</a>

                        <div className="h-0.5 w-6/7 bg-slate-400 mt-3 mx-auto"></div>

                        <div className="mt-4">
                            <div className="text-2xl m-1 mb-2">Date of Birth: 01/01/2003</div>
                            <div className="text-2xl m-1 mb-2">Address: ................................. </div>
                            <div className="text-2xl m-1 mb-2">Mail: runway@gmail.com</div>
                            <div className="text-2xl m-1 mb-2">Phone: 0 9 0 8 8 8 6 6 6 6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
