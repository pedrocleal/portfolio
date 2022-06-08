import styled from 'styled-components';

export const Container = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #2E2E2E;
  z-index: 1;
  transition: all 0.3s ease-in;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  .burguer-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (min-width: 860px) {
      display: none;
    }
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1280px;
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
      
      border: none;
      outline: none;
      transition: all 0.3s ease-in;
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }

  @media (max-width: 860px) {
    padding: 0 12px;
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
    font-weight: 500;
    transition: all 0.3s ease-in;

    &:hover {
      color: #8A53FF;
    }
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);

  p {
    color: #fff;
    font-size: 18px;
    margin: 24px 0;
    cursor: pointer;
    background: #8A53FF;
    border-radius: 20px;
    padding: 8px 16px;;
  }

  .exit-button {
    position: absolute;
    top: 20px;
    right: 20px;

    border: none;
    background: transparent;
    outline: none;
  }
`;
