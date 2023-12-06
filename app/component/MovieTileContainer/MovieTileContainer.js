import './MovieTileContainer.css';
import MovieTile from '../MovieTile/MovieTile';
import {
    NEXT_PAGE,
    PREVIOUS_PAGE } from '../../constants';

function MovieTileContainer({movieList, handleSelectedMovie, handleOnEditClick, handlePrevPage, handleNextPage}) {

    return (
        <div className='movie_list-movie-tile-container'>
            <div className='row'>
                {movieList.map((item) => {
                    return (
                        <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                            <MovieTile {...item} onSelect={handleSelectedMovie} onEditClick={handleOnEditClick} />
                        </div>)
                })};
            </div>
            <div className="movie-list-page_pagination_container">
                <button className="movie-list-page_load_button" onClick={handlePrevPage}>{PREVIOUS_PAGE}</button>
                <button className="movie-list-page_load_button" onClick={handleNextPage}>{NEXT_PAGE}</button>
            </div>
        </div>
    );
}

export default MovieTileContainer;