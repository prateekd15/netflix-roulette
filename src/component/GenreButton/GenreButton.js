import './GenreButton.css';

const GenreButton = ({ genre, buttonClass, onSelect }) => {

    return (
        <button
            key={genre}
            className={buttonClass}
            onClick={() => onSelect(genre)}
        >
            {genre}
        </button>
    ); 
}

export default GenreButton;