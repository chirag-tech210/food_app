import React from 'react'
import{Container , Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import Pizza from '../../assets/about/pizza.png'
import Salad from '../../assets/about/salad.png'
import Delivery from '../../assets/about/delivery-bike.png'

const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Pizza is a beloved dish that originated in Italy and has since become a global favorite. It typically consists of a round, flat base of dough topped with tomato sauce, cheese, and a variety of toppings such as vegetables, meats, and herbs`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Salad is a refreshing and versatile dish that typically consists of a mixture of raw or cooked vegetables, fruits, nuts, seeds, and sometimes proteins like chicken, fish, or beans`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `This service has gained immense popularity, especially in the food industry, where customers increasingly expect their meals to arrive promptly`,
    },
    // Add more mock data objects as needed
  ];
function Section2() {
  return (
    <>
     <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{span:8,offset:2}} className='text-center'>
                <h2>The burger tastes better when you eat it with your family</h2>
                <p>Burgers are one of the most convenient and easiest foods to eat on the fly when we’re in a hurry. We can have a burger at any time of day, whether it’s breakfast, lunch, or supper, and maybe some fries and a Coke to go with it</p>
                <Link to="/" className='btn order_now btn_red'>Explore Full Menu </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='about_wrapper'>
        <Container>
            <Row className='justify-content-md-center'>{mockData.map((cardData,index)=>(
                <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                    <div className='about_box text-center'>
                        <div className='about_icon'>
                            <img src={cardData.image} className='img-fluid' alt='icon'/>
                        </div>
                        <h4>{cardData.title}</h4>
                        <p>{cardData.paragraph}</p>
                    </div>
                </Col>
            ))}
            </Row>
        </Container>
    </section>
    </>
   
  )
}

export default Section2
