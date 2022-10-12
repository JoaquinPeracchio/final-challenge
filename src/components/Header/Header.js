import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import { CarritoButton } from '../CarritoButton/CarritoButton'
import WebHeaderButton from "./WebHeaderButton";
import Logo from '../../assets/provisionalLogo.png'
import Home from '../../assets/icons/house.png'
import Market from '../../assets/icons/market.png'
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
    <header className={`HeaderContainer${openMenu ? "HeaderisActive" : ""} `}>
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
      <div className="HeaderIconsContainer">
        <LinkRouter to="/" key="home">
          <img className='HeaderIcon HeaderIconButton' src={Home} />
        </LinkRouter>
        <LinkRouter to="/products" key="products">
          <img className='HeaderIcon HeaderIconButton' src={Market} />
        </LinkRouter>

        <WebHeaderButton />
        <div className="HeaderCartContainer" onClick={toggleCart}>
        <LinkRouter to="/cart" key="cart">
          <CarritoButton/>
          </LinkRouter>
        </div>
      </div>
    </header>
  );
}
