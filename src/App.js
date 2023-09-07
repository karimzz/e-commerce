import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Utility/NavBar";
import "./App.css"
import HomePage from "./Page/Home/HomePage";
import ShopPage from "./Page/Shop/ShopPage";
import CartPage from "./Page/Cart/CartPage";
import AboutPage from "./Page/Aboutus/AboutPage";



const App = ()=>{
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App ; 