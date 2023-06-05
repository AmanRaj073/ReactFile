import React, { useContext } from 'react'
import { ProductContexT } from './ProductContex';

const Home = () => {
    const data = useContext(ProductContexT)
    console.log("Data",data);
  return (
    <div>
          <h1>Home{data[1].title}</h1>
    </div>
  );
}

export default Home