import React, {Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import Linkify from 'react-linkify'
import './SingleProject.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function SingleProject(props) {  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

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
            <div className="title_modal" style ={{textAlign:"center"}}>{props.title}</div>
          </Modal.Header>
          <Modal.Body>
            <Row className = "contents_modal">
              <Col xl={12}>
                  <img className = "img_modal" src = {props.bgImage}></img>
              </Col>
            </Row>
            <Row className = "body_modal"> 
                <Row>
                <Col xl = {{span:10, offset:1}}>
                    <div>
                      <div className= "subHeader">
                        {props.type} |   {props.period} 
                      </div>         
                    </div>
                    <div className = "sub_contents_modal">
                      <div className = "description_modal">
                        {props.description}
                      </div>
                      <div className = "tech_modal">
                        {props.Technology}
                      </div>
                      <div className = "webpage_modal">
                        
                         <Linkify><b>WEBPAGE :</b>
                          {props.webpage}</Linkify> 
                        
                      </div>
                      <div className = "github_modal">
                        <Linkify>
                          <b>GITHUB :</b> {props.github}
                        </Linkify>
                      </div>
                    </div>
                  </Col>
              </Row>
              <Row style = {{width:"100%", textAlign:"center"}}>
                <Col xl={12}>
                  <Button style = {{margin:"auto", marginBottom:"10px", marginTop:"10px"}} variant="danger" onClick={handleClose}>
                    Close
                  </Button>   
                </Col>
                
              </Row>
              
            </Row>
              
              


          </Modal.Body>
          {/* <Modal.Footer>
         
          </Modal.Footer> */}
        </Modal>
    </div>
      
  );
}

  

export default SingleProject;
