import React from "react";
import ReactDom from "react-dom";

const mainElement = document.createElement("div");

document.body.appendChild(mainElement);

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%", background: "red" }}>
      <h1>Hi from a react appㄴㄴㄴ</h1>
    </div>
  );
};

ReactDom.render(<App />, mainElement);
