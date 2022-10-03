import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

export default function Hero() {
  return (
    <header className="header" Style="">
      <img className='logo' src="" alt="MyTinerary logo" />
      <h1 className='hero-title'>MyTinerary</h1>
      <LinkRouter to="/home" className="header-btn">ENTER</LinkRouter>
    </header>
  );
}
