import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image from '../images/jobmalayalam.com.png'
import './main.css'

export default function Homepage() {

  const quotesToRead=()=>{

  }
  return (
    <div className='container-home'><div>

    <Carousel>
      <Carousel.Item interval={2500}>
       <img className="carousel-image" src={image} alt="" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <img className="carousel-image" src={image} alt="" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <img className="carousel-image" src={image} alt="" />
       
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
      <div>
        <h3 className='main-quote' onMouseEnter={quotesToRead}>Read, Dream, Repeat...</h3></div></div></div>
  );
}

      

