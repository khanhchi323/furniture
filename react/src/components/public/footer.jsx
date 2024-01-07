import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <div className=" bg-[#EEEDEA]">
        <div className="flex justify-between items-center p-[10vh]">
          <div>
            <h4>Company</h4>
            <div className="flex flex-col">
              <Link to="">Home</Link>
              <Link to="">Categories</Link>
              <Link to="">About us</Link>
              <Link to="">Contact us</Link>
            </div>  
          </div>

          <div>
          <h4>Support</h4>
          <div className="flex flex-col">
            <Link to="">Help Center</Link>
            <Link to="">Safety Center</Link>
            <Link to="">Community Guidelines</Link>
          </div>          
          </div>

          <div>
          <h4>Legal</h4>
          <div className="flex flex-col">
            <Link to="">Cookies Policy</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Service</Link>
          </div>
          </div>

          <div>
            <p className="whitespace-pre-wrap">Trụ sở chính: 18A/1 Cộng Hòa, 
            Phường 4, Quận Tân Bình, Thành phố Hồ Chí Minh</p>
          </div>

        </div>
      </div>
    )
  }
  