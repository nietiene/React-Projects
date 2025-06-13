import React, {useState, useRef, useEffect} from "react";

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdwnOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    const dropDownRef = useRef(null);
    const options = ['Option 1', 'Option 2', 'Option 3',];

    useEffect(() => {
        if (dropDownRef.current) {
            dropDownRef.current.focus();
        }
    }, []);
    const toggleDropdown = () => {
        setIsDropdwnOpen((prevState) => !prevState);
    };

    const handleKeyPressed = (e) => {
        if(e.key === 'Enter') {
            toggleDropdown();
        } else if( e.key === 'ArrowDown') {
            if(!isDropdownOpen) {
                setIsDropdwnOpen(true);
            } else {
                const nextOption = (selectedOption + 1) % options.length;
                setSelectedOption(nextOption);
            }
        } else if(e.key === 'ArrowUp') {
            if(isDropdownOpen) {
                const PrevOption = (
                    selectedOption - 1 + options.length) % options.length;
                    setSelectedOption(PrevOption);
            }
        }
    }
    const handleOptionClick = (index) => {
        setSelectedOption(index); // count index of the user
        setIsDropdwnOpen(false); // close after selection when user press on an option it will automaticaaly closed
    };

    return (
        <div className=" p-5 bg-lime-500 min-h-screen">
            <h1 className="">Keyboard Activated Dropdown with Navigator</h1>
            <div ref={dropDownRef} tabIndex={0} onKeyDown={handleKeyPressed}
            style={{border: '1px solid black', padding:'10px'}}
              className="mt-4"
            >
                <button onClick={toggleDropdown}
                 className=" border border-lime-600 p-2 rounded hover:bg-lime-400 transiton duration-300 w-full h-full">
                    Toggle Dropdown
                </button>
                {isDropdownOpen && (
                    <ul className="bg-lime-400 mt-5  p-3 rounded">
                        {options.map((options, index) => (
                            <li key={index}
                            style={{fontWeight: index === selectedOption ? 'bold' : 'normal'}}
                            onClick={() => handleOptionClick(index)}
                            >
                                 {options}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown