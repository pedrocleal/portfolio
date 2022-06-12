import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 1280px; 
  width: 100%;
  margin: 52px auto;

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 4px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border-radius: 10px;
    border: 2px solid #5200ff;
    background: transparent;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }

  @media (max-width: 860px) {
    text-align: center;
  }
`;
