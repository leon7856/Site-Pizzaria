import styles from '../styles/Login.module.css';
import logoImage from '../assets/LogoPizzaria.png';

function Login() {
  return (
    <div className={styles.loginPageWrapper}> 
      <div className={styles.loginContainer}>
        <div className={styles.imageSection}>
        </div>

        <div className={styles.formSection}>
          <div className={styles.logoContainer}>
            <img src={logoImage} alt="Vila di Napoli Pizzeria Logo" className={styles.logo} />
          </div>

          <h2 className={styles.welcomeText}>Olá novamente! 👋</h2>
          <p className={styles.subtext}>Seu pedido está a uma mordida de distância.</p>

          <label htmlFor="email">Email</label> 
          <input type="email" id="email" placeholder="Exemplo@email.com" className={styles.inputField} /> 

          <label htmlFor="password">Senha</label> 
          <input type="password" id="password" placeholder="Digite sua senha" className={styles.inputField} /> 

          <a href="#" className={styles.forgotPassword}>Esqueceu a Senha?</a> 

          <button className={styles.loginBtn}>Login</button>

          <div className={styles.orDivider}><span>Ou</span></div>

          <button className={styles.socialBtn}>
            <img src="/google-icon.png" alt="Ícone do Google" />
            Entrar com o Google
          </button>

          <button className={styles.socialBtn}>
            <img src="/facebook-icon.png" alt="Ícone do Facebook" />
            Entrar com o Facebook
          </button>

          <p className={styles.createAccount}>
            Não tem uma conta? <a href="/register">Criar Agora</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;