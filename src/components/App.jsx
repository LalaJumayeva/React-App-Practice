import React, { useState } from "react";

function App() {
  const [previous, next] = useState("0");

  function subtract() {
    next(previous - 1);
  }

  function add() {
    next(previous + 1);
  }

  return (
    <div id="div">
      <button onClick={subtract}>-</button>
      <h1>{previous}</h1>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
