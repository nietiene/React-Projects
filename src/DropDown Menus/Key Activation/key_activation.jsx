import React, { useState } from "react";

const Key_Activation = () => {
    const [isDropDonwOpen, setIsDropDonwOpen] = useState(false);

    const toggleDropDown = () => {
        setIsDropDonwOpen(prevState => !prevState);
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter' || e.key === '') {
            toggleDropDown();
        }
    };

    return (
        <div>
            <h1>Key Activated DropDown Example</h1>
            <div tabIndex={0}
             onKeyDown={handleKeyPress}
             >
             <button onClick={toggleDropDown}>Toggle Dropdown</button>   
             {isDropDonwOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
             )}
            </div>
        </div>
    )
 }

 export default Key_Activation