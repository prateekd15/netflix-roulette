import { render, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

const genres = ["Action", "Adventure", "Comedy"];
const selectedGenre = "Adventure";

describe("GenreSelect", () => {
  it("renders genre buttons correctly", () => {
    const { getByText } = render(
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={() => {}} />
    );

    // Check if each genre button is rendered with its text
    genres.forEach((genre) => {
      const genreButton = getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it("applies the 'red' class to the selected genre button", () => {
    const { getByText } = render(
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={() => {}} />
    );

    // Find the selected genre button and check its class
    const selectedGenreButton = getByText(selectedGenre);
    expect(selectedGenreButton).toHaveClass("red");
  });

  it("calls the onSelect function when a genre button is clicked", () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
    );

    // Click a genre button and check if onSelect is called
    const genreToSelect = "Comedy";
    const genreButton = getByText(genreToSelect);
    fireEvent.click(genreButton);
    expect(onSelect).toHaveBeenCalledWith(genreToSelect);
  });
});
