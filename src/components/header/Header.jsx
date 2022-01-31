import styles from "./style.module.css";

import Title from "../title/Title";
import Subtitle from "../subtitle/subtitle";
import Icon from "../icon/icon";

function Header () {
  return(
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Heber Magno</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName={'github'} link={"https://github.com"}/>
      </div>
    </div>
  )
}

export default Header;