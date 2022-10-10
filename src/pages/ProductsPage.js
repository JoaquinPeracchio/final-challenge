import React from 'react'
import { Productos } from '../components/Productos/Productos'
import '../components/Productos/Productos.css'

export default function Welcome() {
  return (
    <div className='welcome-container'>
      <Productos />
    </div>
  )
}
