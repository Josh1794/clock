import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

function tick() {
  const element = (
    <div className="time">
      <h1>It is {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
