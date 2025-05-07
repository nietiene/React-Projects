import HoverCard from "./card";
import React from "react";
import "./HoverCard.css";
const Main = () => {
    const Products = [
        {
            id:1,
            tittle:'Product 1',
            description:'This is description of product 1',
            imageUrl:'public/image/product1.jpeg'
        },
        {
            id:2,
            tittle:'Product 2',
            description:'This is description of product 2',
            imageUrl:'public/image/product 2.jpeg'
        },
        {
            id: 3,
            tittle:'Product 3',
            description:'This is description of product 3',
            imageUrl:'public/image/product 3.jpeg'
        }
    ];

    return (
        <div className="card-container">
            {Products.map((product) => (
                <HoverCard
                key={product.id}
                tittle={product.tittle}
                description={product.description}
                imageUrl={product.imageUrl}
                />
            ))}
        </div>
    )
}

export default Main