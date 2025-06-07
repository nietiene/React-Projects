import React, {useState} from "react";

const products = [
    {id:1, name: 'Orange', price: 2},
    {id:2, name: 'mango', price: 2},
    {id:3, name: 'biscuit', price: 3},
    {id:4, name: 'sweet potatoes', price: 4},
    {id:5, name: 'apple', price: 5},
    {id:6, name: 'pineaple', price: 6},
    {id:7, name: 'Lemon', price: 7},
    {id:8, name: 'Meat', price: 11},
    {id:9, name: 'fish', price: 10},
    {id:10, name: 'Ground Nuts', price: 2},
    {id:11, name: 'Juice', price: 1},
    {id:12, name: 'Cassava', price: 3},
    {id:13, name: 'Floor of cassava', price: 2},
    {id:14, name: 'Irish Potatoes', price: 4},
    {id:15, name: 'Chippsy', price: 5},
]
const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [query, setQuery] = useState("");
    const [filtred, setFiltred] = useState([]);

    const search = (e) => {
        const query = e.target.value.toLowerCase();
        setQuery(query);
        const filtered = products.filter(products => 
            products.name.toLocaleLowerCase().includes(query)
        )
        setFiltred(filtered);
    }
    const addToCart = ( products ) => {
        setCart(prevCart => {
             const item = prevCart.find(item => item.id === products.id)
             if(item) {
                return prevCart.map(item => item.id === products.id ? {...item, qty: item.qty + 1} : item);
             } else {
                return [...prevCart, {...products, qty: 1}];
             }
        });
    }
 
    const removeFromCart = (productid) => {
       setCart(prevCart => 
         prevCart.map(item => 
            item.id === productid ? {...item, qty: item.qty - 1} : item)
            .filter(item => item.qty > 0)
       );
    }
    

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const productToDispay = query ? filtred : products;

    return (
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6 font-bold text-blue-500">🛒Shopping Cart</h1>
          <div className="mb-6">
          <h2 className="text-center block text-2xl text-blue-500">Products In Store</h2>
          <p className="text-blue-500 font-lg font-medium mb-2">Search Products</p>
          </div>
          <input type="search"  value={query} 
          onChange={search}
          placeholder="Type your search...."
          className="w-full border border-blue-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-500 placeholder:text-blue-500"
          />
         {query && filtred.length === 0 ? (<p className="text-red-500 mt-2 ">No Product Found</p>) : 
         (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
           {productToDispay.map((product) => (
            <div key={product.id}
             className="border p-3 rounded-lg shadow hover:shadow-lg trainsition duration-300">
               <p className="font-medium">Name: <strong>{product.name}</strong></p>
               <p className="mb-2">Price: <strong>${product.price}</strong></p>
               <button onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600  trainsition duration-200 hover:shadow-lg">Add To Cart</button>
           </div>
           ))}  
          </div>  
         ) 
        }
          {/* {products.map((product) => (
            <div key={product.id}>
               <p>Name: <strong>{product.name}</strong></p>
               <p>Price: <strong>${product.price}</strong></p>
               <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          ))} */}

          <h1 className="text-blue-500 text-2xl font-semibold mb-4">🧺 Your Cart</h1>
          {cart.length === 0 && <p className="text-red-500">Your Cart is empty 😰😰</p>}
          <div className="space-y-4 mb-6">
             {cart.map((item) => (
                <div key={item.id}
                className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
                 <p className="font-medium">Name: <strong>{item.name}</strong></p>
                 <p>Price: <strong>${item.price}</strong></p>
                 <p>Quantity: <strong>{item.qty}</strong></p>
                 <button onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 rounded hover:bg-red-600">Remove</button>
                </div>
             ))}
          </div>
          <p className="text-2xl font-bold text-blue-500">Total Amount: <strong className="text-2xl font-bold text-green-500">${totalAmount}</strong></p>
        </div>
    )
}


export default ShoppingCart