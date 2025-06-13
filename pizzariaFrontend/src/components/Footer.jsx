import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.coluna}>
        <h2>Vila Dy Napolli</h2>
        <ul>
          <li>Historia</li>
          <li>Contato</li>
          <li>Cardápio</li>
        </ul>
        <button className={styles.botao}>PEÇA JÁ</button>
      </div>

      <div className={styles.coluna}>
        <p><strong>Vila Dy Napolli</strong></p>
        <p>Rua Conselheiro João Alfredo, 376 · Macuco · Santos</p>
        <p>das 18:00h às 24:00h</p>
        <p>Telefone: 13 3272-5600 | 13 3272-5900</p>
        <p>Email: contato@viladynapolli.com.br</p>
      </div>
    </footer>
  );
}

export default Footer;
