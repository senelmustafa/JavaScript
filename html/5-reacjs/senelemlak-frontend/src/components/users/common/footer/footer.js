import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactBar from '../header/contact-bar'
import SocialBar from '../header/social-bar'

const Footer = () => {
    return (
         <section className="footer"> 
         <Container> 

             <Row> 
                 <Col md={6}>
                     <h4>About Us</h4>
                     <img src={logo} className="img-fluid" />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque ab aut! Vitae soluta aliquam illo et necessitatibus veritatis provident quibusdam accusantium nihil maiores, nobis, ut neque incidunt harum tempore?</p>
<SocialBar/>
                 </Col>

                    <Col md={3}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/vehicles">Cars</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                    </Col>

                    <Col md={3}> <h4>Contact Us</h4>
                    
                        <ContactBar/>
                        
                        </Col>

             </Row>
         </Container>
         </section>
    );
};

export default Footer;