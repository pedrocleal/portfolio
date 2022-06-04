import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 1280px; 
  width: 100%;
  margin: 52px auto;

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }
`;
