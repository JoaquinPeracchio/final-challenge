import React from 'react'
import Hero from '../components/Hero/Hero'
import CarouselBootstrap from '../components/CarouselBootstrap/CarouselBootstrap'
import { Productos } from '../components/Productos/Productos'
import '../components/Productos/Productos.css'

export default function Welcome() {
  return (
    <div className='welcome-container'>
      <div>
        <Hero />
      </div>
      <Productos />
    </div>
  )
}
