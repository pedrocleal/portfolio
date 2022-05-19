import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body {
    background: ${({ theme }) => (theme === 'dark' ? '#1b1b1b' : '#fafafa')};
    margin-top: -1px;
    scroll-behavior: smooth;
    transition: all 0.3s ease-in;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  p, span, strong {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }
`;
