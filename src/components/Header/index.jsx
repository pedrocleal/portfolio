import { Moon, Sun } from 'phosphor-react';

import { useContext } from 'react';
import { Container, Nav, HeaderContainer } from './styles';

import { ThemeContext } from '../../App';

import memoji from '../../assets/memoji.png';

export function Header({ refs }) {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  function handleScrollTo(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <Container theme={theme}>
      <HeaderContainer theme={theme}>
        <div className="logo-container">
          <img src={memoji} alt="Memoji Pedro" />
          <button type="button" onClick={onToggleTheme}>
            {theme === 'dark' ? <Sun size={24} color="#FFD600" weight="bold" /> : <Moon size={24} color="#002DA0" weight="bold" />}
          </button>
        </div>
        <Nav theme={theme}>
          <p aria-hidden="true" onClick={() => handleScrollTo(refs.aboutRef)}>Sobre</p>
          <p aria-hidden="true" onClick={() => handleScrollTo(refs.projectsRef)}>Projetos</p>
          <p aria-hidden="true" onClick={() => handleScrollTo(refs.techsRef)}>Conhecimentos</p>
          <p aria-hidden="true" onClick={() => handleScrollTo(refs.contactsRef)}>Contato</p>
        </Nav>
      </HeaderContainer>
    </Container>
  );
}
