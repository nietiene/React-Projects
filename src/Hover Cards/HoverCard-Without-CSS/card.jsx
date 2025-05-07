import React, { useState } from "react";

const Cards = ({ title, description, imagUrl}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
       <img src={imagUrl} alt={title} />
       {isHovered && (
        <>
         <h2>{title}</h2>
         <p>{description}</p>
        </>
       )}
        </div>
    )
}

export default Cards