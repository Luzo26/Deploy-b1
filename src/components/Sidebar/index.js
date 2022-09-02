import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="información" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            +Información
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Servicios
          </SidebarLink>
          <SidebarLink to="contacto" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/apuntate">Apúntate</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
    
  )
}

export default Sidebar