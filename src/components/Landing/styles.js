import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
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
        button {
          padding: 8px 16px;
          width: 150px;
          color: #fff;
          /* border: 1px solid ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')}; */
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
    box-shadow: 0px 0px 2.5rem ${({ theme }) => theme === 'dark' ? '#5200FF61' : '#00000029'};
    border-radius: 80%;

    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      filter: grayscale(30%) contrast(1) brightness(90%);
    }
  }
`;
