import React from 'react'
import { Row,  Col, Container } from 'reactstrap'
import Home from '../Components/Routers/Home'
import Main1 from '../Components/Routers/Main1'
import Main2 from '../Components/Routers/Mein2'


export default function BodyAll() {
    return (
        <>
            <Home />
            <Container>
                <Row className='bottom-main'>
                    <Col lg='3'>
                        <Main1 />
                    </Col>
                    <Col lg='9'>
                        <Main2 />
                    </Col>
                </Row>
            </Container> 
        </>
    )
}
