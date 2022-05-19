import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #606060;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: flex;
    align-items: center;
    
    img {
      height: 72px;
    }

    button {
      margin-top: 8px;
      background: transparent;
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      border: none;
      outline: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 32px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: 500;
  }
`;
