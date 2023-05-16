import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  border: 1px #ffffff solid;
  border-radius: 4px;
  margin-top: 5%;
`
export const ScoreCardContentCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`
export const GameIconName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Bree Serif';
  margin-left: 10px;
`

export const ScoreBoardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  max-width: 150px;
  height: 120px;
  max-height: 150px;
  background-color: #ffffff;
  border: none;
  border-radius: 6px;
  margin: 2%;
  padding: 15px;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Bree Serif';
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 0;
`
