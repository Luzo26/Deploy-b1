import React, {useState} from 'react'
import Video from '../../Videos/Vedeo.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>B1 with English</HeroH1>
        <HeroP>
          La Academia que se adapta a ti.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="información" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="false" smooth={true} duration={500} exact="true" offset={-80}>
            Descubrir mas {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
