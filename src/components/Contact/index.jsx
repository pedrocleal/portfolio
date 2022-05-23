import { WhatsappLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";

import { Container } from "./styles";

import memoji from '../../assets/memoji.png';

export function Contact({ elementRef }) {
  return (
    <Container ref={elementRef}>
      <div className="texts">
        <h3>Tem alguma dúvida?</h3>
        <h1>Entre em contato!</h1>
      </div>
      <img src={memoji} alt="Memoji Pedro Leal" />
      <div className="buttons">
        <a href="" className="linkedin">
          <LinkedinLogo size={24} color='#fff'/>
          <p>Linkedin</p>
        </a>
        <a href="" className="email">
          <EnvelopeSimple size={24} color='#fff'/> 
          <p>Email</p>
        </a>
        <a href="" className="wpp">
          <WhatsappLogo size={24} color='#fff'/>
          <p>Whatsapp</p>
        </a>
      </div>
    </Container>
  )
}