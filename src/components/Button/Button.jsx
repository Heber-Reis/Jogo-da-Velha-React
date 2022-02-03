import styles from "./style.module.css";

function Button ({children, onClick, disabled}) {
  return(
    <button 
      onClick={onClick} 
      className={styles.Button}
      disabled={disabled}>
        {children}
    </button>
  )
}

export default Button;