import React from "react";
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"
const Home = () => {
    return (
      <>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Aston Martin Vantage</h5>
                <p>
                  The Vantage heart beats with a 4.0 litre twin-turbocharged V8
                  engine. It races from 0-62 mph in just 3.6 seconds and reaches
                  its pinnacle of 195 mph with ease..
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Aston Martin DB11</h5>
                <p>
                  DB11 exploits its inner strength and powerful performance with
                  completely re-worked chassis, steering and electronics.
                  Revised suspension with adaptive damping ...
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>2017 Acura NSX</h5>
                <p>
                  The NSX's $157,800 starting price with $1,800 destination
                  charge puts it in a league with high-end sports cars such as
                  the Audi R8 and Porsche 911 Turbo,
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Acura TLX</h5>
                <p>
                  The TLX houses a potent 2.0-liter, VTEC Turbo engine boasting
                  272 horsepower 108 and 280 lb.-ft. of torque 110, for sharper
                  throttle response and more thrilling ...
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        ?{/* -------------------------- Featureed -------------------- */}
        <div class="card text-center" style={{ background: "Tomato" }}>
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Welcome to Road-X</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam officia iste dolores fuga optio accusamus perferendis
              repellat consequuntur. Labore aliquam suscipit optio accusamus
              autem repudiandae ab, deserunt illo enim nemo!
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
        ?{/* -------------------------- Cards -------------------- */}
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-4">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mercedes-Benz </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BMW </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={img7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Honda</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={img8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Porsche</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Home;