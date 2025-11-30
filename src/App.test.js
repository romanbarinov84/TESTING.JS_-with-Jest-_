import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("TEST-APP", () => {
  test("renders learn react link", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

    const HelloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");


    
    expect(HelloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Enter the text/i);
    expect(input).toBeInTheDocument();
  });


  test("render data", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

    const HelloWorldElement = await screen.findByText(
      /data/i,
      {},
      { timeout: 3000 }
    );
    expect(HelloWorldElement).toBeInTheDocument();
  });
  test("click-event", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

    const input = screen.getByPlaceholderText(/Enter the text/i);
    expect(screen.queryByTestId("value-input")).toContainHTML("");
    fireEvent.input(input,{
      target:{value:"12345432"}
    })
    expect(screen.queryByTestId("value-input")).toContainHTML("12345432");

    const BTN = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-app")).toBeNull();
    fireEvent.click(BTN);
    expect(screen.getByTestId("toggle-app")).toBeInTheDocument();
    fireEvent.click(BTN);
    expect(screen.queryByTestId("toggle-app")).toBeNull();
  });
});
