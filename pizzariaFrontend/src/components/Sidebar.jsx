import styles from "../styles/Sidebar.module.css";
import { FaChartBar, FaPizzaSlice, FaUsers, FaMoneyBill, FaCog, FaChevronDown, FaChevronRight } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        VILA DY <span>NAPOLLI</span>
        <span className={styles.logoPizzeria}>PIZZARIA</span> {}
      </div>
      <nav>
        <ul>
          {}
          <li className={`${styles.menuItem} ${styles.active}`}> {}
            <div className={styles.menuItemContent}>
              <FaChartBar /> Dashboard
            </div>
            <FaChevronDown className={styles.menuArrow} />
          </li>

          {}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaPizzaSlice /> Gestão de Pedidos
            </div>
            <FaChevronDown className={styles.menuArrow} />
          </li>

          {}
          <li className={styles.menuItem}>
            <FaPizzaSlice /> Cardápio
          </li>

          {}
          <li className={styles.separator}></li> {}

          {}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaUsers /> Funcionários
            </div>
            <FaChevronRight className={styles.menuArrow} />
          </li>

          {}
          <li className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaMoneyBill /> Financeiro
            </div>
            <FaChevronRight className={styles.menuArrow} />
          </li>

          {}
          <li className={styles.separator}></li> {}

          {}
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