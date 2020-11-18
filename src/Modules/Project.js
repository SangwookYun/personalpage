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
      {id:"pjt1", webpage:"TO BE UPDATED", github:"TO BE UPDATED", description: "'Love Your Planet' is a developing project for a social media platform with the theme of sustainablilty. The role of the team includes testing current systems and functionality, fixing bugs, and developing features that are incomplete/not started such as Backend API for updating user info." , Period : "SEP 2020 - NOV 2020", type:"School Project", title :"Love Your Planet", bgImage: `${webpage1}`, contents :"environmental friendly platform",Technology:"MongoDB, Express, React, NodeJS, Typescript"},
      {id:"pjt2", webpage:"https://leteatgo.herokuapp.com/  (this is temporary deployed webpage)", github:"https://github.com/SangwookYun/L.E.G-pjt", description: "This project is to build a platform for marketing & sharing information about restaurants around users. The client is a young startup team and they want to advertise restaurants to help to overcome COVID and give many discounts to users. In the future, mobile versions of this application will be developed." , Period : "NOV 2020 - Present", type:"Personal Project", title :"LET EAT GO", bgImage: `${webpage2}`, contents :"Creating a community restaurant info web platform  ", Technology:"React, AWS, Heroku, Express"},
      {id:"pjt3", webpage:"TO BE UPDATED", github:"TO BE UPDATED", description: "A school Project to develop Game Abalone applying Machine Learning & Artificial Intelligence technique" , Period : "OCT 2020 - NOV 2020", type:"School Project", title :"Abalone", bgImage: `${webpage3}`, contents :"Game 'Abalone' with Machine learning", Technology:"HTML/CSS, JAVASCRIPT, Machine Learning"},
      {id:"pjt4", webpage:"https://gallery.torontotaiwanfest.ca/GalleryHome", github:"https://github.com/SangwookYun/2020-Toronto-TAIWANfest-Online-Gallery", description: "The Taiwanfest is annual festival held by ACSEA(Asian Canadian Special Event Association). Due to Covid, this festival was switched to virtual exhibition. Our team created a dynamic website to provide festival attendees to continue participate in the fesival through viewing various interactive artworks." , Period : "JUN 2020 - AUG 2020", type:"Personal Project", title :"TAIWAN FEST", bgImage: `${webpage4}`, contents :"Creating a a website that provides festival attendees a creative way to view artworks that are featured in 2020 festival", Technology:"React, Heroku"},
      {id:"pjt5", webpage:"TO BE UPDATED", github:"TO BE UPDATED", description: "This school project is to systemize annual data-collecting work of 'FISA BC', Federation of Independent School Assoication. Our team creates a python-coded program to connect their existing webpage with their MS access data file", Period : "MAY 2020 - JUN 2020", type:"School Project", title :"FISABC", bgImage: `${webpage5}`, contents :"Assist client to improve data collection process by developing a python script", Technology:"Python"},
      {id:"pjt6", webpage:"https://play.google.com/store/apps/details?id=ca.acsea.funstop", github:"https://github.com/SangwookYun/LunarFest2020", description: "This App is to build advertising 2020 Lunafest event held in Vancouver and encourage users to participate in this event. Overall, more than 200 users were used this application" , Period : "DEC 2019 - JAN 2020", type:"Personal Project", title :"LUNARFEST", bgImage: `${webpage6}`, contents :"Developing an app designed for Lunar New Year celebrations in Canada, providing festival information (e.g. maps) and schedules for festival attendees", Technology:"Android Studio, Firebase"}
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
                  description= {pjt.description}
                  type= {pjt.type}
                  period = {pjt.Period}
                  webpage = {pjt.webpage}
                  github = {pjt.github}
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
