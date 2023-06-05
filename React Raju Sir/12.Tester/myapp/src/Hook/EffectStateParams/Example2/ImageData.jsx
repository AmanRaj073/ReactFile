import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ImageData = () => {
  const [data, setData] = useState([]);
  const [loadmore, setloadmore] = useState(9);
  const [loadmoe, setloadmoe] = useState([]);

  const getData = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const fetchedData = await axios.get(`${baseUrl}/photos`);
    setData(fetchedData?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const slice = data.slice(0, loadmore);

  const setLoadData = () => {
    setloadmore(loadmore + 9);
  };
  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {slice.map((item, index) => {
            return (
              <>
                {setloadmoe(item)}
                <div className="col-sm-4">
                  <div
                    className="card"
                    style={{ boxShadow: "4px 4px 9px gray" }}
                  >
                    <img
                      src={item.thumbnailUrl}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Photo Id : {item.id}</h5>
                      <p>{item.title}</p>
                      <NavLink
                        to={`/img/details/${item.id}`}
                        class="card-link"
                        className="btn btn-primary"
                      >
                        Details
                      </NavLink>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
                <br />
              </>
            );
          })}
        </div>

        <button
          className="btn btn-dark d-block w-100"
          onClick={() => setLoadData()}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default ImageData;
