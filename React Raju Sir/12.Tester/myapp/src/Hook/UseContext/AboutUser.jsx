import React,{useContext} from 'react'
import CreateContext from "./Context/CreateContext";


const AboutUser = () => {
    const data = useContext(CreateContext);
  return (
    <>
      <h1>About Component</h1>
      <h4>Name : {data.name}</h4>
      <h4>Name : {data.email}</h4>
      <h4>Name : {data.phone}</h4>
    </>
  );
}

export default AboutUser