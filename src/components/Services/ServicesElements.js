import styled from 'styled-components';


export const ServicesContainer = styled.div`
  height: 1020px;
  display: flex;
  flex-direction: column;
  justify-direction: center;
  align-items: center;
  background: #ff3333;
  margin: 0 -0.5rem;
  font-family: Lato;

  @media screen and (max-width: 1000px) {
    height: 1400px;
  }

  @media screen and (max-width: 768px) {
    height: 2670px;
  }

  @media screen and (max-width: 480px) {
    height: 2670px;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @margin screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #002868;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #002868;
`
export const ServicesPrice = styled.h1`
  font-size: 2rem;
  color: #002868;
  text-align: center;
`