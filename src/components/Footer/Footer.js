import React from 'react'
import FooterSocial from './FooterSocial'
import FooterNav from "./FooterNav"
import "./Footer.css"
import "../ScrollToTop/ScrollToTopPage"
import ScrollToTopPage from '../ScrollToTop/ScrollToTopPage'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-hero'>

        <div>
          <img className='marca' src="https://i.imgur.com/IBWun1O.png" alt="logo" />
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
        <h4>© 2022 Copyright - All rights reserved | Designed by Integrantes</h4>
      </div>
    </footer>



  )
}

export default Footer