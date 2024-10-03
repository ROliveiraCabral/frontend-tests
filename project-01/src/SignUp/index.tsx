import { useNavigate } from "react-router-dom";
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
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="insira seu nome" />
        <input type="text" placeholder="insira seu email" />
        <input type="text" placeholder="insira sua senha" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};
