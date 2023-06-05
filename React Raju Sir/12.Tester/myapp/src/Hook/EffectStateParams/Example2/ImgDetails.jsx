import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ImgDetails = () => {
    const [imgDetails, setImgDetails] = useState([])
    const { id } = useParams()
    
    const getData = async() => {
        let baseUrl = "https://jsonplaceholder.typicode.com";
        const data = await axios.get(`${baseUrl}/photos/${id}`);
        setImgDetails(data?.data);
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <>
      <>
        <center>
          <div
            className="card bg-dark text-white "
            style={{
              width: "30rem",
              marginTop: "42px",
              boxShadow: "18px 12px 12px  gray",
            }}
          >
            <img src={imgDetails.thumbnailUrl} className="card-img" alt="img" />
            <div className="card-img-overlay-">
              <h5 className="card-title">Id : {imgDetails.id}</h5>
              <p className="card-text">Location : {imgDetails.title} </p>
            </div>
          </div>
        </center>
      </>
    </>
  );
}

export default ImgDetails