import { FormEvent } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Insira seu email" />
        <input type="password" name="password" placeholder="Insira sua senha" />
        <button>Entrar</button>
      </form>
    </div>
  );
};
