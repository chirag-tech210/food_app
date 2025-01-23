import React from 'react'
import { Container, Row, Carousel } from "react-bootstrap"
import user1 from '../../assets/blog/review-author-1.jpg'
import user2 from '../../assets/blog/review-author-2.jpg'
import user3 from '../../assets/blog/review-author-3.jpg'
import user4 from '../../assets/blog/review-author-5.jpg'

function Section6() {
    return (
        <>
            <section className='blog_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className='user_img'>
                                        <img src={user1} className='img-fluid' alt='user-1' />
                                    </div>
                                    <p>
                                        

                                    
                                        <b>"Absolutely Delicious!"</b><br></br>
                                        I recently ordered from the Chingsy , and I was blown away by the quality of the burgers! The Classic Cheeseburger was juicy and packed with flavor, and the customization options allowed me to add all my favorite toppings. The delivery was super fast, arriving within 20 minutes. I’ll definitely be ordering again!
                                    </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5> by stacy grace</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className='user_img'>
                                        <img src={user2} className='img-fluid' alt='user-2' />
                                    </div>
                                    <p>
                                    <b>"Great Variety and Fast Service!"</b><br></br>
                                    I love the variety of burgers available on this site! From classic options to unique gourmet creations, there’s something for everyone. I tried the Spicy Jalapeño Burger, and it was fantastic! The only reason I’m giving four stars instead of five is that my fries were a bit cold upon arrival. Overall, a great experience, and I’ll be back for more!
                                    
                                    </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5> by stacy grace</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className='user_img'>
                                        <img src={user3} className='img-fluid' alt='user-3' />
                                    </div>
                                    <p>
                                    <b>"Best Burger Delivery in Town!"</b><br></br>
                                    The Food Burger Website has quickly become my go-to for burger cravings. The ordering process is straightforward, and I appreciate the real-time tracking feature. I ordered the BBQ Bacon Burger, and it was one of the best I’ve ever had! The flavors were spot on, and it arrived hot and fresh. Highly recommend!
                                    
                                    </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5> by stacy grace</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className='user_img'>
                                        <img src={user4} className='img-fluid' alt='user-4' />
                                    </div>
                                    <p>
                                    <b>"Good, but Room for Improvement"</b><br></br>
                                    I had high hopes for the Food Burger Website based on the reviews, and while the burger I ordered was tasty, I encountered a few issues. The delivery took longer than expected, and my order was missing a drink. However, the customer service team was responsive and offered a discount on my next order. I’ll give it another try, as the burger itself was really good!
                                    </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5> by stacy grace</h5>

                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Section6
