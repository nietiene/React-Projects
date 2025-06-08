import React, { useState } from "react";
const Products = [
    {id: 1, name: 'Banana', price: 1},
    {id: 2, name: 'Banana', price: 2},
    {id: 3, name: 'Orange', price: 1.4},
];

function Shopping (){
    const [cart, setCart] = useState([]);

    const addToCart = ( Products ) => {
        setCart(prev => {
            const item = prev.find(i => i.id === Products.id);
            if(item) {
                return prev.map(i => 
                i.id === Products.id ? {...i, qty: i.qty + 1} : i
                );
            } else {
                return [...prev, {...Products, qty: 1}];
            }
        });
    };

    const removeFromCart = (ProductsId) => {
    setCart(prev => 
        prev.map(item => 
            item.id === ProductsId ? {...item, qty: item.qty - 1} : item // this decrease the quantity of the products
        )
        .filter(item => item.qty > 0) // thid method delete items that less than zero
    );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="bg-green-200 shadow-lg rounded-2xl p-7 min-h-screen">
            <h2 className="text-green-600 text-2xl text-center font-bold">Shopping Cart</h2>
            <h3 className="text-center font-medium text-green-500">Products</h3>
            {Products.map((products) => (
                   <div key={products.id}
                   className="flex flex-cols-2 sm:flex-cols-3 md:flex-cols-5">
                      <p>{products.name}</p>
                      <p>${products.price.toFixed(2)}</p>
                      <button onClick={() => addToCart(products)}>
                        Add To Cart
                      </button>
                    </div>
            ))}

            <h3>Cart</h3>
            {cart.length === 0 && <p>Cart is empty</p>}
            <ul>
                {cart.map(item => 
                    <li key={item.id}>
                        {item.name} X {item.qty} - ${item.price * item.qty}
                        <button onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                )}
            </ul>
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
    )
};


export default Shopping