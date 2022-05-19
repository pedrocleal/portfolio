import { Link } from 'react-router-dom';

import { Moon, Sun } from 'phosphor-react';

import { useContext } from 'react';
import { Container, Nav, HeaderContainer } from './styles';

import { ThemeContext } from '../../App';

import memoji from '../../assets/memoji.png';

export function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <HeaderContainer theme={theme}>
        <div className="logo-container">
          <img src={memoji} alt="Memoji Pedro" />
          <button type="button" onClick={onToggleTheme}>
            {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
        <Nav theme={theme}>
          <Link to="/">Sobre</Link>
          <Link to="/">Projetos</Link>
          <Link to="/">Conhecimentos</Link>
          <Link to="/">Contato</Link>
        </Nav>
      </HeaderContainer>
    </Container>
  );
}
