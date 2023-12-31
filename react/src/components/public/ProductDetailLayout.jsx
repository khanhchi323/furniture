import React from "react";
import Intro8 from '/src/assets/public/noithat-intro8.jpg'
export default function ProductDetailLayout() {
    return (
        <div className="font-sans m-0 p-0  bg-white h-screen w-full">
            <div className="bg-gray-300 h-12 text-2xl  ">
                <div className="p-auto pt-1.5 text-center lg:text-left md:text-left lg:pl-3 md:pl-3 ">Product Detail</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="lg:w-1/2 ">
                    <img className="sm:w-64 sm:m-3 h-56 w-64 m-auto lg:w-3/4 lg:h-full md:m-3 rounded-xl" src={Intro8} alt="Hình sản phẩm" />

                </div>
                <div className="lg:w-1/2">
                    <h1 className="lg:text-3xl sm:text-base text-xl  m-4">Cái name rồ đớt dài dài</h1>
                    <div className="flex items-center my-3 mx-3">
                        <span className="lg:text-xl line-through text-gray-500 text-sm">1.000.000đ</span>
                        <span class="ml-3 lg:text-3xl font-bold text-black-500 text-2xl">900.000đ</span>
                        <span class="ml-6 p-0.5 bg-red-700 text-xs text-white rounded px-1">giảm 10%</span>
                    </div>
                    <span className="my-3 mx-3 ">Mô tả sản phẩm</span>

                    <div className="flex" >
                        <div className="w-1/3 ml-3">
                            <button className="text-lg p-2" onclick="decrementQuantity()">-</button>
                            <input className="w-8 text-center" type="number" id="quantity" value="1" min="1" />
                            <button className="text-lg p-2" onclick="incrementQuantity()">+</button>
                        </div>
                        <div className="hover:bg-slate-700 p-2 px-4 hover:text-white text-base text-center bg-white text-gray-700 border-gray-600 border border-transparent ">
                            <button>Add to cart</button>
                        </div>
                    </div>
                    <div className="my-6 ml-3">SKU-</div>
                    <div className="my-6 ml-3">Category:</div>
                    <div className="">
                        <h2 className="mx-3">Chi tiết sản phẩm</h2>
                        <div className="w-4/5 mx-3">ghế này nằm sướnggg</div>
                    </div>
                </div>
            </div>
        </div>
    );
}