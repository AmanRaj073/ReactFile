import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Githubx = () => {
  const [user, setuser] = useState([]);
  const [noOfElement, setnoOfElement] = useState(3);

  const getData = async () => {
    const baseUrl = "https://api.github.com";
    const data = await axios.get(`${baseUrl}/users`);
    setuser(data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const slice = user.slice(0, noOfElement);
  console.log(user)
  console.log(slice);
  // console.log(noOfElement);
  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {slice.map((item, index) => {
            return (
              <>
                <div className="col-sm-4">
                  <div
                    className="card"
                    style={{ boxShadow: "4px 4px 9px gray" }}
                  >
                    <img
                      src={item.avatar_url}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <h5 className="card-title"> Employee Id : {item.id}</h5>
                      <p>Login Id : {item.login.toUpperCase()}</p>
                      <NavLink
                        to={`/details/${item.id}`}
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
          onClick={() => {
            setnoOfElement(noOfElement + noOfElement);
            console.log(noOfElement);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Githubx;
