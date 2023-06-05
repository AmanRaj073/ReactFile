import React from 'react'
import Crausol from '../Components/Core/Product/Crausol'
import Headline from '../Components/Common/Headline'

const Products = () => {
  return (
    <>
      <Headline title="Products" />
      
      <div className="container-fluid product py-5 my-5">
  <div className="container py-5">
    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
      <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
      <h1 className="display-6">Tea has a complex positive effect on the body</h1>
          </div>
          
                  <Crausol/>
  </div>
</div>

      </>
  )
}

export default Products