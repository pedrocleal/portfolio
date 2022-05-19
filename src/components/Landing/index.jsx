import { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from '../../App';

import profilePicture from '../../assets/profile-picture.png';

export function Landing() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <section className="first-section">
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
        <div className="photo">
          <img src={profilePicture} alt="Foto de Pedro Leal sorrindo" />
        </div>
      </section>
      <section className="second-section">
        <h1>Sobre mim</h1>
      </section>
    </Container>
  );
}
