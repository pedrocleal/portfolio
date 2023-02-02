import {
  Moon, Sun, List, X, GlobeHemisphereWest,
} from 'phosphor-react';

import { useContext, useState } from 'react';
import {
  Container, HeaderContainer, Nav, NavMobile,
} from './styles';

import { i18n } from '../../translate/i18n';

import { ThemeContext } from '../../App';

// import memoji from '../../assets/memoji.png';
import logo from '../../assets/logo.png';
import brazilFlag from '../../assets/brazil.png';
import usaFlag from '../../assets/usa.png';

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

  function handleLanguageClick(selectedLanguage) {
    localStorage.setItem('i18nextLng', selectedLanguage);
    return window.location.reload();
  }

  return (
    <>
      <Container theme={theme}>
        <HeaderContainer theme={theme}>
          <div className="logo-container">
            <img
              src={logo}
              alt="Memoji Pedro"
            />
            <button
              type="button"
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? (
                <Sun
                  size={24}
                  color="#FFD600"
                  weight="bold"
                />
              ) : <Moon size={24} color="#002DA0" weight="bold" />}
            </button>
            <div type="button" className="translate-button">
              <GlobeHemisphereWest
                size={24}
                color={theme === 'dark' ? '#fff' : '#000'}
              />
              <div
                className="select-tooltip"
              >
                <button className="option" type="button" onClick={() => handleLanguageClick('pt-BR')}>
                  <img src={brazilFlag} alt="Brazilian flag" />
                </button>
                <hr />
                <button className="option" type="button" onClick={() => handleLanguageClick('en-US')}>
                  <img src={usaFlag} alt="American flag" />
                </button>
              </div>
            </div>
          </div>
          <Nav theme={theme}>
            <p
              aria-hidden="true"
              onClick={() => handleScrollTo(refs.aboutRef)}
            >
              {i18n.t('components.header.firstItem')}

            </p>
            <p
              aria-hidden="true"
              onClick={() => handleScrollTo(refs.projectsRef)}
            >
              {i18n.t('components.header.secondItem')}

            </p>
            <p
              aria-hidden="true"
              onClick={() => handleScrollTo(refs.techsRef)}
            >
              {i18n.t('components.header.thirdItem')}

            </p>
            <p
              aria-hidden="true"
              onClick={() => handleScrollTo(refs.contactsRef)}
            >
              {i18n.t('components.header.fourthItem')}

            </p>
          </Nav>

          <button
            type="button"
            className="burguer-menu"
            onClick={toggleNavMobile}
          >
            <List size={32} weight="bold" />
          </button>

        </HeaderContainer>
      </Container>
      {isNavMobileOpen && (
      <NavMobile>
        <p
          aria-hidden="true"
          onClick={() => handleScrollTo(refs.aboutRef)}
        >
          {i18n.t('components.header.firstItem')}

        </p>
        <p
          aria-hidden="true"
          onClick={() => handleScrollTo(refs.projectsRef)}
        >
          {i18n.t('components.header.secondItem')}

        </p>
        <p
          aria-hidden="true"
          onClick={() => handleScrollTo(refs.techsRef)}
        >
          {i18n.t('components.header.thirdItem')}

        </p>
        <p
          aria-hidden="true"
          onClick={() => handleScrollTo(refs.contactsRef)}
        >
          {i18n.t('components.header.fourthItem')}

        </p>
        <button
          type="button"
          className="exit-button"
          onClick={toggleNavMobile}
        >
          <X
            size={32}
            weight="bold"
            color={theme === 'dark' ? '#fff' : '#000'}
          />
        </button>

      </NavMobile>
      )}
    </>
  );
}
