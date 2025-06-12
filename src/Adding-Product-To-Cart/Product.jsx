import React, { useState } from "react";

// Examples of product data

const products = [
    {id:1, name: 'Apple', price: 1.0},
    {id:2, name: 'Banana', price: 2.0},
    {id:3, name: 'Orange', price: 1.5},
];

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

   const addToCart = (products) => {
    const updatedCart = [...cart];
    const productInCart = updatedCart.find(item => item.id === products.id);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        updatedCart.push({...products, quantity: 1});
    }
    setCart(updatedCart);
   }
   const RemoveProduct = (productsId) => {
      setCart(prev => 
        prev.map((item) => item.id === productsId ? {...item, quantity: item.quantity - 1} : item)
        .filter(item => item.quantity > 0)
    );
   }

   const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
   };

   return (
    <div className="bg-blue-200 min-h-screen p-6">
        <h1 className="text-center font-extrabold text-2xl text-blue-500">Shopping Cart</h1>
        <h2 className="font-extrabold text-blue-500 text-xl text-center underline">Products</h2>
        {products.map((products) => (
            <div key={products.id} 
            className="grid gap-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-8">
                <span className="flex justify-between items-center">{products.name} - ${products.price.toFixed(2)}</span>
                <button onClick={() => addToCart(products)}
                    className="bg-blue-500 rounded-lg shadow-lg px-4 py-2 text-white hover:bg-blue-600 transition-colors">
                    Add To Cart
                </button>
            </div>

        ))}
<hr className="my-6 border-blue-500" />
        <h2 className="mt-7 text-center bg-blue-500 text-white shadow-lg">Your Cart</h2>
        {cart.length === 0 ? (
            <p className="text-gray-500">Your Cart is empty</p>
        ): (
            <ul className="grid gap-4 grid-cold-2 mt-3 shadow-md font-bold">
                {cart.map((item) => (
                    <li key={item.id} 
                    className="flex justify-between border border-blue-500 p-3 hover:bg-blue-600 hover:text-white transition duration">
                       <span className="text-blue-400">{item.name}</span> <span className="text-blue-400">{item.quantity}</span> <span className="text-blue-400"> ${item.price * item.quantity}</span>
                        <button onClick={() => RemoveProduct(item.id)}
                            className="bg-red-500 py-2 px-4 text-white rounded border border-red-700">Remove</button>
                    </li>
                ))}
            </ul>
        )
        }
  <h3>Total: ${getTotalPrice()}</h3>
    </div>
   )
}

export default ShoppingCart