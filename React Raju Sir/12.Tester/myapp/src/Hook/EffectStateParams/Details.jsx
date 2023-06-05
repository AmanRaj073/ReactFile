import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
    const {id} = useParams();
    
  const getitem = async () => {
    let baseUrl = "https://api.github.com";
    const data = await axios.get(`${baseUrl}/users/${id}`);
    setDetails(data?.data);
    console.log(data);
  };

  useEffect(() => {
    getitem();
  }, []);
    
  // console.log(details.address.city)
  return (
    <>
      <center>
        <div className="card bg-dark text-white " style={{ width: "30rem",marginTop:"42px",boxShadow:"18px 12px 12px  gray" }}>
          <img src={details.avatar_url} className="card-img" alt="img" />
          <div className="card-img-overlay-">
            <h5 className="card-title">Name : {details.name}</h5>
            <h5 className="card-title">Id : {details.id}</h5>
            <p className="card-text">Location : {details.location} </p>
            <p className="card-text">Follower : {details.followers} </p>
          </div>
        </div>
      </center>
    </>
  );
};

export default Details;
