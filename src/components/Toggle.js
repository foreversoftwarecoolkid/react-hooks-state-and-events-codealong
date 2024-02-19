import React, { useState } from "react";

function Toggle() {
  // Step 2: Set up the initial state
  const [isOn, setIsOn] = useState(false);

  // Step 4: Call the setter function to update state
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  // Step 3: Use the state variable in the component
  const color = isOn ? "red" : "white";

  // Complete Toggle component
  return (
    <div>
      <h1>Toggle Button Example</h1>
      <button style={{ background: color }} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;
