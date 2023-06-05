import React, { useContext } from 'react'
import CreateContext from "./Context/CreateContext";
const Result = () => {
    const data = useContext(CreateContext);
    console.log(data);
  return (
      <>
        <h1>
          Result Component    
          </h1>
          <h4>Name : { data.name}</h4>
          <h4>Name : { data.email}</h4>
          <h4>Name : { data.phone}</h4>
      </>
  )
}

export default Result