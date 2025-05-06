import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
    const {cartItems} = useCart()
   
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your Cart is Empty</p>
            ) : (
                <ul>
                {cartItems.map((item, index) => (
                     <li key={index}>
                     {item.name} - ${item.price}
                    </li>
                ))}
                                        
                </ul>
            )}
        </div>
    )
}