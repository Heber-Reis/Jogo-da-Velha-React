import { useState } from "react";

import styles from "./style.module.css";

import GameOption from "../gameoption/GameOption";
import Icon from "../icon/icon";

function Game () {

  const [gameState, setGameState] = useState(Array(9).fill(0)); //Array(num).fill(num) cria um array com n posições e com valores iniciais de n
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleClick = (pos) => {
    if(gameState[pos] === 0){
      let newGameState = [...gameState]//assim copia os valores do gameState
      newGameState[pos] = currentPlayer;
      setCurrentPlayer(currentPlayer * -1);
      setGameState(newGameState);
    }
  }

  return(
    <div className={styles.gameContent}>
      <div className={styles.game}>
        {
          gameState.map((value, position) =>
            <GameOption
              key={`game-option-pos-${position}`}//o map no react precisa de uma key unica nos componentes
              status={value}
              onClick={() => handleClick(position)}
            />
          )
        }
      </div>
      <div className={styles.gameInfo}>
        <h4>Próximo a jogar:</h4>
        {
          currentPlayer === 1 && <Icon iconName="circle"/>
        }
        {
          currentPlayer === -1 && <Icon iconName="x"/>
        }
      </div>
    </div>

  )
}

export default Game;