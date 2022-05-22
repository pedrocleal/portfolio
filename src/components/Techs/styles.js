import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 152px auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 24px;
    font-size: 32px;
  }
  
  p {
    margin-top: 16px;
    color: #8A53FF;
  }
`

export const ListTechs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 52px;
  margin-left: 72px;
  
  width: 100%;
`

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-top: 0;
    margin-left: 24px;
    font-weight: bold;
    font-size: 18px;
  }

  .tech-square {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8A53FF;
    border-radius: 10px;

    img {
      height: 50px;
    }
  }
`