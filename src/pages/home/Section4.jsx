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
                 🍔 Savor the Flavor: Burger Bonanza! 🍔
                </h2>
                <p>
                Join us for a mouthwatering celebration of our signature burgers! For a limited time, enjoy 20% off your favorite burger when you order online or dine in.
                </p>
                <ul>
                    <h2>🌟 Why Our Burgers?</h2>
                    <li><p><b>Fresh Ingredients:</b> Made with locally sourced, high-quality meats and fresh toppings.</p></li>
                    <li><p><b>Customizable:</b> Build your perfect burger with a variety of gourmet toppings and sauces.</p></li>
                    <li><p><b>Plant-Based Options:</b> Delicious choices for everyone, including our tasty plant-based patties!</p></li>
                    <li><p><b>🎉 Special Offer:</b> Buy any burger and get a side of our crispy fries for just <b>₹1!</b></p></li>
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
