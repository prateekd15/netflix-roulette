import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ initialQuery, onSearch }) => {
	const [searchTerm, setSearchTerm] = useState(initialQuery);

	const search = (event) => {
		onSearch(searchTerm);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			onSearch(searchTerm);
		}
	};

	const handleInputValueChange = (event) => {
		setSearchTerm(event.target.value);
	  };

	return (
		<div className="search-form">
			<input
				className="search-form-input"
				type="text"
				placeholder="What do you want to watch?"
				defaultValue={initialQuery}
				onKeyDown={handleKeyDown}
				onChange={handleInputValueChange}
			/>
			<button type="submit" onClick={search}>SEARCH</button>
		</div>
	);
};

export default SearchForm;