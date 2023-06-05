import React, { useState } from "react";
import UseStateExample from "../UseState/UseStateExample";

const Inc = () => {
  const [inc, setInc] = useState(0);
  

  return (
    <>
      <div class="card text-center">
        <UseStateExample/>
        <div class="card-body">
          <h5 class="card-title" style={{ fontSize: "100px" }}>
            {inc}
          </h5>
          <p class="card-text">Increase With 👇....|....👇 Decrease with This</p>
          <button
            class="btn btn-info"
            onClick={() => {
              setInc(inc + 1);
            }}
          >
            +
          </button>

          <button
            class="btn btn-danger"
            style={{ margin: "12px" }}
            onClick={() => {
              setInc(inc - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
      {/* <h1></h1>
      <button
        onClick={() => {
          setInc(inc + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setInc(inc - 1);
        }}
      >
        -
      </button>
      <button
        type="reset"
        onClick={() => {
          setInc(0);
        }}
      >
        Reset
      </button> */}
    </>
  );
};

export default Inc;
