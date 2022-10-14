import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from "../../assets/slides/1.jpg"
import image2 from "../../assets/slides/2.jpg"
import image3 from "../../assets/slides/3.jpg"
import image4 from "../../assets/slides/4.jpg"
import image5 from "../../assets/slides/5.jpg"
import "./Hero.css"
import { Link as LinkRouter } from 'react-router-dom'

export default function Hero() {
  return (
    <Carousel fade className="CarouselContainer">
      <Carousel.Item>
        <div className="CarouselImageContainer">
          <img className="CarouselImage" src={image3} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className='CarouselInfo' >
            <h3 className='CarouselSubTitle' >Terra Farm</h3>
            <h2 className='CarouselTitle' >without intermediaries the best of the field in your hands</h2>
            <p className='CarouselText' >15% discount  this week</p>
            <LinkRouter to="/products">
              <button className='CarouselButton'>Go to Shop</button>
            </LinkRouter>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="CarouselImageContainer">
          <img className="CarouselImage" src={image4} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className='CarouselInfo' >
            <h3 className='CarouselSubTitle' >Terra Farm</h3>
            <h2 className='CarouselTitle' >without intermediaries the best of the field in your hands</h2>
            <p className='CarouselText' >15% discount this week</p>
            <LinkRouter to="/products">
              <button className='CarouselButton'>Go to Shop</button>
            </LinkRouter>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="CarouselImageContainer">
          <img className="CarouselImage" src={image5} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className='CarouselInfo' >
            <h3 className='CarouselSubTitle' >Terra Farm</h3>
            <h2 className='CarouselTitle' >without intermediaries the best of the field in your hands</h2>
            <p className='CarouselText' >15% discount  this week</p>
            <LinkRouter to="/products">
              <button className='CarouselButton'>Go to Shop</button>
            </LinkRouter>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
