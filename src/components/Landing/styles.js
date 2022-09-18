import styled, { keyframes } from 'styled-components';

const animateText = keyframes`
  to {
    left: 100%;
  }
`;

const blink = keyframes`
  to {
    background: transparent;
  }
`;

const animateMouse = keyframes`
  0% {
    opacity: 0%;
    transform: translateY(-20px);
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px)
  }
  100% {
    transform: translateY(-0px);
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  position: relative;

  .mouse {
    position: absolute;
    bottom: 30px;
    left: 50%;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    animation: ${animateMouse} 1.3s infinite ease-in-out;
    animation-delay: 3s;


    @media (max-width: 860px) {
      left: 46%;
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;

  .left-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 52px;
    }
    
    .animated-text {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 400;
      position: relative;
      width: max-content;
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      &::after {
        width: 6px;
        background: linear-gradient(318deg, #813b87, #5200FF);
        animation: ${animateText} 3s steps(24) 2s forwards, ${blink} 0.75s steps(24) infinite;
      }

      &::before {
        background: ${({ theme }) => (theme === 'dark' ? '#010203' : '#fafafa')};
        animation: ${animateText} 3s steps(24) 2s forwards;
      }
    }

    h4 {
      font-size: 28px;
      font-weight: 500;

      .emote {
        display: inline-block;
        transition: all 0.2s ease-in-out;
        cursor: default;

        &:hover {
          transform: rotate(10deg);
        }
      }
    }

    .buttons {
      display: flex;
      margin-top: 24px;

      @media (max-width: 520px) {
        margin: 24px 12px 0;
      }

      .cv-button {
        p {
          color: #fff;
          margin-right: 8px;
        }
      }

      a {
        margin-left: 16px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        padding: 8px 16px;
        text-decoration: none;
        width: 100px;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        background: linear-gradient(318deg, #813b87, #5200FF);
        transition: all 0.3s ease-out;

        &:hover {
          transform: scale(1.1);
        }
        
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 860px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    .left-content {
      margin-top: 32px;
      align-items: center;

      .animated-text {
        text-align: center;
      }
    }
  }

  @media (max-width: 520px) {
    .left-content {
      h4 {
        font-size: 18px;
      }
    }
  }
`;

export const ProfilePictute = styled.div`
  img {
    width: 350px;
    height: 350px;
    transition: all 0.3s ease-out 0s;
    box-shadow: 0px 0px 2.5rem ${({ theme }) => (theme === 'dark' ? '#5200FF61' : '#00000029')};
    border-radius: 100%;
    animation: ${float} 5s infinite;

    @media (max-width: 1500px) {
      height: 300px;
      width: 300px;
    }

    @media (max-width: 520px) {
      height: 200px;
      width: 200px;
    }
  }
`;
