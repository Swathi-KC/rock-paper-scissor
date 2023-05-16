import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  GameRulesContainer,
  PopupButton,
  PopupView,
  CloseButton,
  PopupImage,
} from './styledComponents'

const GameRules = () => (
  <GameRulesContainer>
    <Popup modal trigger={<PopupButton type="button">RULES</PopupButton>}>
      {close => (
        <PopupView>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupView>
      )}
    </Popup>
  </GameRulesContainer>
)

export default GameRules
