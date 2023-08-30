import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Utility/NavBar";
import "./App.css"
import HomePage from "./Page/Home/HomePage";



const App = ()=>{
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App ; 