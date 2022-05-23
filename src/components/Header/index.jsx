import { Moon, Sun } from 'phosphor-react';

import { useContext } from 'react';
import { Container, Nav, HeaderContainer } from './styles';

import { ThemeContext } from '../../App';

import memoji from '../../assets/memoji.png';

export function Header({ refs }) {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  console.log(refs);
  
  function handleScrollTo(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  return (
    <Container theme={theme}>
      <HeaderContainer theme={theme}> 
        <div className="logo-container">
          <img src={memoji} alt="Memoji Pedro" />
          <button type="button" onClick={onToggleTheme}>
            {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
        <Nav theme={theme}>
          <p onClick={() => handleScrollTo(refs.aboutRef)}>Sobre</p>
          <p onClick={() => handleScrollTo(refs.projectsRef)}>Projetos</p>
          <p onClick={() => handleScrollTo(refs.techsRef)}>Conhecimentos</p>
          <p onClick={() => handleScrollTo(refs.contactsRef)}>Contato</p>
        </Nav>
      </HeaderContainer>
    </Container>
  );
}
