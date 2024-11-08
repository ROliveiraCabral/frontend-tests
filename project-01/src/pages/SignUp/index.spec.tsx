import { fireEvent, render, screen } from "@testing-library/react";
import { SignUp } from "./index";

const navigateMock = vi.fn();

describe("Testa meu componente SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Devem haver 3 inputs na minha tela", async () => {
    render(<SignUp />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("devem haver inputs para nome, email, senha", async () => {
    render(<SignUp />);

    const inputName = await screen.findByPlaceholderText("insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("insira seu email");
    const inputPassword = await screen.findByPlaceholderText(
      "insira sua senha"
    );

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver um botão na tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sign Up");
  });

  test("Deve haver um título cadastre-se", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", { level: 2 });

    expect(title).toHaveTextContent("Cadastre-se");
  });

  test("Deve navegar para a minha página de dashboard", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para a página de login", async () => {
    render(<SignUp />);

    const link = await screen.findByText("Já tem cadastro? Clique aqui.");

    expect(link).toBeInTheDocument();
  });
});
