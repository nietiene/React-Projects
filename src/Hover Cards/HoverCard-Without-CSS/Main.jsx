import Cards from "./card";
import React from "react";

const Main = () => {
    const Products = [
        {   id: 1,
            title: 'Product 1',
            description: ' This is Product 1',
            imageUrl: '/public/image/product1.jpeg'
        },
        {   id: 2,
            title: 'Product 2',
            description: ' This is Product 2',
            imageUrl: '/public/image/product 2.jpeg'
        },
        {   id: 3,
            title: 'Product 3',
            description: ' This is Product 3',
            imageUrl: '/public/image/product 3.jpeg'
        },
    ];

    return (
        <div>
            {Products.map((Products) => (
                <Cards
                 key={Products.id}
                 title={Products.title}
                 description={Products.description}
                 imagUrl={Products.imageUrl}

                />
            ))}
        </div>
    )
}

export default Main