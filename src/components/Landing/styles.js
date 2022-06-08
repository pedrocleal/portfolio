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

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: auto;

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
        background: #8A53FF;
        animation: ${animateText} 3s steps(24) 1s forwards, ${blink} 0.75s steps(24) infinite;
      }

      &::before {
        background: ${({ theme }) => (theme === 'dark' ? '#161a1d' : '#fafafa')};
        animation: ${animateText} 3s steps(24) 1s forwards;
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
      margin-top: 24px;

      a {
        display: inline-block;
        text-align: center;
        padding: 8px 16px;
        text-decoration: none;
        width: 100px;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        background: #8A53FF;
        transition: all 0.3s ease-out;

        &:hover {
          transform: scale(1.1);
          background: #6124EF;
        }
        
        &:nth-child(2) {
          margin-left: 16px;
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
    border-radius: 80%;
    border: none;

    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      filter: grayscale(30%) contrast(1) brightness(90%);
    }
    
    @media (max-width: 860px) {
      height: 300px;
      width: 300px;
    }

    @media (max-width: 520px) {
      height: 200px;
      width: 200px;
    }
  }
`;
