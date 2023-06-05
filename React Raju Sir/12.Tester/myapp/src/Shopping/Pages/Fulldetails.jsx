import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Fulldatas = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const baseurl = "https://fakestoreapi.com";
    const data = await axios.get(`${baseurl}/products/${id}`);
    setdata(data?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  // const[title,description]=data
  console.log(data);
  return (
    <>
      <center>
        <div
          className="card bg-dark text-white "
          style={{
            width: "30rem",
            marginTop: "42px",
            boxShadow: "18px 12px 12px  gray",
            border: "none",
          }}
        >
          <img
            src={data.image}
            style={{ height: "400px" }}
            className="card-img"
            alt="img"
          />
          <div
            className="card"
            style={{ color: "black", fontSize: "12px", border: "none" }}
          >
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              {data.title}
            </h5>
            <h5 className="card-title" style={{ fontSize: "10px" }}>
              {data.description}
            </h5>
            <p className="card-text" style={{ fontSize: "32px" }}>
              Price : {data.price}{" "}
            </p>
            <p className="card-text" style={{ fontSize: "18px" }}>
              ✨Rating : {data?.rating?.rate}{" "}
            </p>
            <div>
              <center>
                {" "}
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  style={{ width: "200px", }}
                >
                  Buy Now
                </button>
              </center>
            </div>

            <br />
          </div>
        </div>
      </center>
    </>
  );
};
export default Fulldatas;
