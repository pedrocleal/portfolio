import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .about-texts {
    h1 {
      font-size: 32px;
    }
  
    p {
      margin-top: 24px;
      width: 80%;
      text-align: justify;
    }

    .welcome {
      font-weight: bold;
      color: #8A53FF;
    }
  }
  
  img {
    height: 300px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.04)
    }

    @media (max-width: 860px) {
      height: 300px;
    }
    
    @media (max-width: 520px) {
      height: 200px;
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 52px 24px;
    height: auto;

    .about-texts {
      h1 {
        text-align: center;
      }
      
      p {
        width: 100%;
        text-align: justify;
        margin-bottom: 24px;
      }
    }
  }
`;
