import {Component} from 'react'

import ScoreCard from '../ScoreCard'

import GameResults from '../GameResults'

import GameRules from '../GameRules'

import {MainContainer, GameRulesCont} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingGame extends Component {
  state = {
    score: 0,
    isDisplayed: true,
    choicesChooseArr: [choicesList[0], choicesList[1]],
    gameStatusText: 'YOU WON',
  }

  restartGame = () => this.setState({isDisplayed: true})

  getResults = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResults = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachChoice => eachChoice.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResults(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isDisplayed: false,
      choicesChooseArr: [choice1[0], choice2],
      gameStatusText: result,
      score: newScore,
    })
  }

  render() {
    const {score, isDisplayed, gameStatusText, choicesChooseArr} = this.state
    return (
      <MainContainer>
        <ScoreCard score={score} />
        <GameResults
          isDisplayed={isDisplayed}
          choicesList={choicesList}
          choicesChooseArr={choicesChooseArr}
          gameStatusText={gameStatusText}
          restartGame={this.restartGame}
          checkResults={this.checkResults}
        />
        <GameRulesCont>
          <GameRules />
        </GameRulesCont>
      </MainContainer>
    )
  }
}

export default PlayingGame
