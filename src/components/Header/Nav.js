import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./Nav.css"
import Logs from './Logs'

const Nav = () => {

  let pages = [
    {
      name: "Home",
      to: "/",
       imagen: "https://cdn-icons-png.flaticon.com/512/2413/2413074.png", 
       alt: "casa"
    }
  ]
  

  const link = (page) =>
    <LinkRouter className="containerLinks" to={page.to} key={page.alt}>
      {<img alt={page.alt} className={"logos " + page.alt} src={page.imagen} />}
      <p className='parrafos'>{page.name}</p>
    </LinkRouter>

  // BURGER BUTTON 
  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  return (
    <div className='nav'>
      <button className="btn" onClick={handleOpenMenu}>
        <span className="btn__visible">☰</span>
        <span className="btn__invisible">Menu</span>
      </button>
      <div className='burgerOn'>
        {open
          ? pages.map(link)
          : null
        }
      </div>

      <div className='burgerOff'>
        {pages.map(link)}
      </div>
      <Logs/>
    </div>
  )
}

export default Nav