import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Details = () => {
  const[details,setDetails]=useState([])
  const params = useParams()
  const getitem = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json()
    setDetails(data)
    console.log(data);
  }

  useEffect(() => {
    getitem()
  }, [])
  // console.log(details.address.city)
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Details</div>
        <div class="card-body">
          <h5 class="card-title">{details.name}</h5>
          <p class="card-text">User : {details.username}</p>
          <span class="card-text">Email : {details.email}</span>
          <span class="card-text"> | Phone No.{details.phone} </span>
          <p class="card-text">Website : {details.website} </p>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
}

export default Details