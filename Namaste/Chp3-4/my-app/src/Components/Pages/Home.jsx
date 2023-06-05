import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import LoadingSkelton from "./LoadingSkelton";

 

const Home = () => {
  const [alldata, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const [skelton, setSkelton] = useState(true);
  const [loadmore, setLoadmore] = useState(9);
  const [modalShow, setModalShow] = useState(false);
  const [modaldetails, setModaldetails] = useState();

  //==============  Api Fetch ====================

  const apiUrl =
    "https://newsapi.org/v2/everything?q=apple&from=2023-05-19&to=2023-05-19&sortBy=popularity&apiKey=f51b7d1f5f344ae8835797ab85458d4a";
  const getData = async () => {
    const data = await axios.get(apiUrl);
    setAllData(data?.data.articles);
    setSkelton(false);
    setSearchFilter(data?.data.articles);
  };

  useEffect(() => {
    getData();
    console.log("render");
  }, []);

  // console.log(alldata);

  //==============  Search ====================

  const filterdata = (search, alldata) => {
    const resfilterData = alldata.filter((item) => {
      return item.title.includes(search);
    });
    return resfilterData;
  };

  const searchFn = () => {
    const data = filterdata(search, alldata);
    setSearchFilter(data);
  };

  // ============== Load more ====================
  let slice = searchFilter.slice(0, loadmore);
  let datalength = slice.length;

  // ==================== Modal Box ====================

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modaldetails?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Author :{modaldetails?.author}</h4>
          <p>{modaldetails?.description}</p>
          <Image src={modaldetails?.urlToImage} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // ====================  Loading Effect ====================

  if (skelton) {
    return <LoadingSkelton />;
  }

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "12px",
          }}
        >
          <b
            style={{
              fontSize: "12px",
              color: "green",
              textShadow: "-10px 10px 5px rgba(0,0,0,0.3)",
            }}
          >
            Total Result {datalength}
          </b>
          <input
            className="form-control"
            style={{ marginLeft: "645px", width: "20%" }}
            type={search}
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              searchFn();
            }}
            className="btn btn-danger"
            type="submit"
          >
            Search
          </button>
        </div>
        <br />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Row>
          {/* Use searchFilter without slice */}
          {slice.map((item, index) => {
            return (
              <>
                <Col xs>
                  <Card
                    style={{
                      width: "18rem",
                      boxShadow: "-30px 30px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Card.Img variant="top" src={item?.urlToImage} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "16px" }}>
                        {item?.title}
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: "15px" }}
                      >
                        Author : {item?.author}
                      </Card.Subtitle>
                      <Card.Text style={{ fontSize: "8px" }}>
                        Updated : {item?.publishedAt}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setModalShow(true);
                          setModaldetails(item);
                        }}
                      >
                        Show details
                      </Button>
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              </>
            );
          })}
          <button
            className="btn btn-success d-block w-100"
            onClick={() => {
              setLoadmore(loadmore + loadmore);
            }}
          >
            Load More
          </button>
          <br />
          <br />
          <br />
        </Row>
      </Container>
    </>
  );
}

export default Home