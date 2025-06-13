import styles from '../styles/Home.module.css';
import Header from '../components/Header';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.overlay}>
        <h1>O Sabor de Santos em Cada Fatia</h1>
        <p>
          Descubra os sabores artesanais da Vila Dy Napolli, onde cada pizza é feita com amor e ingredientes frescos. 
        </p>
        <button className={styles.menuButton}>CARDÁPIO</button>
      </div>
    </section>
  );
}

export default Home;


