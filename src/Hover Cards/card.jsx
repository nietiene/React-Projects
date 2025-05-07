import React, {useState} from "react";
import "./HoverCard.css";
const HoverCard = ({ tittle, description, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
             className="card"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
          
             >
       <img src={imageUrl} alt={tittle} className="card-image"/>
       <div className={`card-details ${isHovered ? 'show' : ''}`}> 
           <h3>{tittle}</h3>
           <h3>{description}</h3>
       </div>
        </div>
    )
} 

export default HoverCard