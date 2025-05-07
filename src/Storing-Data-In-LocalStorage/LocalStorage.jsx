import React, {useEffect, useState }from "react";

const LocalStorage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if(storedCart) {
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const AddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item  => item.id !== productId));
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={() => AddToCart({id: 1, name:'Product 1', price: '$10'})}>Add Product 1</button>
            <button onClick={() => AddToCart({id: 2, name:'Product 2', price: '$20'})}>Add Product 2</button>
            <button onClick={() => AddToCart({id: 3, name:'Product 3', price: '$30'})}>Add Product 3</button>
          
            <h2>Your cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
         <ul>
            {cart.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </li>
            ))}     
        </ul>
          )}     
        </div>
    )
}

export default LocalStorage;