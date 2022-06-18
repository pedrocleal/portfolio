import { useContext, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';
import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

import illustration from '../../assets/illustration.svg';

const aboutMotionVariants = {
  visible: {
    opacity: 1, translateY: -50, transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, translateY: 0 },
};

export function About({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container theme={theme} ref={elementRef}>
      <motion.div
        ref={ref}
        animate={controls}
        variants={aboutMotionVariants}
        initial="hidden"
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
        ref={ref}
        animate={controls}
        variants={aboutMotionVariants}
        initial="hidden"
      >
        <img src={illustration} alt="" />

      </motion.div>
    </Container>
  );
}
