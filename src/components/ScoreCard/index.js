import {
  ScoreCardContainer,
  ScoreCardContentCont,
  GameIconName,
  ScoreBoardCont,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreCardContainer>
      <ScoreCardContentCont>
        <GameIconName>
          ROCK <br /> PAPER <br />
          SCISSORS
        </GameIconName>
      </ScoreCardContentCont>
      <ScoreBoardCont>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoardCont>
    </ScoreCardContainer>
  )
}

export default ScoreCard
