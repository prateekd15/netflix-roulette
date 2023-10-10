import React from "react";
import "./SearchForm.css";

const SearchForm = ({ searchTerm, onSearch }) => {
	const handleInputChange = (e) => {
		onSearch(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			onSearch(searchTerm);
			console.log("Searched movie:", searchTerm);
		}
	};

	return (
		<div className="search-form">
			<input
				className="search-form-input"
				type="text"
				placeholder="What do you want to watch?"
				value={searchTerm}
				onKeyDown={handleKeyDown}
			/>
			<button type="submit" onClick={handleInputChange}>SEARCH</button>
		</div>
	);
};

export default SearchForm;