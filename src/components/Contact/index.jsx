import { WhatsappLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Container } from './styles';

import { i18n } from '../../translate/i18n';

import memoji from '../../assets/memoji.png';

const contactMotionVariants = {
  visible: {
    opacity: 1, scale: 1, transition: { duration: 0.8 },
  },
  hidden: {
    opacity: 0, scale: 0,
  },
};

export function Contact({ elementRef }) {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [ref, inView]);

  return (
    <motion.div animate={controls} ref={ref} variants={contactMotionVariants} initial="hidden">
      <Container ref={elementRef}>
        <div className="head">
          <h3>{i18n.t('components.contact.firstText')}</h3>
          <h1>{i18n.t('components.contact.secondText')}</h1>
        </div>
        <img src={memoji} alt="Memoji Pedro Leal" />
        <div className="buttons">
          <a href="https://www.linkedin.com/in/pedrocleal/" target="_blank" className="linkedin" rel="noreferrer">
            <LinkedinLogo size={24} color="#fff" />
            <p>Linkedin</p>
          </a>
          <a href="mailto:pedrocleal.dev@gmail.com" className="email">
            <EnvelopeSimple size={24} color="#fff" />
            <p>Email</p>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5583982033959&text=Ol%C3%A1%20Pedro%2C%20vim%20pelo%20seu%20site!" target="_blank" className="wpp" rel="noreferrer">
            <WhatsappLogo size={24} color="#fff" />
            <p>Whatsapp</p>
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
