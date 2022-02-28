import React from 'react'
import { Row, Container, Col, Button } from 'reactstrap'
import Big from '../../Media/big.jpg'
import Kalonka from '../../Media/kalonka.jpg'
import Kitob from '../../Media/kitob.png'
import Soat from '../../Media/soat.jpg'
import Konditsaner from '../../Media/konditsaner.jpg'


export default function Home() {
    return (
        <>
            <Container className="mt-5 pt-5 mlg-home"> 
                <Row className='mt-5 pt-3 mlg-home'>
                    <Col lg='7'>
                        <img className='img_1' src={Big} alt='Big Img' />
                    </Col>
                    <Col lg='5'>
                        <Row className='md_mt'>
                            <Col lg='8'>
                                <div className='bg-white div-1 sm_none'>
                                    <img className='float-start' width='100px' src={Kalonka} alt='maxsulot'  />
                                    <Button className='float-end All-buttons'>Batafsil </Button>
                                    <br/><br/>
                                    <span>Maxsulot Nomi</span><br />
                                    <strong>Maxsulotni Descriptioni</strong>
                                </div>
                                <div className='bg-white div-1 sm_none'>
                                    <img className='float-start' width='100px' src={Kitob} alt='maxsulot'  />
                                    <Button className='float-end All-buttons'>Batafsil </Button>
                                    <br/><br/>
                                    <span>Maxsulot Nomi</span><br />
                                    <strong>Maxsulotni Descriptioni</strong>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className='bg-white div-2 sm_none'>
                                        <img className='float-start w-50 mt-3'  src={Soat} alt='maxsulot'  />
                                        <Button className='float-end All-buttons'>Batafsil </Button>
                                        
                                        <span>Maxsulot Nomi</span><br />
                                        <strong>Maxsulot</strong>
                                    </div>
                                    <div className='bg-white div-2 sm_none'>
                                        <img className='float-start w-50 mt-3'  src={Konditsaner} alt='maxsulot'  />
                                        <Button className='float-end All-buttons '>Batafsil </Button>
                                        
                                        <span>Maxsulot Nomi</span><br />
                                        <strong>Maxsulot</strong>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
