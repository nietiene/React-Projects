import React, {useState, useEffect, useRef} from "react";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false); // Checks if drop down is opened
    const dropDownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsOpen(false) // close when user clicks on outside
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-400 p-4">
            <h1 className="font-medium text-gray- underline text-gray-800">Dropdown Menu Example</h1>
            <button onClick={toggleDropdown}
            className=" border border-gray-700 p-2 rounded-lg mt-4 hover:bg-gray-500 transition duration-300 shadow-lg">Toggle Dropdown</button>

            {isOpen && (
                <div ref={dropDownRef}
                className="bg-white mt-4 p-3 w-[10%] text-center shadow-2xl rounded-lg">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown