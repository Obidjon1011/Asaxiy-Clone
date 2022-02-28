import React, { useState } from 'react'
import Img1 from '../../Media/m2img.jpg'
import { Container, Col, Row, Button, Card } from 'reactstrap'


export default function Book() {

    const [Count, setCount] = useState(1)

    const Decrement = () => {
        setCount(Count - 1)
    }

    const Increment = () => {
        setCount(Count + 1)

    }

    return (
        <div style={{marginTop: '10rem'}}>
            <Container>
                <Row>
                    <Col className="p-1">
                        <Card className="p-md-5 radius">
                            <Row>
                                <Col lg='6'>
                                    <div className='bg-white text-center rounded'>
                                        <img className='w-75' src={Img1} alt='Product' />
                                    </div>
                                </Col>
                                <Col lg='6'>
                                    <div className='mt-md-5 ms-md-5'>
                                        <h1 className='my-4'>Tavar Nomi</h1>
                                        <p className='text-danger fs-3'>110.000 UZS</p>
                                        <div className='fs-5 fw-bolder'>
                                            <p>Muallif: <span className='fw-light mx-2'>Hudoyberdi To'xtaboyev</span > </p>
                                            <p className='d-flex'>
                                                <span>Miqdori:</span>
                                                {
                                                    Count > 1 ? 
                                                    <button className='btn-count brr_btn_1 ms-2' id='btn-dec' onClick={() => Decrement()}>-</button>:
                                                    <button className='btn-count brr_btn_1 ms-2' id='btn-dec' style={{cursor:'not-allowed'}}>-</button>
                                                }
                                                <span className='bg-white count_of_book px-4'>{Count}</span>
                                                <button className='btn-count brr_btn_2 me-2' onClick={() => Increment()}>+</button>
                                            </p>
                                            <p >Jami: <span className='mx-2'>{ Count * 110000 } UZS</span> </p>
                                        </div>
                                        <div className='mt-5 d-flex'>
                                            <Button color='danger' className='me-4'><i className="fas fa-shopping-basket"></i> Savatga qo'shish</Button>
                                            <Button color='danger'><i className="fas fa-truck"></i> Tezkor buyurtma</Button>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Card> 
                    </Col>
                    <Col lg='12' className='mt-5 card radius'>
                        <h1>Maxsulot Xaqida</h1>
                        <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br  /><br  />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br  /><br  />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
