import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST-APP", () => {
  test("renders learn react link", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

    const HelloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/Enter the text/i);
    expect(HelloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
 });
    test("render data", async() => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();

      const HelloWorldElement = await screen.findByText(/data/i , {} , {timeout: 3000});
      expect(HelloWorldElement).toBeInTheDocument();
    });
 
});
