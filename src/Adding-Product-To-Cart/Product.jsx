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
    <div className="bg-blue-200 min-h-screen">
        <h1 className="text-center font-extrabold text-2xl text-blue-500">Shopping Cart</h1>
        <h2 className="font-extrabold text-blue-500 text-xl text-center underline">Products</h2>
        {products.map((products) => (
            <div key={products.id} 
            className="m-5 grid sm:grid-cols-1 grid-cols md:grid-cols-2 md:grid-cols-3 p-2 bg-blue-300 shadow-lg ">
                <span className="text-xl p-2 text-blue-600">{products.name} - ${products.price.toFixed(2)}</span>
                <button onClick={() => addToCart(products)}
                    className="bg-blue-500 w-[40%] ms-[160%] rounded-lg shadow-lg text-white hover:bg-blue-600">
                    Add To Cart
                </button>
            </div>

        ))}
<hr />
        <h2 className="mt-7 text-center">Your Cart</h2>
        {cart.length === 0 ? (
            <p>Your Cart is empty</p>
        ): (
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - ${item.price * item.quantity}
                        <button onClick={() => RemoveProduct(item.id)}>Remove</button>
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