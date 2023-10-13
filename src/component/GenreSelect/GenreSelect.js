import React from 'react';
import './GenreSelect.css';
import GenreButton from '../GenreButton/GenreButton'

function GenreSelect({ genres, selectedGenre, onSelect }) {
	
	const genreButtons = genres.map((genre) => {
		const buttonClass = `${genre === selectedGenre ? 'red' : 'white'}`;
		return <GenreButton genre={genre} buttonClass={buttonClass} onSelect={onSelect} />
	});

	return <div className="genre-container">{genreButtons}</div>;
}


export default GenreSelect;
