import { useContext } from 'react';
import { Container, LandingContainer, ProfilePictute } from './styles';
import { ThemeContext } from '../../App';

import profilePicture from '../../assets/profile-picture.png';

import { About } from '../About';

export function Landing({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <LandingContainer theme={theme}>
        <div className="left-content">
          <div className="greetings">
            <h4>
              Olá
              {' '}
              <div className="emote">👋🏾</div>
              , eu sou
            </h4>
            <h1>Pedro Leal</h1>
            <h4 className="animated-text">Desenvolvedor front-end.</h4>
            <div className="buttons">
              <a href="https://www.linkedin.com/in/pedrocleal/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.github.com/pedrocleal" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
          <About />
        </div>
        <ProfilePictute theme={theme}>
          <img src={profilePicture} alt="Foto de Pedro Leal sorrindo" />
        </ProfilePictute>
      </LandingContainer>
    </Container>
  );
}
