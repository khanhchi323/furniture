import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./views/public/home";
import AboutUs from "./views/public/AboutUs"
import Login from "./views/public/logIn";


export default function App() {

    return (
        <div>
          <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/LogIn' element={<Login/>}/>  
           <Route path='/AboutUs' element={<AboutUs/>}/> 
          </Routes>
        </div>
    );
}


