import React, { createContext, useContext, useState } from "react"; 
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems ] = useState([]);

    const AddToCart = (product) => {
        setCartItems((prev) => [...prev, product])
    }
    return (
        <CartContext.Provider value={{ cartItems, AddToCart }}>
           { children }
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);
