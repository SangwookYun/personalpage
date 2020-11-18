import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { render } from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap'
import './About.css'
import Image1 from '../img/responsibility.png'
import Image2 from '../img/motivation.png'
import Image3 from '../img/teamplayer.png'
import Image4 from '../img/dedicated.png'
import myPic from '../img/myPic.png'
import myPic2 from '../img/myPic2.png'
import SkillBars from './SkillBars'

const SKILLS = [
  {type: "Java", level: 92},
  {type: "C", level: 90},
  {type: "Python", level: 90},
];
const SKILLS2 = [
  {type: "HTML/CSS", level: 90},
  {type: "JavaScript", level: 92},
  {type: "NodeJs", level: 85},
  {type: "React, Bootstrap", level: 90}
];
const SKILLS3 = [
  {type: "mysql", level: 90},
  {type: "mongoDB", level: 80},
  {type: "AWS, firebase", level: 80}
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll_about);
  
  }
  handleScroll_about = (e) => {
      
      console.log(window.scrollY)
      if(window.scrollY>=1000) {
          setTimeout(() => {
              this.setState({ collapsed: false })
              }, 1000);
      }
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Container fluid>
        <Row style={{marginTop:"80px", marginBottom:"100px"}}>
          <Col xl={{span:8, offset:2}} style = {{textAlign:"center"}}> 
            <h1 className = "section_title">ABOUT ME</h1>
          </Col>
        </Row>
        <Row style={{marginBottom:"60px"}}>
          <Col xl = {{span:8, offset:2}}>
            <Row>
              <Col xl={3} className = "test3">
                <img className = "icon_strength" src = {Image1}></img>
                <div className = "title_char">RESPONSIBILITY</div>
                <p>Try to complete my duties and tasks with time management</p>
              </Col>
              <Col xl={3} className = "test3">
                <img className = "icon_strength" src = {Image2}></img>
                <div className = "title_char">MOTIVATION</div>
                <p>Willing to have challenges and want to improve tech skills</p>
              </Col>
              <Col xl={3} className = "test3">
                <img className = "icon_strength" src = {Image3}></img>
                <div className = "title_char">TEAMPLAYER</div>
                <p>Enjoy working and learning with other people</p>
              </Col>
              <Col xl={3} className = "test3">
                <img className = "icon_strength" src = {Image4}></img>
                <div className = "title_char">QUICK-LEARN</div>
                <p>A self-learner who is eager to learn new technologies</p>
              </Col>
            </Row>
            
          </Col>
          
        </Row>
        <Row style={{marginBottom:"50px"}}>
          <Col xl={{span:4, offset:2}}>
            <img src ={myPic2} style={{width:"100%", marginTop:"70px", marginBottom:"30px"}}></img>
            <div className = {`title_myself ${collapsed ? 'collapsed_about' : ""}`}><b>Name :</b> Sangwook Yun</div>
            <div className = {`title_myself ${collapsed ? 'collapsed_about' : ""}`}><b>Nationality :</b> Korean</div>
            <div className = {`title_myself ${collapsed ? 'collapsed_about' : ""}`}><b>Degree :</b>2-years Diploma(CST), BS(International Studies) </div>
            <div className = {`title_myself ${collapsed ? 'collapsed_about' : ""}`}><b>Hobbies :</b> Soccer, Piano, Cooking</div>
            <p className={`contents_myself ${collapsed ? 'collapsed_about' : ""}`}>I am currently a student at BCIT pursuing Computer System Technology Diploma.
  I am graduating in Dec 2020 and would like to work as a full-time software developer.

  I have experience working with Java, Javascript, Python, ReactJS, Nodejs and participate many projects and hackathons.</p>
          </Col>
          <Col xl ={{span:4, offset:1}}>
            <div>
              <SkillBars title = "Programming" hue="500" saturation="190" skills={SKILLS}></SkillBars>
              <SkillBars title = "WebProgramming" hue="500" saturation="190" skills={SKILLS2}></SkillBars>
              <SkillBars title = "Database" hue="500" saturation="190" skills={SKILLS3}></SkillBars>
            </div>
          </Col>
        </Row>
        
      </Container>     
        
    );
  }
  } 
  

export default About;
