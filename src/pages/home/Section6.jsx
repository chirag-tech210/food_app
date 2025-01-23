import React from 'react'
import{Container , Row,Carousel} from "react-bootstrap"
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
              <img src={user1} className='img-fluid' alt='user-1'/>
            </div>
            <p>
                fvff bbtbt bberthtebetvfbgbrsb  dgb rthbwrtnw b  beththtr b gbgfnhyn t  vbgfnr
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
              <img src={user2} className='img-fluid' alt='user-2'/>
            </div>
            <p>
                fvff bbtbt bberthtebetvfbgbrsb  dgb rthbwrtnw b  beththtr b gbgfnhyn t  vbgfnr
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
              <img src={user3} className='img-fluid' alt='user-3'/>
            </div>
            <p>
                fvff bbtbt bberthtebetvfbgbrsb  dgb rthbwrtnw b  beththtr b gbgfnhyn t  vbgfnr
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
              <img src={user4} className='img-fluid' alt='user-4'/>
            </div>
            <p>
                fvff bbtbt bberthtebetvfbgbrsb  dgb rthbwrtnw b  beththtr b gbgfnhyn t  vbgfnr
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