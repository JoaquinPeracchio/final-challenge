import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/provisionalLogo.png'
import Menu from '../../assets/icons/menu.png'
import Cart from '../../assets/icons/cart.png'
import User from '../../assets/icons/user.png'
import "./Header.css";


export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);


  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu)
  }
  const toggleCart = () => {
    openCart ? setOpenCart(false) : setOpenCart(true)
    console.log(openCart)
  }


  return (
    <header className={`${openMenu ? "HeaderisActive" : ""} `}>
      <div onClick={toggleMenu} className={`HeaderNavIcon ${openMenu ? "open" : ""} `}>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className={`HeaderNavContainer ${openMenu ? "HeaderNavActive" : ""} `}>
        <nav className="HeaderNav">
          <ul className='HeaderNavLinksContainer'>
            <li className="HeaderNavLinkUser">
              <img className='HeaderNavIconUser' src={User} />
            </li>
          </ul>
        </nav>
        <div className='HeaderNavBackgound' onClick={toggleMenu}>&nbsp;</div>
      </div>
      <img src={Logo} className='HeaderLogo' />
      <div className="HeaderCartContainer" onClick={toggleCart}>
        <img src={Cart} className='HeaderIcon' />
        <p className="HeaderCartShop">3</p>
      </div>
    </header>
  );
}
