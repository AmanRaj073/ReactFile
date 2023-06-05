import React from "react";
import CreateContext from "./CreateContext";

const ContextState = ({ children }) => {
  const state = {
    name: "Aman",
    email: "aman@123",
    phone: 98218121,
  };
  return (
    <>
    <CreateContext.Provider value={state}>
        {children}
    </CreateContext.Provider>
    </>
  );
};

export default ContextState;
