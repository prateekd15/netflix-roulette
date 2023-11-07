import { useState } from "react";
import "./SearchForm.css";
import searchImage from '../../assets/searchbox.png'
import AddMovie from '../AddMovie/AddMovie'
import { createPortal } from 'react-dom';

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
		<div className="search-form_container">
			<div className="bg-image">
				<img src={searchImage} alt='search background image' className='search-form_image' />
			</div>
			<div id="search-form_add-movie_div" className="search-form_add-movie">
				<AddMovie />
			</div>
			<div className="search-form">
				<input
					className="search-form-input"
					type="text"
					placeholder="What do you want to watch?"
					defaultValue={initialQuery}
					onKeyDown={handleKeyDown}
					onChange={handleInputValueChange}
				/>
				<button type="submit" onClick={search} className="search-form__button">SEARCH</button>
			</div>
		</div>
	);
};

export default SearchForm;