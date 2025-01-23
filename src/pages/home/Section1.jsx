import React from 'react'
import Burger from '../../assets/hero/hero-01.png'
import { Link } from 'react-router-dom'
import{Container , Row,Col} from "react-bootstrap"
import '../../styles/Homestyle.css'
function Section1() {
  return (
    <section className='hero_section'>
      <Container>
          <Row >
          <Col lg={7} className='mb-5 mb-lg-0'>
          <div className='position-relative'>
            <img src={Burger} className="img-fluid" alt='hero'/>
            <div className='price-badge'>
              <div className='badge_text'>
                <h4 className='h4-xs'>only</h4>
                <h3 className='h3-lg'>₹69</h3>
              </div>
            </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='hero_text text-center'>
              <h1 className='text-white'> New Chingsy</h1>
              <h2 className='text-white'>Burger</h2>
              <p className='text-white pt-2 pb-4'>Juicy, big, loaded with toppings of your choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"
              </p>
              <Link to="/" className='btn order_now'>
              Order Now
              </Link>
            </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}
export default Section1
