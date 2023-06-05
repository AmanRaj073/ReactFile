import React, { useState } from 'react'

const UseStateExample = () => {
  const [color, setColor] = useState("🧐");  
const [colorDetails, setColorDetails] = useState({
  color: "black",
  text:"Hidden Message"
});

  return (
    <>
      <div class="card-body">
        <h5 class="card-title" style={{ fontSize: "60px" }}>
          My Favorite Color is&nbsp;
          <b style={{ fontSize: "60px", color: colorDetails.color }}>{color}</b>
        </h5>

        <button
          class="btn btn-primary"
          onClick={() => {
            setColor("Blue");
            setColorDetails({ color: "blue" });
          }}
        >
          Blue
        </button>

        <button
          class="btn btn-danger"
          style={{ margin: "12px" }}
          onClick={() => {
            setColor("Red");
            setColorDetails({ color: "red" });
          }}
        >
          Red
        </button>

        <button
          class="btn btn-success"
          style={{ margin: "12px" }}
          onClick={() => {
            setColor("Green");
            setColorDetails({ color: "green" });
          }}
        >
          Green
        </button>
        <button
          class="btn btn-warning"
          style={{ margin: "12px" }}
          onClick={() => {
            setColor("Yellow");
            setColorDetails({ color: "orange" });
          }}
        >
          Yellow
        </button>
      </div>
      <h1>{colorDetails.text}</h1> 
      <button onClick={() => {
        
        if (setColorDetails.text === "Hidden Message") {
          setColorDetails({ text: "Good Afternoon" });
        } else {
          setColorDetails({ text: "Hidden Message" });
        }
      }}>Click me</button>
    </>
  );
}

export default UseStateExample