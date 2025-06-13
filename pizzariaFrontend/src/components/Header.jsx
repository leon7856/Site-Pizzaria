import styles from "../styles/Header.module.css";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Vila Dy Napolli</div>
      <nav className={styles.nav}>
        <a href="#">História</a>
        <a href="#">Cardápio</a>
        <a href="#">Contato</a>
        <button className={styles.orderButton} onClick={() => navigate('/login')}>LOGIN</button>
      </nav>
    </header>
  );
}

export default Header;
