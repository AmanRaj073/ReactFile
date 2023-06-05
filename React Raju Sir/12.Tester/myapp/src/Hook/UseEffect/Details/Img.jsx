import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Img = () => {
  const [details, setDetails] = useState([]);
  const param = useParams();
  const apiFetch = async () => {
    const apidata = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${param.id}`
    );
    const data = await apidata.json();
    setDetails(data);
  };
  useEffect(() => {
    apiFetch();
  }, []);
    console.log(details);
  return (
    <>
      <center>
        {" "}
        <div className="card bg-dark text-white" style={{ width: "600px" }}>
          <img src={details.thumbnailUrl} className="card-img" alt="img" />
          <div className="card-img-overlay">
            <h5 className="card-title">{details.title}</h5>
            <p className="card-text">Card Id No : {details.id}</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </center>
    </>
  );
};

export default Img;
