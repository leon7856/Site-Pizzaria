import styles from "../styles/TabelaPedidos.module.css";

const pedidos = [
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Entregando", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Preparando", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Preparando", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Entregando", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Entregando", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Cancelado", valor: "R$ 120,00" },
  { numero: "#154", cliente: "Marcio Ivam", pedido: "Portuguesa", endereco: "Rua particular Vila Augusta", status: "Preparando", valor: "R$ 120,00" },
];

function getStatusClass(status) {
  if (status === "Entregando") return styles.entregando;
  if (status === "Preparando") return styles.preparando;
  if (status === "Cancelado") return styles.cancelado;
  return '';
}

function TabelaPedidos() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Número</th>
          <th>Cliente</th>
          <th>Pedido</th>
          <th>Endereço</th>
          <th>Status</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((p, i) => (
          <tr key={i}>
            <td>
              <span className={styles.numeroIndicator}></span> {p.numero}
            </td>
            <td>{p.cliente}</td>
            <td>{p.pedido}</td>
            <td>{p.endereco}</td>
            <td><span className={getStatusClass(p.status)}>{p.status}</span></td>
            <td>{p.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaPedidos;