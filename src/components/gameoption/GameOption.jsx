import styles from "./style.module.css";
import Icon from "../icon/icon"

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>//dessa forma não preciso repetir o size

function GameOption ({ status }) {
  return(
    <div className={styles.gameOption}>
      {
        status === 1 && <GameIcon iconName="circle"/>
      }      
      {
        status === -1 && <GameIcon iconName="x"/>
      }
    </div>
  )
}

export default GameOption;