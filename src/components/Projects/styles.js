import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 72px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 52px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 8px 24px;
    font-size: 16px;

    color: #fff;
    background: #8A53FF;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.1)
    }
  }

  @media (max-width: 1500px) {
    max-width: 1080px;
  }

  @media (max-width: 1080px) {
    max-width: 860px;
  }

  @media (max-width: 860px) {
    margin-top: 72px;
    margin-bottom: 0;
  }
`;

export const ListProjects = styled.div`
  display: flex;
  justify-content: flex-start; 
  flex-direction: column;
  margin-bottom: 32px;

  .project {
    margin: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: 860px) {
        flex-direction: column;
      }
    }

    &:nth-child(even) .project-info {
      margin: 0;
    }
    
    img {
      width: 250px;
      height: 120px;
      margin-bottom: 16px;
      border-radius: 5px;
      box-shadow:  2px 2px 32px 2px ${({ theme }) => (theme === 'dark' ? '#8A53FF61' : '#00000029')};
      transition: all 0.3s ease-out;

      &:hover {
        box-shadow:  1px 1px 32px 1px ${({ theme }) => (theme === 'dark' ? '#8A53FF' : '#0000006b')};
        transform: translate3d(0px, -0.125rem, 0px);
      }
    }

    .project-info {
      margin-left: 72px;

      span {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      a {
        display: inline-block;
        margin-top: 12px;
        text-decoration: none;
        font-weight: bold;
        color: #8A53FF;
      }

      @media (max-width: 860px) {
        padding: 0 16px;
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    @media (max-width: 860px) {
      justify-content: center;
      flex-direction: column;
    }
  }
`;
