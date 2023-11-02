import './MovieDetails.css';
import searchLogo from '../../assets/search_logo.png';

function MovieDetails(props) {
    const commaSeparatedList = props.genres.join(', ');

    return (
        <div className = 'movie-details_outer-container'>
            <div className='movie-details_title-row px-5'>
                <span className='movie-details_title'>netflixroulette</span>
                <img src={searchLogo} alt='Search Logo'/>
            </div>
            <div className='movie-details_inner flex flex-col md:flex-row'>
                <img src={props.imageUrl} alt={props.movieName} className='px-5 sm:w-96' />
                <div className='w-full pr-5 px-5 mt-5 lg:mt-0'>
                    <div className='movie-details_row'>
                        <span className='movie-details_details-title lg:text-4xl text-xl'>{props.movieName}</span>
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