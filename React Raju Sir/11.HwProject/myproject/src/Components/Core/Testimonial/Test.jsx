import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Test = () => {
  return (
      <>
       {/* Testimonial Start */}
<div className="container-fluid testimonial py-5 my-5">
  <div className="container py-5">
    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
      <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
      <h1 className="display-6">What our clients say about our tea</h1>
    </div>
    <OwlCarousel className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.5s">
      <div className="testimonial-item p-4 p-lg-5">
        <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
        <div className="d-flex align-items-center justify-content-center">
          <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" alt />
          <div className="text-start ms-3">
            <h5>Client Name</h5>
            <span className="text-primary">Profession</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item p-4 p-lg-5">
        <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
        <div className="d-flex align-items-center justify-content-center">
          <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" alt />
          <div className="text-start ms-3">
            <h5>Client Name</h5>
            <span className="text-primary">Profession</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item p-4 p-lg-5">
        <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
        <div className="d-flex align-items-center justify-content-center">
          <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" alt />
          <div className="text-start ms-3">
            <h5>Client Name</h5>
            <span className="text-primary">Profession</span>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </div>
</div>
{/* Testimonial End */}

      </>
  )
}

export default Test