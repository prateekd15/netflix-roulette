import './MovieTile.css';
import MenuButton from '../MenuButton/MenuButton';

function MovieTile({ imageUrl, movieName, releaseYear, genres, duration, rating, description, onSelect, id}) {
  console.log("Started rendering movie tile component");
  const commaSeparatedList = genres.join(', ');
  
  function handleOnClick() {
    onSelect(id);
  }

  return (
    <div className='movie-tile_outer-container'>
      <MenuButton {...{imageUrl, movieName, releaseYear, genres, duration, rating, description, onSelect, id}}/>
      <div className='tile-container' onClick={handleOnClick}>
        <img src={imageUrl} alt={movieName} className='poster' />
        <div className='info-container'>
          <div className='title-row'>
            <span className='title'>{movieName}</span>
            <div className='release-year'>{releaseYear}</div>
          </div>
          <span className='genres'>{commaSeparatedList}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieTile;
