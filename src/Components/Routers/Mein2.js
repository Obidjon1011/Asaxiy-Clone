import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import Img1 from '../../Media/m2img.jpg'
import Img2 from '../../Media/m2img2.jpg'
import Img3 from '../../Media/m2img3.jpg'
import Img4 from '../../Media/m2img4.jpg'
import Cart from '../../Media/cart.svg'
import { NavLink } from 'react-router-dom'



export default function Mein2() {
    return (
        <>
            <Row>
                <div>
                    <Row>
                        <Col lg='3' md={{ size: 4 }} className='mt-4' >
                            <div className='border-right card m2b h-100 shadow-custom' >
                                <input type="hidden" />
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img1} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img2} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span><br />
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img3} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom '>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img4} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col lg='3' md={{ size: 4 }} className='mt-4' >
                            <div className='border-right card m2b h-100 shadow-custom' >
                                <input type="hidden" />
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img1} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img2} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span><br />
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img3} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom '>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img4} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col lg='3' md={{ size: 4 }} className='mt-4' >
                            <div className='border-right card m2b h-100 shadow-custom' >
                                <input type="hidden" />
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img1} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img2} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span><br />
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img3} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom '>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img4} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col lg='3' md={{ size: 4 }} className='mt-4' >
                            <div className='border-right card m2b h-100 shadow-custom' >
                                <input type="hidden" />
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img1} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img2} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span><br />
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom'>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img3} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                            <div className='border-right card m2b h-100 shadow-custom '>
                                <div className='card-body'>
                                    <div className='text-center mb-4'>
                                        <img width='160px' src={Img4} alt='Img' />
                                    </div>
                                    <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i><br />
                                    <small className='text-danger'><del>1 520 000</del></small><br />
                                    <span className='float-start'>1 241 000 UZS</span>
                                    <img className='float-end m-0' src={Cart} alt='cart' />
                                    <div className='pt-1 '>
                                        <NavLink to='/about-product'>
                                            <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                    <div className='border-right card m2b h-100 shadow-custom' >
                        <div className='card-body'>
                            <div className='text-center mb-4'>
                                <img width='160px' src={Img1} alt='Img' />
                            </div>
                            <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i><br />
                            <small className='text-danger'><del>1 520 000</del></small><br />
                            <span className='float-start'>1 241 000 UZS</span>
                            <img className='float-end m-0' src={Cart} alt='cart' />
                            <div className='pt-1 '>
                                <NavLink to='/about-product'>
                                    <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </Col>

                <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                    <div className='border-right card m2b h-100 shadow-custom'>
                        <div className='card-body'>
                            <div className='text-center mb-4'>
                                <img width='160px' src={Img2} alt='Img' />
                            </div>
                            <span className='s'>Elektorink Kitob PocketBook 624 Touch </span><br />
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i><br />
                            <small className='text-danger'><del>1 520 000</del></small><br />
                            <span className='float-start'>1 241 000 UZS</span>
                            <img className='float-end m-0' src={Cart} alt='cart' />
                            <div className='pt-1 '>
                                <NavLink to='/about-product'>
                                    <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                    <div className='border-right card m2b h-100 shadow-custom'>
                        <div className='card-body'>
                            <div className='text-center mb-4'>
                                <img width='160px' src={Img3} alt='Img' />
                            </div>
                            <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i><br />
                            <small className='text-danger'><del>1 520 000</del></small><br />
                            <span className='float-start'>1 241 000 UZS</span>
                            <img className='float-end m-0' src={Cart} alt='cart' />
                            <div className='pt-1 '>
                                <NavLink to='/about-product'>
                                    <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg='3' md={{ size: 4 }} sm='12' className='mt-4'>
                    <div className='border-right card m2b h-100 shadow-custom '>
                        <div className='card-body'>
                            <div className='text-center mb-4'>
                                <img width='160px' src={Img4} alt='Img' />
                            </div>
                            <span className='s'>Elektorink Kitob PocketBook 624 Touch </span>
                            <i className="far fa-star "></i>
                            <i className="far fa-star "></i>
                            <i className="far fa-star "></i>
                            <i className="far fa-star "></i>
                            <i className="far fa-star "></i><br />
                            <small className='text-danger'><del>1 520 000</del></small><br />
                            <span className='float-start'>1 241 000 UZS</span>
                            <img className='float-end m-0' src={Cart} alt='cart' />
                            <div className='pt-1 '>
                                <NavLink to='/about-product'>
                                    <Button className='mt-5 All-buttons float-end'>PocketBook</Button><br />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Col>
                
            </Row>

            <Row>
                <Col lg='12' className='text-center mt-5'>
                    <Button className='All-buttons px-5 py-3 text-center'>More</Button>
                </Col>
            </Row>
        </>
    )
}
