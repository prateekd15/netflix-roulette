import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("renders with a default input value", () => {
    const { getByPlaceholderText } = render(<SearchForm initialQuery="Movie name 1" />);
    const inputElement = getByPlaceholderText("What do you want to watch?");
    expect(inputElement.value).toBe("Movie name 1");
  });

  it("Should call the onSearch function when the search button is clicked", () => {
    const onSearch = jest.fn();
    const { getByText } = render(<SearchForm initialQuery="" onSearch={onSearch} />);
    const buttonElement = getByText("SEARCH");
    fireEvent.click(buttonElement);
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("Should call the onSearch function when Enter key is pressed", () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchForm initialQuery="" onSearch={onSearch} />);
    const inputElement = getByPlaceholderText("What do you want to watch?");
    fireEvent.change(inputElement, { target: { value: "Movie name 1" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("Should update the searchTerm state when input value changes", () => {
    const { getByPlaceholderText } = render(<SearchForm initialQuery="" onSearch={() => {}} />);
    const inputElement = getByPlaceholderText("What do you want to watch?");
    fireEvent.change(inputElement, { target: { value: "Movie name 1" } });
    expect(inputElement.value).toBe("Movie name 1");
  });
});
