import {
  useEffect, createContext, useMemo, useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import GlobalStyles from './styles/globals';

export const ThemeContext = createContext('dark');

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const memoContextValues = useMemo(() => ({
    theme, onToggleTheme: handleToggleTheme,
  }), [theme, handleToggleTheme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={memoContextValues}>
        <GlobalStyles theme={theme} />
        <Home />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
