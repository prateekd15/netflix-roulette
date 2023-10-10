// GenreList.js
import React from 'react';
import './GenreSelect.css'; // Import your CSS file

function GenreSelect({ genres, selectedGenre, onSelect }) {
	const handleChange = (event) => {
		const selectedGenre = event.target.value;
		onSelect(selectedGenre);
	  };
	  
	return (
    <div className="outer-genre">
		<label class="select">
			<select
				id="genre-select"
				onChange={handleChange}>
					<option value="" disabled>Select Genre</option>
					{genres.map((genre) => (
					<option key={genre} value={genre}>
						{genre}
					</option>
				))}
			</select>
		</label>
    </div>
  );
}

export default GenreSelect;
