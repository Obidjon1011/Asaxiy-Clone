import React from 'react'
import { Row, Container, Col, Button} from 'reactstrap'
import Cart from '../../Media/cart.svg'
import Img1 from '../../Media/m2img.jpg'
import Img2 from '../../Media/m2img2.jpg'
import Img3 from '../../Media/m2img3.jpg'
import Img4 from '../../Media/m2img4.jpg'



export default function Diniy_Adabyot() {
    return (
        <>
            <Container>
                <Row className='mt-5 pt-5'>
                    <Col lg='3' className='mt-5 pt-5 '>
                        <div className='bg-white chegirmalar-style shadow'>
                            <p className='text-secondary'>Подкатегории</p>
                            <h6 className='border-bottom'>Kitob(17)</h6>
                            <h6 className='border-bottom'>Telefon (2)</h6>
                            <h6 className='border-bottom'>Kompyuter(1)</h6>
                            <h6 className='border-bottom'>O'yinchilar Uchun (7)</h6>
                            <h6 className='border-bottom'>Konditsaner(5)</h6>
                            <h6 className='border-bottom'>Texnika(4)</h6>
                            <h6 className='border-bottom'>Televizor(2)</h6>
                            <h6 className='border-bottom'>Dasturxon(0)</h6>
                            <h6 className='border-bottom'>Sog'liq uchun jihozlar(9)</h6>
                            <h6 className='border-bottom'>Oshxona(8)</h6>
                            <h6 className='border-bottom'>Ofis uchun(3)</h6>
                            <h6 className='border-bottom'>Instrument(0)</h6>
                            <h6 className='border-bottom'>Oyinchoq(2)</h6>
                            <h6>Aksesuar(3)</h6>
                        </div>
                      
                    </Col>
                    <Col lg='9' className='mt-5 pt-5'>
                        <h5 className='text-secondary'>Chegirmalar</h5>
                        <Row>
                            <Col lg='3' className='mt-2'>
                                <div className='border-right card m2b shadow-custom' >
                                    <div className='card-body'>
                                    <span className='bg-warning rounded text-white p-1'>Chegirma</span>
                                        <div className='text-center'>
                                            <img width='160px'  src={Img1} alt='Img' />
                                        </div>
                                        <span className='s'>Elektorink Kitob PocketBook 624 Touch s</span>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i><br />
                                        <small className='text-danger'><del>1 520 000</del></small><br />
                                        <span className='float-start'>1 241 000 UZS</span>
                                        <img className='float-end m-0' src={Cart} alt='cart' />
                                        <div className='pt-1 '>
                                            <Button className='mt-4 All-buttons float-end'>PocketBook</Button><br />
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col lg='3' className='mt-2'>
                                <div className='border-right card m2b shadow-custom'>
                                    <div className='card-body'>
                                    <span className='bg-warning rounded text-white p-1 '>Chegirma</span>
                                        <div className='text-center'>
                                            <img width='160px'  src={Img2} alt='Img' />
                                        </div>
                                        <span className='s'>Elektorink Kitob PocketBook 624 Touch s</span><br />
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i><br />
                                        <small className='text-danger'><del>1 520 000</del></small><br />
                                        <span className='float-start'>1 241 000 UZS</span>
                                        <img className='float-end m-0' src={Cart} alt='cart' />
                                        <div className='pt-1 '>
                                            <Button className='mt-4 All-buttons float-end'>PocketBook</Button><br />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='3' className='mt-2'>
                                <div className='border-right card m2b shadow-custom'>
                                    <div className='card-body'>
                                        <span className='bg-warning rounded text-white p-1 '>Chegirma</span>
                                        <div className='text-center'>
                                            <img width='160px'  src={Img3} alt='Img' />
                                        </div>
                                        <span className='s'>Elektorink Kitob PocketBook 624 Touch s</span>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i><br />
                                        <small className='text-danger'><del>1 520 000</del></small><br />
                                        <span className='float-start'>1 241 000 UZS</span>
                                        <img className='float-end m-0' src={Cart} alt='cart' />
                                        <div className='pt-1 '>
                                            <Button className='mt-4 All-buttons float-end'>PocketBook</Button><br />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='3' className='mt-2'>
                                <div className='border-right card m2b shadow-custom '>
                                    <div className='card-body'>
                                    <span className='bg-warning rounded text-white p-1 '>Chegirma</span>
                                        <div className='text-center'>
                                            <img width='160px'  src={Img4} alt='Img' />
                                        </div>
                                        <span className='s'>Elektorink Kitob PocketBook 624 Touch s</span>
                                        <i className="far fa-star "></i>
                                        <i className="far fa-star "></i>
                                        <i className="far fa-star "></i>
                                        <i className="far fa-star "></i>
                                        <i className="far fa-star "></i><br />
                                        <small className='text-danger'><del>1 520 000</del></small><br />
                                        <span className='float-start'>1 241 000 UZS</span>
                                        <img className='float-end m-0' src={Cart} alt='cart' />
                                        <div className='pt-1 '>
                                            <Button className='mt-4 All-buttons float-end'>PocketBook</Button><br />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Col lg='12' className='mt-4'>
                            <nav aria-label="Page navigation example" >
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="https://icodeacademy.uz" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="https://icodeacademy.uz">1</a></li>
                                    <li className="page-item"><a className="page-link" href="https://icodeacademy.uz">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://icodeacademy.uz">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="https://icodeacademy.uz" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}
