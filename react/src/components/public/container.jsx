import React from "react";
import Intro1 from '/src/assets/public/noithat-intro1.jpg'
import Intro2 from '/src/assets/public/noithat-intro2.jpg'
import Intro3 from '/src/assets/public/noithat-intro3.jpg'
import Intro4 from '/src/assets/public/noithat-intro4.jpg'
import Intro5 from '/src/assets/public/noithat-intro5.jpeg'
import Intro6 from '/src/assets/public/noithat-intro6.jpeg'
import Intro7 from '/src/assets/public/noithat-intro7.jpeg'
import Intro8 from '/src/assets/public/noithat-intro8.jpg'
import Intro9 from '/src/assets/public/noithat-intro9.jpg'




export default function Container() {
    return (
      <div style={{}} className=" m-4 mt-6 font-roboto">
        <div className="flex justify-between items-center ml-12 mr-12">
          <div className="  ">
            <p className=" font-bold text-2xl">New Collection</p>
            <p className=" text-gray-500">These products are made with wood from forest certified to be responsibly</p>
          </div>
          <div className="">
            <button type="button" style={{border:'solid 2px #FFCC00'}} className=" font-serif text-white bg-yellow-400 p-1 px-6  rounded-full hover:bg-white hover:text-yellow-5  00 transition-colors duration-300 ease-in-out">See more</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-y-2.5 gap-x-2.5 m-10">       
          <div>
            <div className="">
              <img className=" mb-3 rounded-xl" src={Intro8} alt="" />
              <img className=" h-60 w-full rounded-xl" src={Intro6} alt="" />    
            </div>
          </div>
          <div>
            <img className="rounded-xl" src={Intro7} alt="" />
          </div>
          <div className="">
            <img className=" mb-3 rounded-xl" src={Intro5} alt="" />
            <img className=" h-60 w-full rounded-xl" src={Intro1} alt="" />  
          </div>
        </div>

        {/* <div
            className="bg-cover bg-center h-screen "
            style={{ backgroundImage: `url(${Background})` }}
        ></div> */}
      </div>

      
    )
  }
  