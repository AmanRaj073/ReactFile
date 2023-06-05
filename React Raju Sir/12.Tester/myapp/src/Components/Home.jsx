import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/">Home </Link>
          <Link to="/about">About </Link>
      <h1>This is Home Page</h1>
    </>
  );
}

export default Home