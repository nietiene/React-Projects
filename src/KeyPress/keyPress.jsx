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
    <div className="bg-blue-300 min-h-screen ">
        <h2 className="text-white text-2xl font-bold underline text-center">Reacting Key Presses</h2>
        <p className="text-blue-500 text-xl text-center">Last key pressed: <span>{keyPressed}</span></p>
    </div>
   )
    }

    export default KeyPress