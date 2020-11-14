import React, {Component} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import menuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";

import {Events, animateScroll as scroll, scroller } from 'react-scroll'

class NavBar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll = (e) => {
        let element = e.target;
        
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
        // const style= {
        //     backgroundImage: `url(${img_header})`,
        //     width:"100%",
        //     height:"500px",
        //     backgroundSize:"cover"
        // }
 
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