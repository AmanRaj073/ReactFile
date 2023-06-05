import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Product = () => {
  return (
      <>
    <div className="container-fluid product py-5 my-5">
  <div className="container py-5">
    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
      <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
      <h1 className="display-6">Tea has a complex positive effect on the body</h1>
    </div>
    <OwlCarousel className="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s">
      <a href className="d-block product-item rounded">
        <img src="img/product-1.jpg" alt="" />
        <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 className="text-primary">Green Tea</h4>
          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
        </div>
      </a>
      <a href className="d-block product-item rounded">
        <img src="img/product-2.jpg" alt="" />
        <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 className="text-primary">Black Tea</h4>
          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
        </div>
      </a>
      <a href className="d-block product-item rounded">
        <img src="img/product-3.jpg" alt="" />
        <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 className="text-primary">Spiced Tea</h4>
          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
        </div>
      </a>
      <a href className="d-block product-item rounded">
        <img src="img/product-4.jpg" alt="" />
        <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 className="text-primary">Organic Tea</h4>
          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
        </div>
      </a>
    </OwlCarousel>
  </div>
</div>
{/* Products End */}
</>
  )
}

export default Product