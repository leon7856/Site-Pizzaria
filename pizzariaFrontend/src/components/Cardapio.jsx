import React, { useState } from "react";
import styles from "../styles/Cardapio.module.css";
import CardPizza from "./CardPizza";

const pizzas = [
  {
    categoria: "Promocoes",
    nome: "Promoção Família",
    ingredientes: "2 pizzas grandes + refri",
    preco: "59.90",
    imagem: "/images/pizza1.png",
  },
  {
    categoria: "Pizzas",
    nome: "Calabresa",
    ingredientes: "Calabresa, cebola, mussarela",
    preco: "42.90",
    imagem: "/images/pizza1.png",
  },
];

const categorias = ["Promocoes", "Pizzas", "Pizzas Doces", "Combo"];
const ITEMS_PER_PAGE = 12;

function Cardapio() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Pizzas");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const filtradas = pizzas.filter(
    (p) => p.categoria === categoriaSelecionada
  );

  const totalPaginas = Math.ceil(filtradas.length / ITEMS_PER_PAGE);
  const inicio = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const fim = inicio + ITEMS_PER_PAGE;
  const pizzasPaginadas = filtradas.slice(inicio, fim);

  const trocarCategoria = (cat) => {
    setCategoriaSelecionada(cat);
    setPaginaAtual(1);
  };

  return (
    <section className={styles.cardapioSection}>
      <div className={styles.filtros}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => trocarCategoria(cat)}
            className={categoriaSelecionada === cat ? styles.ativo : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {pizzasPaginadas.map((pizza, index) => (
          <CardPizza
            key={index}
            nome={pizza.nome}
            ingredientes={pizza.ingredientes}
            preco={pizza.preco}
            imagem={pizza.imagem}
          />
        ))}
      </div>

      <div className={styles.paginacao}>
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPaginaAtual(num)}
            className={paginaAtual === num ? styles.ativo : ""}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;
