import { createContext, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import GlobalStyles from './styles/globals';

export const ThemeContext = createContext('dark');

function App() {
  const [theme, setTheme] = useState('dark');

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
        <Header />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
