import { FormEvent } from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="Insira seu email" />
        <input type="password" name="password" placeholder="Insira sua senha" />
        <button>Entrar</button>
        <Link to="/signup">Não tem cadastro? Clique aqui.</Link>
      </form>
    </div>
  );
};
