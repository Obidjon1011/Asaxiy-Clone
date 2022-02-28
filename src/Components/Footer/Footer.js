import React from 'react'
import { Row,  Col, Container } from 'reactstrap'




export default function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg='12' className='bottom_fo text-center mt-5 fo'>
                        <Row>
                            <Col lg='3' md='4' sm='4'>
                                <strong>Malumot</strong><br />
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing 
                                </span>
                            </Col>
                            <Col lg='3'  md='4' sm='4'>
                                <strong>Malumot</strong><br />
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing 
                                </span>
                            </Col>
                            <Col lg='3'  md='4' sm='4'>
                                <strong>Malumot</strong><br />
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing 
                                </span>
                            </Col>
                            <Col lg='3'  md='4' sm='4' className='sm_none'>
                                <strong>Malumot</strong><br />
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing 
                                </span>
                            </Col>
                        </Row>
                    </Col>                   
                </Row>
                <Row className='mt-5 text-white'>
                    <Col lg='12'>
                        <Row className='ms-5'>
                            <Col lg='6' sm='4'>
                                <h5>Informatsia</h5>
                                <p>Malumot lorem dolurom</p>
                                <p>Malumot lorem</p>
                                <p>Malumot lorem sit amet</p>
                                <p>Malumot</p>

                            </Col>
                            <Col lg='6' sm='4'>
                                <h5>Contact</h5>
                                <p> <i className="fas fa-phone-alt me-3"></i>  +998932780808</p>
                                <p><i className="fas fa-envelope me-3"></i> icodeacademyuz@gmil.com</p>
                                <p><i className="fas fa-map-marker-alt me-3"></i> Manzil: Leneniskiy ko'chasi 18-uy</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12' className='text-center fs-4 bottom-footer p-2'>
                        <a style={{textDecoration: 'none', color: 'white'}} href='https://facebook.com/icodeacademyuz2'><i eria-hidden='true' className='fab fa-facebook me-4'> </i></a>
                        <a style={{textDecoration: 'none', color: 'white'}} href='http://instagram.com/icodeacademyuz'> <i className='fab fa-instagram me-4'></i></a> 
                        <a style={{textDecoration: 'none', color: 'white'}} href='https://www.youtube.com/channel/UCbX2WTfufV4NBRHY7dhzkJQ?view_as=subscriber'> <i className='fab fa-youtube me-4'></i></a>
                        <a style={{textDecoration: 'none', color: 'white'}} href='http://t.me/icodeacademyuz'><i className='fab fa-telegram me-4'></i></a> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
