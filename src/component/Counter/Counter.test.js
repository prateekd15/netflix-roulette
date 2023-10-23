import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("Should render with initial count", () => {
    const { getByText } = render(<Counter initialValue={5} />);
    const counterElement = getByText("Counter: 5");
    expect(counterElement).toBeInTheDocument();
  });

  it("Should increment the count when the increment button is clicked", () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText("+");

    fireEvent.click(incrementButton);

    const counterElement = getByText("Counter: 1");
    expect(counterElement).toBeInTheDocument();
  });

  it("Should decrement the count when the decrement button is clicked", () => {
    const { getByText } = render(<Counter initialValue={3} />);
    const decrementButton = getByText("-");

    fireEvent.click(decrementButton);

    const counterElement = getByText("Counter: 2");
    expect(counterElement).toBeInTheDocument();
  });
});
