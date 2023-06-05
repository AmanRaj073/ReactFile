import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import LoadingSkelton from "./LoadingSkelton";

const About = () => {
  const [alldata, setAllData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modaldetails, setModaldetails] = useState();
  const [skelton, setSkelton] = useState(true);
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f51b7d1f5f344ae8835797ab85458d4a";
  const getData = async () => {
    const data = await axios.get(apiUrl);
    setAllData(data?.data.articles);
    setSkelton(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(alldata);

  // ----------------- Modal ---------------------

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

  // ======== Loading Effect =========

  if (skelton) {
    return <LoadingSkelton />;
  }

  return (
    <>
      <Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Row>
          {alldata.map((item, index) => {
            return (
              <>
                <Col xs>
                  <Card style={{ width: "18rem" }}>
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
        </Row>
      </Container>
    </>
  );
};

export default About;
