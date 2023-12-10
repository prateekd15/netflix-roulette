import React from 'react';
import styles from './GenreSelect.module.css';
import GenreButton from '../GenreButton/GenreButton'

function GenreSelect({ genres, selectedGenre, onSelect }) {
	
	const genreButtons = genres.map((genre) => {
		const buttonClass = `${genre === selectedGenre ? 'red' : 'white'}`;
		return <GenreButton key={genre} genre={genre} buttonClass={buttonClass} onSelect={() => onSelect(genre)} />
	});

	return <div className={styles.genre_container}>{genreButtons}</div>;
}


export default GenreSelect;
