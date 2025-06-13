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
                  <h2 className="">{product.name}</h2>
                  <p>${product.price}</p>
                  <button onClick={() => AddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
            ))}
        </div>
    ) 
}