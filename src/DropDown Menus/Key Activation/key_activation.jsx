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
        <div className="bg-yellow-500 min-h-screen p-4">
            <h1 className="text-yellow-900 underline font-bold ">Key Activated DropDown Example</h1>
            <div tabIndex={0}
             onKeyDown={handleKeyPress}
             >
             <button onClick={toggleDropDown} className="border border-yellow-900 p-2 mt-5 hover:bg-yellow-600">Toggle Dropdown</button>   
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