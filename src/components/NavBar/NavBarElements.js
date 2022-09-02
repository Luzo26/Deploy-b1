import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: white;
  height: 80px;  
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 2;
  margin: -0.5rem -0.5rem 0 -0.5rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 5;
  width: 100%; 
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
  width: 6%;
  height: auto;
  justify-self: felx-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursos: pointer;
    color: #002868;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-top: 4.25rem;
  font-family: Lato;
  font-size: 1.15rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;

`
export const NavLinks = styled(LinkS)`
  color: #002868;
  dipslay: flex;
  align-items: center;
  padding: 1.65rem 1.5rem;
  height: 100%;
  cursor: pointer;
  marin-right: 40px;

  &:hover {
    border-bottom: 0.25rem solid #0045b5;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;    
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ff3333;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Lato;
  margin-left: 2rem;
  margin-right: 0.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0045b4;
    color: #fff;
  }
`