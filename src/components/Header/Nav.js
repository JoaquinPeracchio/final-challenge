import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./Nav.css"

const Nav = () => {
  

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
          ? <p>Paginas</p> //pages.map(link)
          : null
        }
      </div>

      <div className='burgerOff'>
        <p>paginas</p> {/*pages.map(link)*/}
      </div>
    </div>
  )
}

export default Nav