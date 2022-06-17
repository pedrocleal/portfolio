import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  border-radius: 32px;
  margin: 72px auto;
  padding-bottom: 120px;
  margin-bottom: 0;
  background: linear-gradient(318deg, #813b87, #5200FF);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }


  .head {
    margin-top: 92px;
    text-align: center;
    
    h3 {
      font-size: 24px;
      color: #fff;
    }

    h1 {
      font-size: 36px;
      color: #fff;
    }
  }

  img {
    height: 250px;
  }

  .buttons {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    
    .linkedin {
      background: #0073B0;
    }

    .email {
      background: #E14E4C;
    }

    .wpp {
      background: #319F4F;
    }

    a {
      text-decoration: none;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px;  
      margin: 12px 24px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease-out;

      &:hover {
        transform: scale(1.1);
      }

      p {
        margin-left: 8px;
        color: #fff;
      }
    }
    
    @media (max-width: 860px) {
      flex-direction: column;
    }
  }
`;
