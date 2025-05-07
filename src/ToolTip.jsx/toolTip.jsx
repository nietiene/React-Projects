import React, {useState} from "react";

const ToolTip = () => {
    const [isVisible, setIsVisible] = useState(false);
    const close = () => setIsVisible(false);
return(<div>
        <h2>This is tool tip</h2>
    <button
        onClick={() => setIsVisible(true)}
        >
            ToolTip
        </button>
        {isVisible && (
          <div>
              <p>This is tool Tip</p>
              <button onClick={close}>Close</button>
          </div>
        )}
    </div>
)
}

export default ToolTip