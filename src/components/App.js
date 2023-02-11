import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, SetisClicked] = useState("");

  const handlechange = () => {
    SetisClicked("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  console.log(SetisClicked);
  return (
    <div id="main">
      <p id="para">{isClicked}</p>
      <br />
      <button id="click" onClick={handlechange}> clickme</button>
    </div>
  );
}


export default App;
