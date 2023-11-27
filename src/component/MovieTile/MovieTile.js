import './MovieTile.css';
import MenuButton from '../MenuButton/MenuButton';
import defaultPoser from '../../assets/default_movie_poster.jpg';

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
    <div className='movie-tile_outer-container'>
    <MenuButton {...{ id, poster_path, title, release_date, genres, runtime, vote_average, overview, onEditClick }} />
      <div className='tile-container' onClick={() => onSelect(props)}>
        <img src={poster_path} alt={title} className='poster' onError={(event) => { event.target.src = defaultPoser }} />
        <div className='info-container'>
          <div className='title-row'>
            <span className='title'>{title}</span>
            <div className='release-year'>{year}</div>
          </div>
          <span className='genres'>{commaSeparatedList}</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default MovieTile;
