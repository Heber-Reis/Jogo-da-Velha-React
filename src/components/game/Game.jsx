import { useState } from "react";

import styles from "./style.module.css";

import GameOption from "../gameoption/GameOption";

function Game () {

  const [gameState, setGameState] = useState(Array(9).fill(1)) //Array(num).fill(num) cria um array com n posições e com valores iniciais de n

  console.log(gameState);
  return(
    <div className={styles.game}>
      {
        gameState.map((value, position) =>
          <GameOption
            key={`game-option-pos-${position}`}//o map no react precisa de uma key unica nos componentes
            status={value}
          />
        )
      }
    </div>
  )
}

export default Game;