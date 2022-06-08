import {
  Moon, Sun, List, X,
} from 'phosphor-react';

import { useContext, useState } from 'react';
import {
  Container, HeaderContainer, Nav, NavMobile,
} from './styles';

import { ThemeContext } from '../../App';

import memoji from '../../assets/memoji.png';

export function Header({ refs }) {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  function handleScrollTo(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setIsNavMobileOpen(false);
  }

  function toggleNavMobile() {
    setIsNavMobileOpen((prevState) => !prevState);
  }

  return (
    <>
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

          <button type="button" className="burguer-menu" onClick={toggleNavMobile}>
            <List size={32} weight="bold" />
          </button>

        </HeaderContainer>
      </Container>
      {isNavMobileOpen && (
      <NavMobile>
        <p aria-hidden="true" onClick={() => handleScrollTo(refs.aboutRef)}>Sobre</p>
        <p aria-hidden="true" onClick={() => handleScrollTo(refs.projectsRef)}>Projetos</p>
        <p aria-hidden="true" onClick={() => handleScrollTo(refs.techsRef)}>Conhecimentos</p>
        <p aria-hidden="true" onClick={() => handleScrollTo(refs.contactsRef)}>Contato</p>
        <button type="button" className="exit-button" onClick={toggleNavMobile}>
          <X size={32} weight="bold" color={theme === 'dark' ? '#fff' : '#000'} />
        </button>
      </NavMobile>
      )}
    </>
  );
}
