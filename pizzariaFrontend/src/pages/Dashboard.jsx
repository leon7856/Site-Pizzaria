import styles from "../styles/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import TabelaPedidos from "../components/TabelaPedidos";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <h1>Gestão de Pedidos</h1> {}

        {}
        <div className={styles.pedidosCard}>
          <TabelaPedidos />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;