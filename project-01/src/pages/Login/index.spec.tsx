import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./index";

const navigateMock = vi.fn();

describe("testa o componente de login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("deve haver um título escrito Login", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", { name: "Login" });

    expect(title).toBeInTheDocument();
  });

  test("Devem haver dois inputs na tela", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(1);
  });

  test("Deve haver um botão na minha tela", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    expect(button.textContent).toBe("Entrar");
  });

  test("Deve haver um input para email", async () => {
    render(<Login />);

    const inputEmail = await screen.findByPlaceholderText("Insira seu email");

    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve haver um input para senha", async () => {
    render(<Login />);

    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver um input para senha", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para a página de signup", async () => {
    render(<Login />);

    const link = await screen.getByText("Não tem cadastro? Clique aqui.");

    expect(link).toBeInTheDocument();
  });
});
