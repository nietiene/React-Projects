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
        <div>
            <h1>Dropdown Menu Example</h1>
            <button onClick={toggleDropdown}>Toggle Dropdown</button>

            {isOpen && (
                <div ref={dropDownRef}>
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