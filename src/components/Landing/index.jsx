import { useContext } from 'react';
import { MouseSimple } from 'phosphor-react';
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
          <h4>{i18n.t('components.landing.smallText')}</h4>
          <h1>Pedro Leal</h1>
          <h4 className="animated-text">{i18n.t('components.landing.role')}</h4>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/pedrocleal/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.github.com/pedrocleal" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <ProfilePictute theme={theme}>
          <img src={profilePicture} alt="Foto de Pedro Leal sorrindo" />
        </ProfilePictute>
      </LandingContainer>
      <MouseSimple theme={theme} size={32} weight="regular" className="mouse" />

    </Container>
  );
}
