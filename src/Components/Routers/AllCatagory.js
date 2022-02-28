import React from 'react'
import Book from '../../Media/Catagorys-book.png'
import Phone from '../../Media/Catagorys-phone.png'
import Kompyuter from '../../Media/Catagorys-computer.png'
import Game from '../../Media/Cata.png'
import Konditsaner from '../../Media/air-conditioner.png'
import Texnika from '../../Media/Catagorys-Texnika.png'
import Tv from '../../Media/Catagorys-Tv.png'
import { NavLink } from 'react-router-dom'
import { Row, Container, Col } from 'reactstrap'


export default function AllCatagor({ All, Setnav }) {


    const CloseNav = () => {
        All(false)
    }

    const Close = () => {
        All(false)
        Setnav(false)
    }

    return (
        <div className='AllCatagory-style' data-aos="zoom-in" data-aos-duration='800'>
            <Container fluid>
                <Row>
                    <Col lg='12' className='Catagory-1'>
                        <h2 className='float-start'>Barcha Bo'limlar</h2>
                        <i onClick={() => CloseNav()} className='fas fa-times float-end text-primary fs-3 me-4'></i>
                    </Col>
                    <Col lg='12' className='Catagory-1'>
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/badiiy_adabyot'> <p> <img src={Book} alt='Book Catagory' className='me-2' /> Badiiy Adabyot </p></NavLink>
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/diniy_adabyot'><p> <img src={Phone} alt='Book Catagory' className='me-2' /> Diniy Adabyoot </p></NavLink> 
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/chegirmalar'><p> <img src={Kompyuter} alt='Book Catagory' className='me-2' /> Chegirmalar </p></NavLink> 
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/lug`at'><p> <img src={Game} alt='Book Catagory' className='me-2' /> Lug'at </p></NavLink> 
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/biznes'><p> <img src={Konditsaner} alt='Book Catagory' className='me-2' /> Biznesga oid </p></NavLink> 
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/rivojlanish'><p> <img src={Texnika} alt='Book Catagory' className='me-2' /> Rivojlanish </p></NavLink> 
                        <NavLink onClick={Close} style={{textDecoration: 'none', color: 'black'}} to='/ilm_fan'><p> <img src={Tv} alt='Book Catagory' className='me-2' /> Ilm Fan </p></NavLink> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
