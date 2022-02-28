import React, { useState } from 'react'
import { Row, Container, Col } from 'reactstrap'
import Asaxiy from '../../Media/asaxiy-logo.svg'
import Truck from '../../Media/tracker.svg'
import Language from '../../Media/language.svg'
import Money from '../../Media/money-currency.svg'
import Cart from '../../Media/cart.svg'
import Avatar from '../../Media/avatar.svg'
import { NavLink } from 'react-router-dom'
import AllCatagor from '../Routers/AllCatagory'

export default function Navbar() {
    const [nav, setnav] = useState(false)
    const [All, setAll] = useState(false)
    

    const SmNav = () => {
        setAll(false)
        setnav(true)
    }

    const CloseSmNav = () => {
        setnav(false)
    }

    const AllC = () => {
        setAll(true)
    }

    if(nav) {
        return(
            <>
            <div className='po w-100 border-bottom' >
                <Container fluid='sm'  >
                    <Row className='align-items-center d-flex justify-content-between py-3' >
                        <Col>
                            <i onClick={SmNav} className="fas fa-bars icon_bars"></i> 
                        </Col>
                        <Col lg='1' md='5' sm='5' xs='5'>
                            <div>
                                <NavLink to='/'><img className='mg booki-style sm-booki-style' src={Asaxiy} alt='Booki  Logo' /></NavLink> 
                            </div>
                        </Col>
                        <Col lg='7' md='12' sm='12' xs='12'>
                            <div  className='d-flex'> 
                                <input className='inp'  type='search' placeholder='Search' />
                                <button className='bt ps-3'> <i className='fas fa-search'></i> <span className='xs_none'>Search</span> </button>
                            </div>
                        </Col>
                        <Col lg='3' md='4'>                    
                            <div className='imgs-style'>
                                <NavLink activeStyle={{color: 'black'}} to='/dastavka'><img className='w' src={Truck} alt='Truck' /></NavLink>   
                                <img className='w'  src={Language} alt='Language' />
                                <img className='w' src={Money}  alt='Money' />
                                <img className='w' src={Cart} alt='Cart' />
                                <img className='w' src={Avatar} alt='avatar' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {
                All ? <AllCatagor  Setnav={setnav} All={setAll} /> :
                ''
            }
            <div className='bg-light smnav' data-aos="fade-right">
                <div className='mb-3 d-flex align-items-center justify-content-between'>
                    <i onClick={CloseSmNav} className='fas fa-times times float-start '></i>
                   <NavLink onClick={() => setnav(false)} to='/'><img className='img w-50 float-end ' src={Asaxiy} alt='booki  Logo' /></NavLink> 
                </div><br />
                <div className='mb-3'> 
                    <img className=' sm-img-nav me-2' src={Avatar} alt='avatar' /> 
                    <span className='h6'>Kabinet</span>
                </div>
                <div className='mb-3' onClick={AllC}>
                    <i class="fas fa-th me-3 fs-5 text-secondary"></i>
                    <span className='h6'>Barcha Bo'limlar</span>
                </div>
                <div className='mb-3'>
                    <NavLink to='/dastavka' style={{textDecoration: 'none', color: 'black'}} onClick={() => setnav(false)}>
                        <img className=' sm-img-nav me-2' src={Truck} alt='Truck' />
                        <span className='h6'>Dastavka</span><br />
                    </NavLink>
                </div>
                <div className='mb-3'>
                    <img className=' sm-img-nav me-2' src={Cart} alt='Cart' />
                    <span className='h6'>Savatcha</span><br/>
                </div>
            </div>
            </>
        )
    }else {

        return (
            <div className='po w-100 border-bottom' >
                <Container fluid='md'  >
                    <Row className='align-items-center d-flex justify-content-between py-3' >
                        <Col>
                            <i onClick={SmNav} className="fas fa-bars icon_bars"></i> 
                        </Col>
                        <Col lg='1' md='5' sm='5' xs='5'>
                            <div className=''>
                                <NavLink to='/'><img className='img booki-style sm-booki-style' src={Asaxiy} alt='Booki  Logo' /></NavLink> 
                            </div>
                        </Col>
                        <Col lg='7' md='12' sm='12' xs='12'>
                            <div  className='d-flex'> 
                                <input className='inp'  type='search' placeholder='Search' />
                                <button className='bt ps-3'> <i className='fas fa-search  '></i> Search</button>
                            </div>
                        </Col>
                        <Col lg='3' md='4'>                    
                            <div className='imgs-style'>
                                <NavLink activeStyle={{color: 'black'}} to='/dastavka'><img className='w' src={Truck} alt='Truck' /></NavLink>   
                                <img className='w'  src={Language} alt='Language' />
                                <img className='w' src={Money}  alt='Money' />
                                <img className='w' src={Cart} alt='Cart' />
                                <img className='w' src={Avatar} alt='avatar' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}
