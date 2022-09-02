import React, {useRef} from 'react';
import { StyledContactForm } from './ContactSectionElements';
import emailjs from "@emailjs/browser";



const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xmchoma",
        "template_p7pqmtg",
        form.current,
        "OweT7GpVTkNkuvyBv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm id='contacto'>
      <h1>Formulario</h1>      
      <form ref={form} onSubmit={sendEmail}>        
        <label>Nombre:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Consulta o Clases/Curso al que se quiere apuntar:</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
      </form>
    </StyledContactForm>
  );

}

export default ContactSection;