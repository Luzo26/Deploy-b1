import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: #002868;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  font-family: Lato, "sans-serif";
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 50px auto 0px auto;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: Lato, "sans-serif";
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconsLink = styled.a`
  color: #fff;
  font-size: 24px;
`