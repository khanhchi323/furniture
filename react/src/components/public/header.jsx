import React from "react";
import Background from "../../assets/public/bg-main.svg";

export default function Header() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <div className="h-[8vh] text-white">
        Chổ này là thanh nav
      </div>
    </div>
  );
}