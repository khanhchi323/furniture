import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/public/home";
import AboutUs from "./views/public/AboutUs"
import Login from "./views/public/Login";
import Register from "./views/public/Register";
import EditProfile from "./views/public/EditProfile";
import Profile from "./views/public/Profile";


export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}


