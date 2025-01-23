import React from 'react'
import{Container , Row,Col,Carousel} from "react-bootstrap"
import { Link } from 'react-router-dom'
import storeios from "../../assets/shop/appstore.png"
import storegoogle from"../../assets/shop/googleplay.png"
import download from "../../assets/shop/e-shop.png"
import brand1 from '../../assets/brands/brand-11.png'
import brand2 from '../../assets/brands/brand-12.png'
import brand3 from '../../assets/brands/brand-13.png'
import brand4 from '../../assets/brands/brand-14.png'
import brand5 from '../../assets/brands/brand-15.png'
import brand6 from '../../assets/brands/brand-16.png'
import brand7 from '../../assets/brands/brand-17.png'
import brand8 from '../../assets/brands/brand-18.png'


function Section5() {
  return (
    <>
    <section className='shop_section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
          <h4>download mobile app and</h4>
          <h2>save upto 20%</h2>
          <p>dhvusfeysfuweyf euyfeyutfvetuvfe aduyfvwefvewytff hfveqyf</p>
          <Link to="/" >
          <img src={storeios} alt="ios" className='img-fluid me-3 store'/></Link>
          <Link to="/" >
          <img src={storegoogle} alt="ios" className='img-fluid me-3 store'/></Link>
          </Col>
          <Col lg={6}>
                <img src={download} alt='e-shop' className='img-fluid'/>
          </Col>
        </Row>
      </Container>

    </section>
    <section className='brand_section'>
      <Container>
      <Row>
      <marquee direction="up" >
      <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          
          <div className='d-flex align-items-center justify-content-between'>
            <div className='brand_img'>
              <img src={brand1} className='img-fluid' alt='image-1'/>
            </div>
            <div className='brand_img'>
              <img src={brand2} className='img-fluid' alt='image-2'/>
            </div>
            <div className='brand_img'>
              <img src={brand3} className='img-fluid' alt='image-3'/>
            </div>
            <div className='brand_img'>
              <img src={brand4} className='img-fluid' alt='image-4'/>
            </div>
            <div className='brand_img'>
              <img src={brand5} className='img-fluid' alt='image-5'/>
            </div>
            <div className='brand_img'>
              <img src={brand6} className='img-fluid' alt='image-6'/>
            </div>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='brand_img'>
              <img src={brand3} className='img-fluid' alt='image-3'/>
            </div>
            <div className='brand_img'>
              <img src={brand4} className='img-fluid' alt='image-4'/>
            </div>
            <div className='brand_img'>
              <img src={brand5} className='img-fluid' alt='image-5'/>
            </div>
            <div className='brand_img'>
              <img src={brand6} className='img-fluid' alt='image-6'/>
            </div>
            <div className='brand_img'>
              <img src={brand7} className='img-fluid' alt='image-7'/>
            </div>
            <div className='brand_img'>
              <img src={brand8} className='img-fluid' alt='image-8'/>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </marquee>
    </Row>
    </Container>
    </section>
    </>
  )
}

export default Section5