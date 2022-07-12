import { useContext } from 'react';
import { ArrowSquareOut, MouseSimple } from 'phosphor-react';
import { motion } from 'framer-motion';
import { Container, LandingContainer, ProfilePictute } from './styles';
import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

import profilePicture from '../../assets/profile-picture.png';

export function Landing({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <LandingContainer theme={theme}>
        <div className="left-content">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5, delay: 0.5 }}
          >
            <h4>{i18n.t('components.landing.smallText')}</h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 1, delay: 1 }}
          >
            <h1>Pedro Leal</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ ease: 'easeIn', duration: 1, delay: 1.5 }}
          >
            <h4 className="animated-text">{i18n.t('components.landing.role')}</h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ ease: 'easeIn', duration: 2, delay: 1.5 }}
          >
            <div className="buttons">
              <a href="https://www.linkedin.com/in/pedrocleal/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.github.com/pedrocleal" target="_blank" rel="noreferrer">Github</a>
              <a
                href="https://drive.google.com/file/d/1nXbbhUuRZVvqSo5OT_MXpokSH10eaOdp/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="cv-button"
              >
                <p>CV</p>
                <ArrowSquareOut />
              </a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ ease: 'easeIn', duration: 2 }}
        >
          <ProfilePictute theme={theme}>
            <img src={profilePicture} alt="Foto de Pedro Leal sorrindo" />
          </ProfilePictute>

        </motion.div>

      </LandingContainer>
      <MouseSimple theme={theme} size={32} weight="regular" className="mouse" />

    </Container>
  );
}
