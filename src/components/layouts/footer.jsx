import React from 'react'
import { useState ,useEffect } from 'react'
import{Container , Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'

function Footer() {

  const [isVisible , setisVisible]=useState(false)

  const scrollTop = () =>{
    window.scrollTo({
      top:0 ,
      behavior:'smooth'
    })
  }

  const listenToScroll=()=>{
    let heightToHidden=250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setisVisible(true) : setisVisible(false);


  }
  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll)
  })


  return (
    <>
    <footer className='footer'>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-cente'>
              <h5>location</h5>
              <p>5505 model town , rohtak </p>
              <p>haryana</p>
              <p>india</p>

            </div>

          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-cente'>
              <h5>working hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM </p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>

            </div>

          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-cente'>
              <h5>Order Now</h5>
              <p>Don’t wait any longer to enjoy the mouthwatering burgers you’ve been dreaming about!</p>
              <p><Link to='tel:9999888800' className='calling'>9999-8888-00</Link></p>

            </div>

          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-cente'>
              <h5>follow us</h5>
              <p>Don’t wait any longer to enjoy the mouthwatering burgers you’ve been dreaming about!</p>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to='/'>
                  <i class='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                  <i class='bi bi-linkedin'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                  <i class='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                  <i class='bi bi-twitter'></i>
                  </Link>
                </li>
                
              </ul>

            </div>

          </Col>
        </Row>
        <Row className='copyright'>
          <Col>
          <div>
            <ul className='list-unstyled text-center mb-0'>
              <li>
                <Link to='/'>
                © 2025 <span>CHIRAG YADAV</span>. All Rights Reserved
                </Link>
              </li>
              <li>
                <Link to='/'>
                About Us
                </Link>
              </li>
              <li>
                <Link to='/'>
                Terms Of Use
                </Link>
              </li>
              <li>
                <Link to='/'>
                Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
    {isVisible && (
      <div className='scroll_top' onClick={scrollTop}>
      <i class="bi bi-arrow-up"></i>

    </div>
    )}
    </>
    
  )
}

export default Footer
