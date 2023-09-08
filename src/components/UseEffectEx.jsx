import React, { useState, useEffect } from "react";

// Child component
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component is mounted to the DOM");

    return () => {
      console.log("Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component has updated");
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Component is rendering");

  return (
    <div>
      <h2>Component Lifecycle Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

// Parent component
function LifecycleExample() {
  const [showApp, setShowApp] = useState(true); //state is set to true - app is shown

  const toggleComponent = () => {
    setShowApp((prevShowApp) => !prevShowApp);
  };

  return (
    <div>
      <h1>LifecycleExample</h1>
      <button onClick={toggleComponent}>Toggle App Component</button>
      {/* conditional rendering */}
      {showApp && <App />}
    </div>
  );
}

export default LifecycleExample;
