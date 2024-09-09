import { render, screen } from "@testing-library/react";
import App from "./App";

describe("testa o componente App", () => {
  test("Deve haver um título na página", async () => {
    render(<App />);

    const title = await screen.findByRole("heading");

    expect(title).toBeInTheDocument();
  });

  test("Deve haver um título escrito 'Hello World!'", async () => {
    render(<App />);

    const title = await screen.findByRole("heading");

    expect(title.textContent).toBe("Hello World!");
  });
});
