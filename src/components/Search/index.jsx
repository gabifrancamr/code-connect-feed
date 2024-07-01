import { FaSearch } from "react-icons/fa";
import styles from './search.module.css'

export default function Search() {
  return (
    <form className={styles.form} action="/">
      <div className={styles.inputArea}>
        <FaSearch size={30} color="#BCBCBC" />
        <input name="q" type="text" placeholder="Digite o que você procura" />
      </div>
      <button className={styles.button} type="submit">Buscar</button>
    </form>
  );
}
