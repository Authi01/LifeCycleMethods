import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifecycleExample from "./components/LifecycleExample";
import UseEffectEx from "./components/UseEffectEx";
import UseStorageHook from "./components/UseStorageHook";

function App() {
  const [name, setName] = UseStorageHook("username", "Guest");
  return (
    <>
      <div>
        {/* <LifecycleExample /> */}
        <UseEffectEx />
      </div>
      {/* <div>
        <h1>Hello, {name}!</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> */}
    </>
  );
}

export default App;
