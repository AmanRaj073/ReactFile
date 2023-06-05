import React from "react";
import { NavLink } from "react-router-dom";

const ProductDetails = (props) => {
  const { id,title, image } = props.props;
  return (
    <>
      <div className="col-sm-3">
        <div
          className="card"
          style={{
            boxShadow: "4px 4px 9px gray",
            height: "340px",
            alignItems: "center",
            display:"flex"
          }}
        >
          <img
            src={image}
            style={{ height: "200px", width: "200px" }}
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "12px" }}>
              {title}
            </h5>
            <br />
            <div>
              <center>
                {" "}
                <NavLink
                  to={`/details/${id}`}
                  className="btn btn-primary"
                  type="submit"
                  style={{}}
                >
                  Details
                </NavLink>
              </center>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default ProductDetails;
