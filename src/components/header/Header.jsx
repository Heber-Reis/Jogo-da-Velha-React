import styles from "./style.module.css";

import Title from "../title/Title";
import Subtitle from "../subtitle/subtitle";

function Header () {
  return(
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Heber Magno</Subtitle>
    </div>
  )
}

export default Header;