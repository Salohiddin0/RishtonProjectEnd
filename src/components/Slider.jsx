import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import img from '../img/IMG_5540.JPG'

function ControlledCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  // return (
  //   <Carousel activeIndex={index} onSelect={handleSelect}>
  //     <Carousel.Item className='w-100 h-50'>
  //       <img className='d-block m-auto' style={{}} src={img} alt='First slide' />
  //       <Carousel.Caption></Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item className='w-100 h-50'>
  //       <img className='d-block m-auto' style={{}} src={img} alt='Second slide' />
  //       <Carousel.Caption></Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item className='w-100 h-50'>
  //       <img className='d-block m-auto' style={{}} src={img} alt='Third slide' />
  //       <Carousel.Caption></Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  // )
}

export default ControlledCarousel
