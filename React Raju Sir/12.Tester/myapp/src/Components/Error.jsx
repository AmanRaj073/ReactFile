import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Link to="/">Home </Link>
          <Link to="/about">About </Link>
      <h1>Page Not Found 404.....</h1>
    </>
  );
}

export default Error