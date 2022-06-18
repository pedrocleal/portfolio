import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 152px auto;
  padding: 140px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 24px;
    font-size: 32px;
  }
  
  p {
    margin-top: 16px;
    font-size: 18px;
    color: #A3A3A3;

    @media (max-width: 860px) {
      text-align: center;
      margin: 16px 24px;
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }

  @media (max-width: 860px) {
    padding: 0;
  }
`;

export const ListTechs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 52px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  
  span {
    margin-top: 0;
    margin-left: 24px;
    font-weight: bold;
    font-size: 18px;
  }
  
  /* Motion button */
  button {
    background: transparent;
    border: none;
    outline: none;
  }
  
  .tech-square {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    
    
    
    img {
      height: 50px;
    }
  }
  
  .tech-square-NextJS {
    background: #fafafa;
    border-radius: 100%;
    margin: 0 8px;
    padding: 1px;
  }
`;
