import React from "react";
import styles from "../styles/CardPizza.module.css";

function CardPizza({ nome, ingredientes, preco, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />

      <h3 className={styles.nome}>{nome}</h3>

      <p className={styles.ingredientes}>{ingredientes}</p>

      <p className={styles.preco}>R$ {preco}</p>

      <button className={styles.botao}>Fazer Pedido</button>
    </div>
  );
}

export default CardPizza;
