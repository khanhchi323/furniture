import React from "react";
export default function ProfileLayout() {
    return(
        <div className="font-sans m-0 p-0 h-screen bg-cover bg-no-repeat">
             <div className="bg-emerald-400 w-full h-1/3">
                <h2 className="p-16 pt-12 text-3xl">Individual Profile</h2>
             </div>
             <div>
                <div className="flex">
                    <div className="w-full h-1/3 text center">
                        <div className="text-center">
                        <div className="flex items-center justify-center"> <img className="w-48 h-48 rounded-full m-2.5" src="src/assets/public/bg1.jpg" alt="#" /></div>
                            <h2 className="text-4xl m-2.5 mb-2">Đừa Mạnh Lam</h2>
                            <h3 className="text-xl m-2.5 mt-1.5 text-slate-600">Hồ Chí Minh - Việt Nam</h3>
                            <a href="./EditProfile" className="bg-green-900 text-white  px-3 py-1 mt-3 text-lg cursor-pointer rounded-full hover:bg-green-700">EditProfile</a>
                        <div className="mt-4">
                            <div className="text-2xl m-1 mb-2">Date of birth: 01/01/2003</div>
                            <div className="text-2xl m-1 mb-2">Adress:........................</div>
                            <div className="text-2xl m-1 mb-2">Mail: runway@gmail.com</div>
                            <div className="text-2xl m-1 mb-2">Phone: 0908886666</div>
                        </div>

                        </div>

                    </div>
                    
                </div>
                
             </div>
        </div>
    )
}