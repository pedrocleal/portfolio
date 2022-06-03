import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #2E2E2E;
  z-index: 1;
  transition: all 0.3s ease-in;
  /* Fix header box shadow */
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
      transition: all 0.3s ease-in;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    cursor: pointer;
    margin-right: 32px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: 600;
  }
`;
