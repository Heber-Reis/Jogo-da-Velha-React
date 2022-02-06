import styles from "./Style.module.css"

import Icon from "../icon/icon";

function Score () {
  return(
    <>
      <h4>Placar: </h4>
      <div className={styles.Score}>
        <div className={styles.ScoreContent}>
          <Icon iconName={"circle"}/>
          <h2>0</h2>
        </div>
        <div className={styles.ScoreContent}>
          <Icon iconName={"x"}/>
          <h2>0</h2>
        </div>
      </div>
    </>
  )
}

export default Score;