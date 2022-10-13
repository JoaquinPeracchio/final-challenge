import React from 'react'
import FooterSocial from './FooterSocial'
import FooterNav from "./FooterNav"
import "./Footer.css"
import "../ScrollToTop/ScrollToTopPage"
import ScrollToTopPage from '../ScrollToTop/ScrollToTopPage'
import Logo from "../../assets/provisionalLogo.png"

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='footer-hero'>

        <div>
          <img className='marca' src={Logo} alt="logo" />
        </div>
        <ScrollToTopPage />
        <div className='container-footerNav'>
          <FooterNav />
        </div>
        <div className='container-sociales'>
          <FooterSocial />
        </div>
      </div>
      <div className='footer-down'>
        <p className="footer-names">© 2022 Copyright - All rights reserved | Designed by Joaquin Peracchio, Joaquin Alvarez, Alessandro Lautaro, Agustin Ochoa, Leonardo Medici, Lucas Cortes</p>
      </div>
    </footer>



  )
}

export default Footer