import React, { useReducer } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const intialState = 0;
function reducer(state, action) {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
}

const Example = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log("Fn State",state);
  return (
    <>
      <div style={{ margin: "200px" }}>
        <h1>useReducer : {state}</h1>

        <Stack direction="row" spacing={2}>
          <Button
            color="success"
            onClick={() => {
              dispatch("inc");
            }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              dispatch("dec");
            }}
          >
            -
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              dispatch("reset");
            }}
          >
            Reset
          </Button>
        </Stack>
      </div>
      {/* <button
          onClick={() => {
            dispatch("inc");
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            dispatch("dec");
          }}
        >
          Dec
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button> */}
    </>
  );
};

export default Example;

// import React, { useReducer } from "react";
// import TestCount from "./UseReducer";
// const intialName = "Aman"
// function reducer(state, action) {
//     switch (action.type) {
//         case "change": return state = "Raj";
//         case "revert": return state = "Aman";
//         default: throw new Error();
//     }
// }

// const Example = () => {
//     const [state, dispatch] = useReducer(reducer, intialName);
//     return (
//       <div>
//         <h1>{state}</h1>
//         <button onClick={() => dispatch({ type: "change" })}>Change</button>
//         <button onClick={() => dispatch({ type: "revert" })}>Revert</button>
//       </div>
//     );
// }
// export default Example
