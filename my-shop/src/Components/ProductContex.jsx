import axios from 'axios';
import React,{createContext, useEffect, useState} from 'react'


export const ProductContexT = createContext()

const ProductContex = ({ children }) => {
    const [products, setproducts] = useState([]);

    //Fetch Products
    useEffect(() => {
      const baseurl = "https://fakestoreapi.com/products";
      const apidata = async () => {
        const data = await axios.get(baseurl);
        setproducts(data?.data);
      };
      apidata();
    }, []);
    console.log(products);
    return <ProductContexT.Provider value={products}>{children}</ProductContexT.Provider>
}

export default ProductContex