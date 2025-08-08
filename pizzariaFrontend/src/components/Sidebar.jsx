import styles from "../styles/Sidebar.module.css";
import { FaChartBar, FaPizzaSlice, FaUsers, FaMoneyBill, FaCog, FaChevronDown, FaChevronRight } from "react-icons/fa"; // Importe os ícones necessários

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        VILA DY <span>NAPOLLI</span>
        <span className={styles.logoPizzeria}>PIZZARIA</span> {/* Adicionado um span para "PIZZARIA" */}
      </div>
      <nav>
        <ul>
          {/* Item Dashboard com seta para baixo */}
          <li className={`${styles.menuItem} ${styles.active}`}> {/* Adicionado .active para simular o selecionado */}
            <div className={styles.menuItemContent}>
              <FaChartBar /> Dashboard
            </div>
            <FaChevronDown className={styles.menuArrow} />
          </li>

          {/* Item Gestão de Pedidos com seta para baixo */}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaPizzaSlice /> Gestão de Pedidos
            </div>
            <FaChevronDown className={styles.menuArrow} />
          </li>

          {/* Item Cardápio (sem seta) */}
          <li className={styles.menuItem}>
            <FaPizzaSlice /> Cardápio
          </li>

          {/* Linha de separação (visual) */}
          <li className={styles.separator}></li> {/* Adicionado para a linha de separação */}

          {/* Item Funcionários com seta para direita */}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaUsers /> Funcionários
            </div>
            <FaChevronRight className={styles.menuArrow} />
          </li>

          {/* Item Financeiro com seta para direita */}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaMoneyBill /> Financeiro
            </div>
            <FaChevronRight className={styles.menuArrow} />
          </li>

          {/* Linha de separação (visual) */}
          <li className={styles.separator}></li> {/* Adicionado para a linha de separação */}

          {/* Item Configurações com seta para direita */}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaCog /> Configurações
            </div>
            <FaChevronRight className={styles.menuArrow} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;