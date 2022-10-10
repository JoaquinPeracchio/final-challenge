import React from 'react'
import Hero from '../components/Hero/Hero'
import CarouselBootstrap from '../components/CarouselBootstrap/CarouselBootstrap'
import '../components/Productos/Productos.css'

export default function Welcome() {
  return (
    <div className='welcome-container'>
        <Hero></Hero>
        <CarouselBootstrap />
    </div>
  )
}
