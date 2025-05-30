import React from "react";
import { Products } from "./Product";
import { useCart } from "./CartContext";


export default function Home(){
    const {AddToCart} = useCart();
    return (
        <div>
            <h1>Products</h1>
            {Products.map((product) => (
                <div key={product.id}>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                  <button onClick={() => AddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
            ))}
        </div>
    ) 
}