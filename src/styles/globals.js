import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body {
    background: ${({ theme }) => (theme === 'dark' ? '#010203' : '#fafafa')};
    margin-top: -1px;
    transition: all 0.3s ease-in;
    height: 100%;
    font-size: 16px;
    scroll-behavior: smooth !important;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  p, a, span, strong {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  
    &::selection {
      color: #fff;
      background: #8a53ff;
    }
  }
`;
