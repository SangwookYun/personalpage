import React, {Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import './SingleProject.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function SingleProject(props) {  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const test = (props)=> {


  }
  

  return (
    <div className = "singleProject">
      <Card onClick={handleShow} style={{ width: '18rem' }}>
        <CardImg top width="100%" src={props.bgImage} />
        <CardBody>
          <CardTitle className = "cardtitle">{props.title}</CardTitle>
          <CardText>
            {props.contents}
          </CardText>
          <CardText>
            <div style = {{display:"inline-block", fontWeight:"bold", marginRight:"10px"}}>Tech :  </div>
            {props.Technology}
          </CardText>

        </CardBody>
      </Card>
      <Modal size ="lg" show={show} onHide={handleClose}>
          <Modal.Header style ={{textAlign:"center"}}closeButton>
            <Modal.Title style ={{textAlign:"center"}}>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className = "contents_modal">
              <Col xl={12}>
                  <img className = "img_modal" style = {{width:"100%", }}src = {props.bgImage}></img>
              </Col>
            </Row>
            <Row>
              {props.type}
              {props.contents}
              {props.Technology}
              {/* {props.github}
              {props.url} */}

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
      
  );
}

  

export default SingleProject;
