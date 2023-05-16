import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  min-width: 30%;
  min-height: 20vh;
  margin-top: 5%;
  padding-bottom: 5%;
  margin-bottom: 2%;
  @media screen and (min-width: 576px) {
    min-height: 50vh;
    width: 450px;
  }
`

export const GameIconButton = styled.button`
  background-color: transparent;
  border: none;
  width: 200px;
  max-width: 220px;
`

export const GameIconImage = styled.img`
  max-width: 120px;
  @media screen and (min-width: 576px) {
    max-width: 160px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  width: 110px;
  @media screen and (min-width: 576px) {
    width: 120px;
  }
`
export const ResultIconHead = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const ResultStatusText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  color: #223a5f;
  font-family: 'Bree Serif';
  outline: none;
  cursor: pointer;
  width: 110px;
  max-width: 120px;
  height: 30px;
`
