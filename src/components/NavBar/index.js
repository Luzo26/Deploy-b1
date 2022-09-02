import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (

    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={require('../../Images/logo.jpg')} alt='Logo' />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="información" smooth={true} duration={500} spy={true} exact='true' offset={-80}>+Información</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contacto" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contacto</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>            
            <NavBtnLink to="/apuntate" onClick={toggleHome}>Apúntate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar