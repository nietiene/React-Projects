import React, { useState} from "react";

const product = [
    {id:1, name:'Apple'},
    {id:2, name:'Banana'},
    {id:3, name:'Orange'},
    {id:4, name:'Grapes'},
    {id:5, name:'Pineaple'},
    {id:6, name:'Mango'},
    {id:7, name:'Peatch'},
    {id:8, name:'Apple'},
];

const LiveSearch = () => {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [filteredProducts, setFiltredProducts] = useState(product);
    
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtred = product.filter(product => 
            product.name.toLocaleLowerCase().includes(query)
        );
        setFiltredProducts(filtred)
    };

    return (
        <div>
            <h1>Live Search</h1>
            <input type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products"
            />
             <ul>
                {filteredProducts.length === 0 ? (
                    <li>No Product found</li>
                ): (
                    filteredProducts.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))
                )}
             </ul>
        </div>
    )
}

export default LiveSearch;