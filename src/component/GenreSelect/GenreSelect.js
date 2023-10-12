// GenreList.js
import React from 'react';
import './GenreSelect.css'; // Import your CSS file

function GenreSelect({ genres, selectedGenre, onSelect }) {
	const handleChange = (event) => {
		const selectedGenre = event.target.value;
		onSelect(selectedGenre);
	};

	const genreButtons = genres.map((genre) => {
		const buttonClass = `${genre === selectedGenre ? 'red' : 'white'}`;
		return (
			<button
				key={genre}
				className={buttonClass}
				onClick={() => onSelect(genre)}
			>
				{genre}
			</button>
		);
	});

	return <div className="genre-container">{genreButtons}</div>;
}


export default GenreSelect;
