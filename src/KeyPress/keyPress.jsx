import React, {useState, useEffect} from "react";

const KeyPress = () => {
     const [keyPressed, setKeyPressed] = useState("");

     useEffect(() => {
        const HandleKyeDown = (event) => {
            setKeyPressed(event.key); // Update state with each key pressed
        };

        window.addEventListener('keydown', HandleKyeDown);
        return () => {
            window.removeEventListener('keydown', HandleKyeDown);
         }
     }, []) // Array runs once

   return (
    <div>
        <h2>Reacting Key Presses</h2>
        <p>Last key pressed: {keyPressed}</p>
    </div>
   )
    }

    export default KeyPress