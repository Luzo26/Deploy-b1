import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconsLink, SocialMedia, SocialMediaWrap, SocialIcons, WebsiteRights  } from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <WebsiteRights>B1 with English © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconsLink href="https://www.facebook.com/B1withEnglish" target="_blank" aria-label="Facebook">
                  <FaFacebook />                
                </SocialIconsLink>
                <SocialIconsLink href="https://api.whatsapp.com/message/4GWAONGZ3EYLP1?autoload=1&app_absent=0" target="_blank" aria-label="Whatsapp">
                  <FaWhatsapp />                
                </SocialIconsLink>
                <SocialIconsLink href="https://www.instagram.com/b1.with.english/" target="_blank" aria-label="Instagram">
                  <FaInstagram />                
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer