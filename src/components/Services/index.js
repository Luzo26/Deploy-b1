import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesPrice } from './ServicesElements';
import Icon1 from '../../Images/Icon1.jpg';
import Icon2 from '../../Images/Icon2.jpg';
import Icon3 from '../../Images/Icon3.jpg';
import Icon4 from '../../Images/Icon4.png';
import Icon5 from '../../Images/Icon5.jpg';
import Icon6 from '../../Images/Icon6.jpg';


const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard >
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Clases de Inglés</ServicesH2>
          <ServicesP>Clases de preparación para Exámenes Cambridge e inglés en profundidad, 3 horas a la semana.</ServicesP>
          <ServicesPrice>59€/mes</ServicesPrice>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Curso Aptis</ServicesH2>
          <ServicesP>Sácate tu B1/B2, 36 horas de clases en directo + Acceso al campus virtual + Plan de estudios personalizado.</ServicesP>
          <ServicesPrice>279€/3 meses</ServicesPrice>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Examen SLP Ejército/Guardia civil</ServicesH2>
          <ServicesP>Prepárate con nosotros tu prueba de inglés.</ServicesP>
          <ServicesPrice>69€/mes</ServicesPrice>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Clases de Pronunciación</ServicesH2>
          <ServicesP>Para que aprendas a pronunciar como un nativo, se aprende tanto americano como británico.</ServicesP>
          <ServicesPrice>7€/media hora</ServicesPrice>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon5}/>
          <ServicesH2>Clases Nocturnas</ServicesH2>
          <ServicesP>Para quienes no tienen tiempo durante el día pero lo dan todo. Horario de 21:30 a 23:00.</ServicesP>
          <ServicesPrice>69€/mes</ServicesPrice>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon6}/>
          <ServicesH2>Intensivos por la Mañana</ServicesH2>
          <ServicesP>Curso para Cambridge, 2 horas diarias, clases en directo durante un mes, plan de estudios personalizado y acceso al campus virtual.</ServicesP>
          <ServicesPrice>299€/1 mes</ServicesPrice>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services