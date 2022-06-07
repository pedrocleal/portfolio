import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  /* background: url(${({ theme }) => (theme === 'dark' ? '/src/assets/code-dark.png' : '/src/assets/code-white.png')}) center center no-repeat;
  background-size: 100% auto; */
  transition: all 0.3s ease-in;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 32px;
  }

  p {
    margin-top: 24px;
    width: 80%;
  }

  img {
    height: 300px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.04)
    }
  }
`;
