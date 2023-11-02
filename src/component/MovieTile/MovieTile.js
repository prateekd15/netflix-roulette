import './MovieTile.css';
import MenuButton from '../MenuButton/MenuButton';

function MovieTile({ imageUrl, movieName, releaseYear, genres, onSelect, id}) {
  console.log("Started rendering movie tile component");
  const commaSeparatedList = genres.join(', ');
  
  function handleOnClick() {
    onSelect(id);
  }

  return (
    <div className='card'>
      <MenuButton />
      <div className='py-1' onClick={handleOnClick}>
        <img src={imageUrl} alt={movieName} className='poster sm:w-96 md:w-80 lg:w-72' />
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
