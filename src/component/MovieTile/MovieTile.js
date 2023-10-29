import './MovieTile.css';

function MovieTile({ imageUrl, movieName, releaseYear, genres }) {
  const commaSeparatedList = genres.join(', ');

  return (
    <div className='tile-container'>
      <img src={imageUrl} alt={movieName} className='poster' />
      <div className='info-container'>
        <div className='title-row'>
          <span className='title'>{movieName}</span>
          <div className='release-year'>{releaseYear}</div>
        </div>
        <span className='genres'>{commaSeparatedList}</span>
      </div>
    </div>
  );
}

export default MovieTile;
