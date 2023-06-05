import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Details/Loading";

const UseEffectExampl = () => {
  const [photo, setPhoto] = useState([]);
  const [load, setLoad] = useState(true);

  const apiFetch = async () => {
    const base = await fetch("https://jsonplaceholder.typicode.com/photos");
    const res = await base?.json();
    setPhoto(res);
    setLoad(false);

  };
  useEffect(() => {
    apiFetch();
  }, []);
  console.log(photo);

  if (load) {
    return <Loading/>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {photo.map((item, index) => {
            return (
              <>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={item.thumbnailUrl}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <h5 className="card-title"> Title : {item.title}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <NavLink
                        to={`/img/details/${item.id}`}
                        class="card-link"
                        className="btn btn-primary"
                      >
                        Card Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default UseEffectExampl;
