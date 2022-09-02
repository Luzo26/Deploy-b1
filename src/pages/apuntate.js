import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';


const ApuntatePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />    
      <ContactSection />
      <br/>
      <Services id="Services" />
      <Footer />
    </>
  )
}

export default ApuntatePage