import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Container, Col } from 'reactstrap'
// import Phone from '../../Media/asaxiy-app.png'
import Asaxiy from '../../Media/asaxiy-logo.svg'


export default function TopFooter() {
    return (
        <>
            <Container>
                <Row className=''>
                    {/* <Col lg='6'>
                        <img src={Phone} alt='Asaxiy App' className='sm_none' />
                    </Col> */}
                    <Col lg='12' className='text-center mt-0' >
                        <NavLink to='/'>
                            <img width='600px' className='booki-logo' src={Asaxiy}  alt='Icode Logo' />
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
