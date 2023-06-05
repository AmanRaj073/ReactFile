import React, { useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const[noOfData,setNoOfData]=useState(9)
  const data = Product();
  console.log("data", data);
  return (
    <>
      <InfiniteScroll
        dataLength={data.slice(0, noOfData).length}
        next={() => {
          setNoOfData(noOfData + 3);
        }}
        hasMore={true}
      >
        <div className="container">
          <div className="row">
            {data.slice(0, noOfData).map((item) => {
              return <ProductDetails props={item} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Products;
