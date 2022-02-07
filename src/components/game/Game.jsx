import { useState, useEffect } from "react";

import styles from "./style.module.css";

import GameOption from "../gameoption/GameOption";
import GameInfo from "../gameInfo/GameInfo";
import Score from "../Score/Score";

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
  const [winnerLine, setWinnerLine] = useState([]);
  const [draw, setDraw] = useState(false);
  const [scoreX, setScorex] = useState(0);
  const [scoreCircle, setScoreCircle] = useState(0);

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
      if( Math.abs(sum) === 3) {
        setWinner(sum/ 3);
        setWinnerLine(line);
        if(sum/3 === 1) setScoreCircle(scoreCircle + 1);
        else if (sum/3 === -1) setScorex(scoreX + 1);
      }
    })
  }

  const handleReset = () => {
    setGameState(Array(9).fill(0));
    setWinner(0);
    setWinnerLine([]);
    setDraw(false);
  }

  const verifyDraw = () => {
    //if(gameState.filter((value) => value === 0).length === 0);
    if(gameState.find((value) => value === 0) === undefined && winner === 0) setDraw(true);
  }

  const verifyWinnerLine = (pos) => winnerLine.find((value) => value === pos) !== undefined;

  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1);
    verifyGame()
    verifyDraw();
  },gameState);

  useEffect(() => {
    if(winner !== 0) setDraw(false)
  },[winner])

  return(
    <>
      <div className={styles.gameContent}>
        <div className={styles.game}>
          {
            gameState.map((value, position) =>
              <GameOption
                key={`game-option-pos-${position}`}//o map no react precisa de uma key unica nos componentes
                status={value}
                onClick={() => handleClick(position)}
                isWinner={verifyWinnerLine(position)}
                isDraw={draw}
              />
            )
          }
        </div>
        <GameInfo 
          currentPlayer={currentPlayer} 
          winner={winner}
          onReset = {handleReset}
          isDraw={draw}
        />
      </div>
      <Score ScoreCircle={scoreCircle} ScoreX={scoreX}/>
    </>      
  )
}

export default Game;