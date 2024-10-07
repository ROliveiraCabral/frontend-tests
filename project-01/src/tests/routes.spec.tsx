import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainRoutes } from "../routes";

describe("testa o componente MainRoutes", () => {
  test("Deve renderizar a página de login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByText("Login");

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página de Dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByText("Dashboard");

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página de SignUp", async () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByText("Cadastre-se");

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página Not Found", async () => {
    render(
      <MemoryRouter initialEntries={["/qualquer"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByText("404 Page Not Found");

    expect(title).toBeInTheDocument();
  });
});
