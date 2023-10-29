import './MovieDetails.css';
import searchLogo from '../../assets/search_logo.png';

function MovieDetails(props) {
    const commaSeparatedList = props.genres.join(', ');

    return (
        <div className = 'movie-details_outer-container'>
            <div className='movie-details_title-row'>
                <span className='movie-details_title'>netflixroulette</span>
                <img src={searchLogo} alt='Search Logo'/>
            </div>
            <div className='movie-details_inner'>
                <img src={props.imageUrl} alt={props.movieName} className='movie-details_poster' />
                <div className='movie-details_info-container'>
                    <div className='movie-details_row'>
                        <span className='movie-details_details-title'>{props.movieName}</span>
                        <div className='movie-details_rating-year-container'>
                            <span className='movie-details_rating-year'> {props.rating} </span>
                        </div>
                    </div>
                    <span className='movie-details_genres'>{commaSeparatedList}</span>
                    <div className='movie-details_row movie-details_release-year-row'>
                        <span className='movie-details_duration'>{props.releaseYear}</span>
                        <span className='movie-details_release-year'> {props.duration} </span>
                    </div>
                    <p className='movie-details_description'>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;