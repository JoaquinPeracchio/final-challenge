import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import { CarritoButton } from '../CarritoButton/CarritoButton'
import WebHeaderButton from "./WebHeaderButton";
import ResponsiveHeaderNav from "./ResponsiveHeaderNav";
import Logo from '../../assets/provisionalLogo.png'
import Home from '../../assets/icons/house.png'
import Market from '../../assets/icons/market.png'
import Cart from '../../assets/icons/cart.png'
import HomeDark from '../../assets/icons/houseDark.png'
import MarketDark from '../../assets/icons/marketDark.png'
import CartDark from '../../assets/icons/cartDark.png'
import "./Header.css";
import "./ResponsiveHeaderNav.css"


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
          <ResponsiveHeaderNav />
          <ul className='HeaderNavSecondContainer'>
            <li className="HeaderNavSecondLink">
              <LinkRouter to="/" key="home" onClick={toggleMenu} className='HeaderNavSecondLinkContainer'>
                <img className='HeaderIcon' src={HomeDark} />
                Home
              </LinkRouter>
            </li>
            <li className="HeaderNavSecondLink">
              <LinkRouter to="/products" key="products" onClick={toggleMenu} className='HeaderNavSecondLinkContainer'>
                <img className='HeaderIcon' src={MarketDark} />
                Market
              </LinkRouter>
            </li>
            <li className="HeaderNavSecondLink">
              <LinkRouter to="/cart" key="cart" onClick={toggleMenu} className='HeaderNavSecondLinkContainer'>
                <img className='HeaderIcon' src={CartDark} />
                Cart
              </LinkRouter>
            </li>
          </ul>
        </nav>
        <div className='HeaderNavBackgound' onClick={toggleMenu}>&nbsp;</div>
      </div>
      <LinkRouter to="/" key="home">
        <img src={Logo} className='HeaderLogo' />
      </LinkRouter>
      <div className="HeaderIconsContainer">
        <LinkRouter to="/" key="home">
          <img className='HeaderIcon HeaderIconButton' src={Home} />
        </LinkRouter>
        <LinkRouter to="/products" key="products">
          <img className='HeaderIcon HeaderIconButton' src={Market} />
        </LinkRouter>
        <div className='HeaderIconButton' >
          <WebHeaderButton />
        </div>
        <div className="HeaderCartContainer" onClick={toggleCart}>
          <LinkRouter to="/cart" key="cart">
            <CarritoButton />
          </LinkRouter>
        </div>
      </div>
    </header>
  );
}
