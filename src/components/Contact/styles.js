import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  margin: 72px auto;
  padding-bottom: 120px;
  margin-bottom: 0;
  background: #5200FF;
  display: flex;
  align-items: center;
  flex-direction: column;

  .texts {
    margin-top: 92px;
    text-align: center;
    
    h3 {
      font-size: 24px;
      color: #fff;
    }

    h1 {
      font-size: 32px;
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
    justify-content: space-evenly;
    width: 500px;
    
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;  
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
  }
`