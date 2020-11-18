import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import './Project.css'
import SingleProject from './SingleProject'
import webpage1 from '../img/webpage1.png'
import webpage2 from '../img/webpage2.png'
import webpage3 from '../img/webpage3.png'
import webpage4 from '../img/webpage4.png'
import webpage5 from '../img/webpage5.png'
import webpage6 from '../img/webpage6.png'

class Project extends Component {

  state = {
    pjts : [
      {id:"pjt1", Period : "", type:"School Project", title :"Love Your Planet", bgImage: `${webpage1}`, contents :"environmental friendly platform", Technology:"MongoDB, Express, React, Typescript"},
      {id:"pjt2", Period : "", type:"Personal Business", title :"LET EAT GO", bgImage: `${webpage2}`, contents :"Creating a community restaurant info web platform  ", Technology:"React, AWS, Heroku, Express"},
      {id:"pjt3", Period : "", type:"School Project", title :"Abalone", bgImage: `${webpage3}`, contents :"Game 'Abalone' with Machine learning", Technology:"HTML/CSS, JAVASCRIPT, Machine Learning"},
      {id:"pjt4", Period : "", type:"Personal Business", title :"TAIWAN FEST", bgImage: `${webpage4}`, contents :"Creating a a website that provides festival attendees a creative way to view artworks that are featured in 2020 festival", Technology:"React, Heroku"},
      {id:"pjt5", Period : "", type:"School Project", title :"FISABC", bgImage: `${webpage5}`, contents :"Assist client to improve data collection process by developing a python script", Technology:"Python"},
      {id:"pjt6", Period : "", type:"Personal Business", title :"LUNARFEST", bgImage: `${webpage6}`, contents :"Developing an app designed for Lunar New Year celebrations in Canada, providing festival information (e.g. maps) and schedules for festival attendees", Technology:"Android Studio, Firebase"}
      // {id:"pjt7", title :"Eco-city Summit 2019", bgImage: `${webpage1}`, contents :"Developed an application to find volunteer work and link automatically the certificates of the volunteer results for the resume", Technology:"bootstrap, HTML/CSS, javascript, Firebase"},
      // {id:"pjt8", title :"Angel-Hack 2019", bgImage: `${webpage1}`, contents :"Build a medical application that connects users to local trained volunteers who provide first-aid emergency service", Technology:"GoogleMap API, Javascript, HTML/CSS"},
      // {id:"pjt9", title :"Girls in Tech 2019", bgImage: `${webpage1}`, contents :"developed an environment friendly application ", Technology:"HTML/CSS, javascript, Bootstrap"}, 
    ]
  }

  render() {

    return (
      <Container fluid style={{backgroundColor:"lightGray", height:"1200px"}}>
        <Row style={{marginTop:"80px", marginBottom:"100px"}}>
          <Col xl={{span:8, offset:2}} style = {{textAlign:"center"}}> 
            <h1 className ="section_title">PROJECT</h1>
          </Col>
        </Row>
        
        <Row>
          <Col xl={{span:10, offset:1}} style = {{textAlign:"center"}}>
            {this.state.pjts.map((pjt, index)=> {
              console.log(index)
              console.log(pjt)
              return (
                <SingleProject
                  title = {pjt.title}
                  bgImage = {pjt.bgImage}
                  contents = {pjt.contents}
                  type= {pjt.type}
                  Technology = {pjt.Technology}></SingleProject>
              )

            })

            }
          
          </Col>
        </Row>
      </Container>     
        
    );
  }  
}

  

export default Project;
