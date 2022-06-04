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
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;

  .left-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    .greetings {  
      height: 100vh;
      display: flex;
      justify-content: center;
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
          background: ${({ theme }) => (theme === 'dark' ? '#1b1b1b' : '#fafafa')};
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
  }
`;

export const ProfilePictute = styled.div`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 15rem;
  padding-bottom: 15rem;

  img {
    width: 350px;
    height: 350px;
    transition: all 0.3s ease-out 0s;
    box-shadow: 0px 0px 2.5rem ${({ theme }) => (theme === 'dark' ? '#5200FF61' : '#00000029')};
    border-radius: 80%;

    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      filter: grayscale(30%) contrast(1) brightness(90%);
    }
  }
`;
