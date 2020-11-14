import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import {Row, Col, Button} from 'react-bootstrap'
import {Events, animateScroll as scroll, scroller } from 'react-scroll'
import React, {Component} from 'react'
import sample from './img/test2.mp4';
import About from './Modules/About'
import NavBar from './Modules/Navbar'
import Footer from './Modules/Footer'
import Project from './Modules/Project'

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  } 
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    })
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    })
  } 
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

   
  render() {
    return (
      <div>
        
        
        <div>
          
        <NavBar></NavBar>
          <Row className = "title">
            <Col xl ={{span:6, offset:3}} style={{marginBottom:"20px"}}> 
              <h2> Hello, My name is Sangwook Yun</h2>
            </Col>
            <Col xl ={{span:6, offset:3}} style={{marginBottom:"20px"}}>
              <h4> I'm a Software Engineer</h4>
            </Col>
            <Col xl ={{span:4, offset:4}} style={{marginBottom:"20px"}}>
              <Button className = "btn_primary" onClick = {()=>scroll.scrollTo(1000)}> About Me</Button>
            </Col>
       
          </Row>
          <video className='videoTag' autoPlay muted>
            <source src={sample} type='video/mp4' />
          </video>
          
        <About></About>
        <Project></Project>
        <Footer></Footer>
        
        </div>
      </div>
      
    );
  }
}
  

export default App;
