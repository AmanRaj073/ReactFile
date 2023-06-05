import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);
const fetchData = async () => {
  const baseUrl = "https://fakestoreapi.com/products";
  const response = await axios.get(baseUrl);
  setProductData(response?.data);
};
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(productData);
  return productData
};

export default Product;
