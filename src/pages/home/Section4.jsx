import React from 'react'
import{Container , Row,Col} from "react-bootstrap"
import Promotion from "../../assets/promotion/pro.png"
function Section4() {
  return (
    <>
    <section className='promotion'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                <img src={Promotion} className='img-fluid' alt='promotion'/>
                </Col>
                <Col lg={6} className='px-5'>
                <h2>
                    Nothing brings people together like a good burger
                </h2>
                <p>
                    hdfgweyfgseygfuweyfgeufygweufytefgdegfveufvjevftuwefvefe feuydfg eufgseygfewtyufwe  dhevftyeuyvfe fejvfeufevfevdfgefe fe hfvefveutfe fehf eutfvwf .
                </p>
                <ul>
                    <li><p>dgefveywtfejfvejffejfvgsdfjsegfvs</p></li>
                    <li><p>dgefveywtfejfvejffejfvgsdfjsegfvs</p></li>
                    <li><p>dgefveywtfejfvejffejfvgsdfjsegfvs</p></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='bg_parallax_scroll'>
    </section>
    </>
  )
}

export default Section4