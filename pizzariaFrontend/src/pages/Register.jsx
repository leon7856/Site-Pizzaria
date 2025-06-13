import React from 'react';
import styles from '../styles/Register.module.css';
import logoImage from '../assets/LogoPizzaria.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className={styles.registerPageWrapper}>
      <div className={styles.registerContainer}>
        <div className={styles.imageSection}>
  
        </div>

        <div className={styles.formSection}>
          <div className={styles.logoContainer}>
            <img src={logoImage} alt="Vila di Napoli Pizzeria Logo" className={styles.logo} />
          </div>

          <h2 className={styles.welcomeText}>Crie sua conta gratuita</h2>
          <p className={styles.subtext}>Sua conta saborosa começa aqui!</p>

          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Seu nome completo"
            className={styles.inputField}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            className={styles.inputField}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Crie uma senha"
            className={styles.inputField}
          />

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            className={styles.inputField}
          />

          <button className={styles.registerBtn}>Criar Conta</button>
     
          <p className={styles.loginLink}>
            Já tem uma conta? <Link to="/login" className={styles.loginLinkAnchor}>Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;