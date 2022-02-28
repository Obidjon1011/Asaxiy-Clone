import React from 'react'
import { Row, Container, Col, Button} from 'reactstrap'
import Cart from '../../Media/cart.svg'
import Kitob1 from '../../Media/kitob1.png'
import Kitob2 from '../../Media/kitob2.png'
import Kitob3 from '../../Media/kitob3.png'
import Kitob4 from '../../Media/kitob4.png'



export default function Badiiy() {
    return (
        <>
            <Container>
                <Row className='mt-5 pt-5'>
                    <Col lg='3' className='mt-5 pt-5'>
                        <div className='bg-white chegirmalar-style shadow'>
                            <p className='text-secondary'>Подкатегории</p>
                            <h6 className='border-bottom'>Badiiy Adabyot(17)</h6>
                            <h6 className='border-bottom'>Biznes (2)</h6>
                            <h6 className='border-bottom'>Rivojlanish (1)</h6>
                            <h6 className='border-bottom'>Bolalar Adabyoti (7)</h6>
                            <h6 className='border-bottom'>Diniy Adabyot (5)</h6>
                            <h6 className='border-bottom'>Rus tilida (4)</h6>
                            <h6 className='border-bottom'>Ilm-fan va Darsliklar (2)</h6>
                            <h6 className='border-bottom'>Abiturentlar uchun Adabyot (0)</h6>
                            <h6 className='border-bottom'>Lug'at va So'zlashgich (9)</h6>
                            <h6 className='border-bottom'>O'quv Qurollari(8)</h6>
                            <h6>Aksesuar(3)</h6>
                        </div>

                    </Col>
                    <Col lg='9' className='mt-5 pt-5'>
                        <h5 className='text-secondary'>Rivojlanishga Oid</h5>
                        <Row>
                            <Col lg='3' className='mt-2'>
                                <div className='border-right card m2b shadow-custom' >
                                    <div className='card-body'>
                                        <div className='text-center mb-4' >
                                            <img width='160px'  src={Kitob1} alt='Img' />
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
                                <div className='border-right card m2b shadow-custom' >
                                    <div className='card-body'>
                                        <div className='text-center mb-4' >
                                            <img width='160px'  src={Kitob2} alt='Img' />
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
                                <div className='border-right card m2b shadow-custom' >
                                    <div className='card-body'>
                                        <div className='text-center mb-4' >
                                            <img width='160px'  src={Kitob3} alt='Img' />
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
                                <div className='border-right card m2b shadow-custom' >
                                    <div className='card-body'>
                                        <div className='text-center mb-4' >
                                            <img width='160px'  src={Kitob4} alt='Img' />
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
