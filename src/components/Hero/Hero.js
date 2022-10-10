import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../Productos/Productos.css'

export default function Hero() {
  return (
    <header className="header">
      <img className='logo' src="" alt="MyTinerary logo" />
      <h1 className='hero-title'>MyTinerary</h1>
      <LinkRouter to="/products" className="header-btn">ENTER</LinkRouter>
    </header>
  );
}
