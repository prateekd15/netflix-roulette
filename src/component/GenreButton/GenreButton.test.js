import { render, fireEvent } from "@testing-library/react";
import GenreButton from "./GenreButton";

describe("GenreButton", () => {
  it("renders the button with the correct class and label", () => {
    const genre = "Action";
    const buttonClass = "red";

    const { getByText, getByRole } = render(
      <GenreButton genre={genre} buttonClass={buttonClass} onSelect={() => {}} />
    );

    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("red");
    expect(getByText("Action")).toBeInTheDocument();
  });

  it("calls the onSelect function when the button is clicked", () => {
    const genre = "Adventure";
    const onSelect = jest.fn();

    const { getByText } = render(
      <GenreButton genre={genre} buttonClass="white" onSelect={onSelect} />
    );

    const buttonElement = getByText("Adventure");
    fireEvent.click(buttonElement);
    expect(onSelect).toHaveBeenCalledWith("Adventure");
  });
});
