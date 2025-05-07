import React, {useState, useEffect} from "react";

const Window = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(windowWidth.innerWidth); // update state with new window width
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>Window Resize Example</h1>
            <p>Current Window Width: {windowWidth}</p>
        </div>
    )
}

export default Window