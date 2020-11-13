import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { render } from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap'
// import { GrLinkedin } from 'react-icons';
// import { SocialIcon } from 'react-social-icons';

import './Footer.css'



class Footer extends Component {
  scrollToTop = (event) => {
    console.log("Asdf")
    document.getElementById('root').scrollTo(0, 0);
    console.log(window.scrollY);
  };

  render() {
   const ref = React.createRef(); 
    return (
      <Container fluid>
        <Row className = "footer">
          <Col xl={12}>
            <div className = "footerTitle" style={{marginTop:"100px"}}>
              If you'd like to get in touch with me

            </div>  
            <div className = "footerIcon">
              
              {/* <SocialIcon className = "icons" url="https://www.linkedin.com/in/yun-sangwook-983771ab/" /> */}
              {/* <SocialIcon className = "icons"  onClick = {this.moveTo} network="email" />
              <SocialIcon className = "icons"  network="sharethis"/> */}
              {/* <SocialIcon className = "icons" url="https://github.com/SangwookYun" network= "github"/> */}
              
            </div>
            <div>
            https://github.com/SangwookYun
            </div>
            <div>
            https://www.linkedin.com/in/yun-sangwook-983771ab/
            </div>
            <div>
            7835 13th Ave, Burnaby
              Vancouver, BC
              Sangwook Yun
            </div>
          </Col>
        </Row>
      </Container>     
        
    );
  } 
}

  

export default Footer;
