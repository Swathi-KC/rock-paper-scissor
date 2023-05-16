import {
  GameViewContainer,
  GameIconButton,
  GameIconImage,
  ResultContainer,
  ResultViewContainer,
  ResultIconHead,
  ResultStatusText,
  PlayAgainButton,
} from './styledComponents'

const GameResults = props => {
  const {
    choicesList,
    isDisplayed,
    checkResults,
    choicesChooseArr,
    gameStatusText,
    restartGame,
  } = props

  const showGameView = () => (
    <GameViewContainer>
      {isDisplayed && (
        <>
          <GameIconButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResults(choicesList[0].id)}
          >
            <GameIconImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameIconButton>

          <GameIconButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResults(choicesList[1].id)}
          >
            <GameIconImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameIconButton>

          <GameIconButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResults(choicesList[2].id)}
          >
            <GameIconImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameIconButton>
        </>
      )}
      {!isDisplayed && (
        <ResultContainer>
          <ResultViewContainer>
            <ResultIconHead>YOU</ResultIconHead>
            <GameIconImage
              src={choicesChooseArr[0].imageUrl}
              alt="your choice"
            />
          </ResultViewContainer>
          <ResultViewContainer>
            <ResultIconHead>OPPONENT</ResultIconHead>
            <GameIconImage
              src={choicesChooseArr[1].imageUrl}
              alt="opponent choice"
            />
          </ResultViewContainer>
          <ResultViewContainer>
            <ResultStatusText>{gameStatusText}</ResultStatusText>
            <PlayAgainButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultViewContainer>
        </ResultContainer>
      )}
    </GameViewContainer>
  )
  return showGameView()
}

export default GameResults
