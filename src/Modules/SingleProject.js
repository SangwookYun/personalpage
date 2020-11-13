import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './SingleProject.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function SingleProject(props) {  
  return (
    <div className = "singleProject">
      <Card style={{ width: '18rem' }}>
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
    </div>
      
  );
}

  

export default SingleProject;
