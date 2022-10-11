import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from "../../assets/slides/1.jpg"
import image2 from "../../assets/slides/2.jpg"
import "./Hero.css"
import { Link as LinkRouter } from 'react-router-dom'

export default function Hero() {
  return (
    <Carousel fade className="CarouselContainer">
      <Carousel.Item>
        <div className="CarouselImageContainer">
          <img className="CarouselImage" src={image1} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className='CarouselInfo' >
            <h3 className='CarouselSubTitle' >Subtitle product</h3>
            <h2 className='CarouselTitle' >Product title or advertisement</h2>
            <p className='CarouselText' >15% discount on shipping this week</p>
            <LinkRouter to="/products">
              <button className='CarouselButton'>Go to Shop</button>
            </LinkRouter>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="CarouselImageContainer">
          <img className="CarouselImage" src={image2} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className='CarouselInfo' >
            <h3 className='CarouselSubTitle' >Subtitle product</h3>
            <h2 className='CarouselTitle' >Product title or advertisement</h2>
            <p className='CarouselText' >15% discount on shipping this week</p>
            <LinkRouter to="/products">
              <button className='CarouselButton'>Go to Shop</button>
            </LinkRouter>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
