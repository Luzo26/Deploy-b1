import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import CookieConsent from 'react-cookie-consent';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <CookieConsent style={{ background: '#002868', fontFamily: "Lato" }} buttonStyle={{ color: '#fff', background: '#ff3333', fontSize: '16px', borderRadius: "50px", padding: "14px 16px 14px 16px" }} buttonText="Entendido!!" >Este sitio hace uso de cookies para mejorar tu experiencia.</CookieConsent>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services id='services' />
      <InfoSection {...homeObjFour} />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home;