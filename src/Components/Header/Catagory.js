import React, {useState} from 'react'
import { Row, Container, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Book from '../../Media/Catagorys-book.png'
import Phone from '../../Media/Catagorys-phone.png'
import Kompyuter from '../../Media/Catagorys-computer.png'
import Game from '../../Media/Cata.png'
import Konditsaner from '../../Media/air-conditioner.png'
import Texnika from '../../Media/Catagorys-Texnika.png'
import 'aos/dist/aos.css'
import AOS from 'aos';


export default function Catagory() {

    const [Catagorys, setCatagorys] = useState(false)

    const AllCatagory = () => {
        setCatagorys(!Catagorys)
    }


    React.useEffect(() => {
        AOS.init()
    }, [])

    if(Catagorys ) {
        return(
            <>
                <div className='katagory py-3'>
                    <Container>
                        <Row>
                            <Col lg='12' className='d-flex justify-content-between sp'>
                                <span onClick={AllCatagory}  className='all_c'><i className='fas fa-times'></i> All Catagory</span>
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/badiiy_adabyot'><span  className='sm_none'>Badiiy Adabyot</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/diniy_adabyot'><span  className='sm_none'>Diniy Adabyot</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/chegirmalar'><span className='sm_none'>Chegirmalar</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/lug`at'> <span className='sm_none'>Lug'at</span> </NavLink>
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}}  style={{textDecoration: 'none', color: 'black'}} to='/biznes'><span className='sm_none'>Biznesga oid</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/rivojlanish'><span className='sm_none'>Rivojlanish</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/ilm_fan'><span className='sm_none md_none'>Ilm-fan va Darsliklar</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/o`quv_qurollari'><span className='sm_none md_none'>O'quv Qurollari</span> </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div  className='All-Catagorys'  data-aos="zoom-in" data-aos-duration='400'>
                    <Container fluid>
                        <Row className='Catagory-1'>
                            <Col lg='12' className=' ms-5'>
                                <Row>
                                    <Col lg='2  '>
                                         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/badiiy_adabyot' onClick={() => setCatagorys(false)}> <p> <img src={Book} alt='Book Catagory' className='me-2'/> Badiiy Adabyot </p></NavLink>
                                    </Col>
                                    <Col lg='2'>
                                        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/diniy_adabyot' onClick={() => setCatagorys(false)}><p> <img src={Phone} alt='Book Catagory' className='me-2'/> Diniy Adabyot </p></NavLink> 
                                    </Col>
                                    <Col lg='2'>
                                        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/lug`at' onClick={() => setCatagorys(false)}><p> <img src={Kompyuter} alt='Book Catagory' className='me-2'/> Lug'at </p></NavLink> 
                                    </Col>
                                    <Col lg='2'>
                                        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/biznes' onClick={() => setCatagorys(false)}><p> <img src={Game} alt='Book Catagory' className='me-2'/> Biznesga Oid </p></NavLink> 
                                    </Col>
                                    <Col lg='2'>
                                         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/rivojlanish' onClick={() => setCatagorys(false)}><p> <img src={Konditsaner} alt='Book Catagory' className='me-2'/> Rivojlanish </p></NavLink> 
                                    </Col>
                                    <Col lg='2'>
                                        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/ilm_fan' onClick={() => setCatagorys(false)}><p> <img src={Texnika} alt='Book Catagory' className='me-2'/> Ilm-fan va Darsliklar </p></NavLink> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }else {
        return (
            <div className='katagory py-3'>
                    <Container>
                        <Row>
                            <Col lg='12' className='d-flex justify-content-between sp'>
                                <span onClick={AllCatagory}  className='all_c'><i className='fas fa-bars'></i> All Catagory</span>
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/badiiy_adabyot'><span  className='sm_none'>Badiiy Adabyot</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/diniy_adabyot'><span  className='sm_none'>Diniy Adabyot</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/chegirmalar'><span className='sm_none'>Chegirmalar</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/lug`at'> <span className='sm_none'>Lug'at</span> </NavLink>
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}}  style={{textDecoration: 'none', color: 'black'}} to='/biznes'><span className='sm_none'>Biznesga oid</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/rivojlanish'><span className='sm_none'>Rivojlanish</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/ilm_fan'><span className='sm_none md_none'>Ilm-fan va Darsliklar</span></NavLink> 
                                <NavLink onClick={() => setCatagorys(false)} activeStyle={{color: '#008'}} style={{textDecoration: 'none', color: 'black'}} to='/o`quv_qurollari'><span className='sm_none md_none'>O'quv Qurollari</span> </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </div>
        )
    }

}
