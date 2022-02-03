import React, { useState } from "react";

import "./App.css";

const App = () => {
  const purple = "8e44ad";

  const [bg, setBg] = useState(purple);
  let [name, setName] = useState("CliCk Me");

  const bgChange = () => {
    let newBg = "#34495e";

    setBg(newBg);
    setName("Ouch! 🤪");
  };

  const bgback = () => {
    setBg(purple);
    setName("click me");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgback}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
