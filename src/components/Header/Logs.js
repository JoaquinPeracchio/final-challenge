import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import "./Logs.css"

const Logs = () => {

  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  return (
    <div className='containerLogin'>

      <img onClick={handleOpenMenu} src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt='logo' className='logoLog'></img>

      {open
          ? <div onClick={handleOpenMenu} className='sig-nav-container'>
            <p>SignUp</p>
            <p>SignIn</p>
            <p>My Profile</p>
            <p>LogOut</p>
          </div>
          : null
        }
    </div>

  )
}

export default Logs