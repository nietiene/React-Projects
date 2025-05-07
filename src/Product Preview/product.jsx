import React, { useState } from "react";

const products = [
    {
        id: 1,
        title: 'Product 1',
        description: 'This is a detailed descrition of product 1',
        price: '$19.99',
        imageURL: '/public/image/product1.jpeg'
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'This is a detailed descrition of product 2',
        price: '$29.99',
        imageURL: '/public/image/product 2.jpeg'
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'This is a detailed descrition of product 3',
        price: '$39.99',
        imageURL: '/public/image/product 3.jpeg'
    }
];

const AppFile = () => {
    const [modalData, setModalData] = useState(null); // to storing data modal
    const [isModalOpen, setIsModalOpen] = useState(false); // open and close modal

    const openModal = (products) => {
        setModalData(products);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    }


    return (
        <div>
            {products.map((product) => (
                <div key={product.id} onClick={() => openModal(product)}>
                  <img src={product.imageURL} alt={product.title} />
                  <h2>{product.title}</h2>
                  <h2>{product.price}</h2>
                </div>
            ))}
            {isModalOpen && modalData && (
                <>
                <button onClick={closeModal}><span>&times;</span></button>
                <img src={modalData.imageURL} alt={modalData.title} />
                  <h3>{modalData.title}</h3>
                  <p>{modalData.description}</p>
                  <p><strong>{modalData.price}</strong></p>
                </>
            )}
        </div>
    )
}

export default AppFile