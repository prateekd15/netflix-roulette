import React from 'react';
import './GenreSelect.css';
import GenreButton from '../GenreButton/GenreButton'

function GenreSelect({ genres, selectedGenre, onSelect }) {
	
	const genreButtons = genres.map((genre) => {
		const buttonClass = `${genre === selectedGenre ? 'red' : 'white'}`;
		return <GenreButton key={genre} genre={genre} buttonClass={buttonClass} onSelect={() => onSelect(genre)} />
	});

	return <div className="genre-container">{genreButtons}</div>;
}


export default GenreSelect;
