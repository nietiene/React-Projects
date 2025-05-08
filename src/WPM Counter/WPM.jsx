import React, {useState, useEffect, useRef} from "react";

const WPM = () => {
    const [textToType, setTextToType] = useState("The Quick brown for fox jumps over lazy dog");
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [wpm, setWpm] = useState(0)
    const [isStarted, setIsStarted] = useState(false)
    const [isFinished, setisFinished] = useState(false);

    const inputRef = useRef();
    const startTest = () => {
        if (!isStarted) {
            setIsStarted(true);
            setStartTime(Date.now());
        }
    };
    const handleInputChange = (e) => {
        if (!isStarted) return;
        setUserInput(e.target.value);

        //Calculate WPM every time user types
        const wordTyped = e.target.value.trim().split(/\s+/).length;
        const timeInMinutes = (timeElapsed / 60000) || 1;
        setWpm(Math.round(wordTyped / timeInMinutes));

        // check if user has completed text

        if (e.target.value === textToType) {
            setisFinished(true);
            setTimeElapsed(Date.now() - startTime);
        }
    }

    const handleTimer = () => {
        if (isStarted && !isFinished) {
            const timeInterval = setInterval(() => {
                if(isFinished) {
                    clearInterval(timeInterval);
                } else {
                    setTimeElapsed(Date.now() - startTime);
                }
            }, 1000);
            return () => clearInterval(timeInterval);
        }
    }

    useEffect(() => {
       if (isStarted && !isFinished) {
        const interval = setInterval(() => {
            setTimeElapsed(Date.now() - startTime)
        }, 1000)
        return () => clearInterval(interval) 
       }
    }, [isStarted, isFinished, startTime]);

    //Format the time into minutes and seconds

    const formalTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor(time % 60000) / 1000;
    return `${minutes}:${seconds < 10 ? '0': ''} ${seconds}`;
    }

    return (
        <div>
            <h1>Typing Test</h1>
            {!isStarted && (
                <div>
                   <p>Click on the input field start the text</p>
                </div>
            )}
            <p>{textToType}</p>
            <textarea value={userInput} ref={inputRef}
            onChange={handleInputChange}
            onFocus={startTest}
            placeholder="Start Typing Here ..."
            ></textarea>
            <p><strong>Time:</strong> {formalTime(timeElapsed)}</p>
            <p><strong>WPM:</strong>{wpm}</p>
            {isFinished && <div><strong>Test Finished!!</strong></div>}
        </div>
    )
}

export default WPM