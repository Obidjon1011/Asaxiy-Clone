import React from 'react'
import { Row, Container, Col, Button } from 'reactstrap'
import Img from '../../Media/tracking.svg'


export default function Dastavka() {
    return (
        <>
            <Container className='bg-white das-style shadow '>
                <Row> 
                    <Col lg='6'>
                        <h1>Lorem Ipsum</h1>
                        <p className='text-secondary'>Чтобы увидеть ваш заказ, пожалуйста, заполните необходимые поля. Номер заказа был отправлен на ваш номер в виде смс-сообщения</p>
                            <label className='control-label text-secondary mt-4 '>Buyurtma Raqami<span className='text-danger'>*</span></label>
                            <input className='w-75 form-control d_input text-primary' type='number' />
                            <label className='control-label text-secondary mt-4'>Nomer Telefon<span className='text-danger'>*</span></label>
                            <input className='w-75 form-control d_input mb-4 text-primary' type="tel" />
                            <Button className='py-2 px-5' color='primary'>Ko'rish</Button>
                    </Col>
                    <Col lg='6'>
                        <img className='mt-5 sm_none' src={Img} alt='Img' /> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
