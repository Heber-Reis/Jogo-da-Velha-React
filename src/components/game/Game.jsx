import { useState, useEffect } from "react";

import styles from "./style.module.css";

import GameOption from "../gameoption/GameOption";
import Icon from "../icon/icon";

const winnerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function Game () {

  const [gameState, setGameState] = useState(Array(9).fill(0)); //Array(num).fill(num) cria um array com n posições e com valores iniciais de n
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  const handleClick = (pos) => {
    if(gameState[pos] === 0 && winner === 0){
      let newGameState = [...gameState]//assim copia os valores do gameState
      newGameState[pos] = currentPlayer;
      setGameState(newGameState);
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos]);
      const sum = values.reduce((acumulated, value) => acumulated+value);
      if( Math.abs(sum) === 3) setWinner(sum/ 3);
      console.log(sum/3);
    })
  }

  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1);
    verifyGame()
  },gameState);

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