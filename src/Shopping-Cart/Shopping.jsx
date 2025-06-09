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
        <div className="bg-green-200 shadow-xl rounded-2xl p-8 min-h-screen text-green-500">
            <h2 className="text-3xl text-center font-extrabold mb-6">Shopping Cart</h2>
            <h3 className="text-xl font-semibold mb-6 text-green-600">Products</h3>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:flex-cols-3 gap-6">
            {Products.map((products) => (
                   <div key={products.id}
                   className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                      <p className="font-semibold text-lg">{products.name}</p>
                      <p className="mb-4 text-green-600">${products.price.toFixed(2)}</p>
                      <button onClick={() => addToCart(products)}
                        className="mbt-auto py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 trainsition">
                        Add To Cart
                      </button>
                    </div>
            ))}
    </div>
            <h3 className="mt-10">Cart</h3>
            {cart.length === 0 && <p className="text-gray-600">Cart is empty</p>}
            <ul className="space-y-6">
                {cart.map(item => 
                    <li key={item.id}
                    className="flex justify-center items-center p-4 rounded shadow">
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