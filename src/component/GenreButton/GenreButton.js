import styles from './GenreButton.module.css';

const GenreButton = ({ genre, buttonClass, onSelect }) => {

    return (
        <button
            key={genre}
            className={buttonClass === "red" ? styles.red : styles.white}
            onClick={() => onSelect(genre)}
        >
            {genre}
        </button>
    ); 
}

export default GenreButton;