import styled from 'styled-components'

export const GameRulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
export const PopupButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: #223a5f;
  font-family: 'Bree Serif';
  outline: none;
  cursor: pointer;
  width: 70px;
  max-width: 80px;
  height: 30px;
  border-radius: 10px;
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const PopupImage = styled.img`
  width: 85%;
  align-self: center;
`
