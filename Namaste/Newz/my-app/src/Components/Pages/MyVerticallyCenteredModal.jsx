import React from 'react'
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const MyVerticallyCenteredModal = (props) => {
  console.log(props);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props?.modaldetails.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Author :{props?.modaldetails.author}</h4>
          <p>{props?.modaldetails.description}</p>
          <Image src={props?.modaldetails.urlToImage} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal