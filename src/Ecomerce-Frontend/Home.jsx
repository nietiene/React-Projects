import React from "react";
import { Products } from "./Product";
import { useCart } from "./CartContext";


export default function Home(){
    const {AddToCart} = useCart();
    return (
        <div className="bg-blue-400 min-h-screen">
            <h1 className="ms-3 font-bold text-2xl text-white">Products</h1>
            {Products.map((product) => (
                <div key={product.id}
                className="ms-3">
                  <h2 className="text-white font-bold">{product.name}</h2>
                  <p className="text-green-400 text-xl font-bold">${product.price}</p>
                  <button onClick={() => AddToCart(product)}
                    className="bg-blue-500 p-2 text-white font-bold rounded mt-2 hover:bg-blue-600 transition duration-200">
                    Add To Cart
                  </button>
                </div>
            ))}
        </div>
    ) 
}