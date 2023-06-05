import axios from "axios";
import React, { useEffect, useState } from "react";

const Tester = () => {
  const [photo, setPhoto] = useState([]);

  const getPhoto = async () => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    const responce = await axios.get(`${BaseURL}/users`);
    setPhoto(responce.data);
  };
  useEffect(() => {
    getPhoto();
  }, []);
  console.log(photo);
  return (
    <>
      {photo.map((item) => {
        return (
          <>
            <h1>{item.id}</h1>
          </>
        );
      })}
    </>
  );
};

export default Tester;
