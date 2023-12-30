import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/public/Home";
import AboutUs from "./views/public/AboutUs"
import Login from "./views/public/Login";
import Register from "./views/public/Register";


export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}


