import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "./Navbar.css";

import {animateScroll as scroll} from 'react-scroll'

class NavBar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll = (e) => {
        
        console.log(window.scrollY)
        if(window.scrollY<=500) {
            
            document.getElementById('nav_bar').classList.remove('black');
            console.log("top")
        }else if(window.scrollY>500) {

            document.getElementById('nav_bar').classList.add('black');
            console.log("here")
        }
    }

    render() {
 
        return (
            <Container fluid>
                <Row>
                    <Col id = "nav_main">
                        <nav id = "nav_bar" className="fixedNavbar">
                            <div className = "logo">
                          
                            </div>
                            <ul className="navbar-ul">
                                <li className="nav-item">
                                <p onClick = {()=>scroll.scrollTo(1000)}>About Me</p>
                                </li>
                                <li className="nav-item">
                                <p onClick = {()=>scroll.scrollTo(2500)}>Projects</p>
                                </li>
                                <li className="nav-item">
                                <p onClick = {()=>scroll.scrollTo(3200)}>Contact Me</p>
                                </li>
                            </ul>
                        </nav>
                        
                    </Col>
                    
                    
                </Row>
            </Container>
            
        )
    }   
}
export default NavBar;