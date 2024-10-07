import { useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { FormEvent } from "react";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input type="text" placeholder="insira seu nome" />
        <input type="text" placeholder="insira seu email" />
        <input type="text" placeholder="insira sua senha" />
        <button>Sign Up</button>
        <Link to="/">Já tem cadastro? Clique aqui.</Link>
      </form>
    </div>
  );
};
