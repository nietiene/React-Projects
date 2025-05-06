import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from  "./Home";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

export default function Main(){
    return (
       <CartProvider>
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
       </CartProvider>

    )
}