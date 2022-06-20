import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

import illustration from '../../assets/illustration.svg';

export function About({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <motion.div
        whileInView={{ opacity: 1, translateY: -50, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, translateY: 0 }}
        viewport={{ once: true }}
      >
        <div className="about-texts">
          <h1>{i18n.t('components.about.bigText')}</h1>
          <p className="welcome">{i18n.t('components.about.firstParagraph')}</p>
          <p>{i18n.t('components.about.secondParagraph')}</p>
          <p>{i18n.t('components.about.thirdParagraph')}</p>
          <p>{i18n.t('components.about.fourthParagraph')}</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, translateY: -50, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, translateY: 0 }}
      >
        <img src={illustration} alt="" />

      </motion.div>
    </Container>
  );
}
