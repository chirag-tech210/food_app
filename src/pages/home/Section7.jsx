import React from 'react'
import{Container , Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'

function Section7() {
  return (
    <>
    <section className='contact'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>we guarantee</h4>
                    <h2>30 minutes delivery!</h2>
                    <p>
                    Order now and experience our <b>Fastest Delivery Ever!</b> Get your favorite burger delivered to your door in <b>30 minutes or less,</b> or your next meal is <b>on us!</b>
                    </p>
                    <Link to='/' className='btn btn_red px-4 py-2 rounded-0'>
                    CALL: 9999888800
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section7
