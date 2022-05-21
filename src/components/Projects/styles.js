import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0px auto;
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
    background: #5200FF9E;
    border: none;
    border-radius: 5px;
    outline: none;
  }
`

export const ListProjects = styled.div`
  display: flex;
  justify-content: flex-start; 
  flex-direction: column;
  margin-bottom: 52px;

  .project {
    margin: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &:nth-child(even) .project-info {
      margin: 0;
    }
    
    img {
      width: 250px;
      height: 120px;
      margin-bottom: 16px;
      border-radius: 5px;
      box-shadow:  1px 1px 32px 1px ${({ theme }) => theme === 'dark' ? '#5200FF61' : '#00000029'};
      transition: all 0.3s ease-out;

      &:hover {
        box-shadow:  1px 1px 32px 1px ${({ theme }) => theme === 'dark' ? '#5200FF' : '#0000006b'};
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
        color: #5200FF;
      }
    }
  }
`