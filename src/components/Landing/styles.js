import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 172px;
  
  .first-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .greetings {      
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
  
      h1 {
        font-size: 72px;
      }

      .buttons {
        margin-top: 24px;

        button {
          padding: 8px 16px;
          width: 150px;
          color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
          border: 1px solid ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          background: transparent;
          transition: all 0.3s ease-in;

          &:hover {
            background: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
            color: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};
          }
          
          &:nth-child(2) {
            margin-left: 12px;
          }
        }
      }
    }

    .photo {

      img {
        width: 350px;
        height: 350px;
        transition: all 0.5s ease-in-out;
        box-shadow: rgb(0 0 0 / 16%) 0px 0px 2.5rem;
        border-radius: 80%;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

`;
