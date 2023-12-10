import styles from './MovieTile.module.css';
import MenuButton from '../MenuButton/MenuButton';

function MovieTile(props) {
  const { poster_path, 
    title, 
    release_date, 
    genres, 
    runtime, 
    vote_average, 
    overview, 
    onSelect, 
    id, 
    onEditClick } = props;

  const commaSeparatedList = genres? genres.join(', ') : null;
  const year = release_date.split('-')[0];
  return (
    <>
    <MenuButton {...{ id, poster_path, title, release_date, genres, runtime, vote_average, overview, onEditClick }} />
      <div className={styles.tile_container} onClick={() => onSelect(props)}>
        <img src={poster_path} alt={title} className={styles.poster} onError={(event) => { event.target.src = "/images/default_movie_poster.png" }} />
        <div className={styles.info_container}>
          <div className={styles.title_row}>
            <span className={styles.title}>{title}</span>
            <div className={styles.release_year}>{year}</div>
          </div>
          <span className={styles.genres}>{commaSeparatedList}</span>
        </div>
      </div>
    </>
  );
}

export default MovieTile;
