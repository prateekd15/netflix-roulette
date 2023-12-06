import { render, fireEvent } from "@testing-library/react";
import GenreButton from "./GenreButton";

function setUp(props) {
  return render(<GenreButton {...props} />);
}

describe("GenreButton", () => {
  it("renders the button with the correct class and label", () => {
    const genre = "Action";
    const buttonClass = "red";

    const { getByText, getByRole } = setUp({genre, buttonClass});

    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("red");
    expect(getByText("Action"));
  });

  it("calls the onSelect function when the button is clicked", () => {
    const genre = "Adventure";
    const onSelect = jest.fn();

    const { getByText } = setUp({genre, buttonClass: "white", onSelect});

    const buttonElement = getByText("Adventure");
    fireEvent.click(buttonElement);
    expect(onSelect).toHaveBeenCalledWith("Adventure");
  });
});
