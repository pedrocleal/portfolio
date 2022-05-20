import { useContext } from 'react';
import { Container, LandingContainer, ProfilePictute } from './styles';
import { ThemeContext } from '../../App';

import profilePicture from '../../assets/profile-picture.png';

import { About } from '../About';

export function Landing() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <LandingContainer theme={theme}>
        <div className='left-content'>
          <div className="greetings">
            <h4>
              Olá
              {' '}
              <div className="emote">👋🏾</div>
              , eu sou
            </h4>
            <h1>Pedro Leal</h1>
            <h4>Desenvolvedor front-end</h4>
            <div className="buttons">
              <button type="button">LinkedIn</button>
              <button type="button">Github</button>
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
