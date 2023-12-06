import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

function setUp(props) {
  return render(<SearchForm {...props} />);
}

describe("SearchForm", () => {

  it("renders with a default input value", () => {
    const { getByPlaceholderText } = setUp({initialQuery: "Movie name 1"});
    const inputElement = getByPlaceholderText("What do you want to watch?");
    expect(inputElement.value).toBe("Movie name 1");
  });

  it("Should call the onSearch function when the search button is clicked", () => {
    const onSearch = jest.fn();
    const { getByText } = setUp({initialQuery: "", onSearch});
    const buttonElement = getByText("SEARCH");
    fireEvent.click(buttonElement);
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("Should call the onSearch function when Enter key is pressed", () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = setUp({initialQuery: "", onSearch});
    const inputElement = getByPlaceholderText("What do you want to watch?");
    fireEvent.change(inputElement, { target: { value: "Movie name 1" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("Should update the searchTerm state when input value changes", () => {
    const { getByPlaceholderText } = setUp({initialQuery: ""});
    const inputElement = getByPlaceholderText("What do you want to watch?");
    fireEvent.change(inputElement, { target: { value: "Movie name 1" } });
    expect(inputElement.value).toBe("Movie name 1");
  });
});
