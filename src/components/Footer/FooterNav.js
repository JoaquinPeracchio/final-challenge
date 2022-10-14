import { Link as LinkRouter } from "react-router-dom"
import "./FooterNav.css"
import React from 'react'
import Button from "react-bootstrap/esm/Button"
import './FooterNav.css'



const FooterNav = () => {

  const navegacion = [
    { name: "Home", to: "/", alt: "homeFooter" },
    { name: "Products", to: "/products" }
  ]

  function  linkNav(item){
    return(
    <LinkRouter className="links" to={item.to} key={item.alt}>
      {<p className="footer-link"> {item.name}</p>}
    </LinkRouter>
    )
  }

  return (
    <>
    <div>
      {navegacion.map((obj) => 
      <LinkRouter className="links" to={obj.to} key={obj.to}>
        <button type="" className="button-navfooter">{obj.name}</button>
        </LinkRouter>
      )}
    </div>
    </>

  )
}

export default FooterNav