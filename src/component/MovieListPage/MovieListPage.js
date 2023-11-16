import "./MovieListPage.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from "../SearchForm/SearchForm";
import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import { 
    RELEASE_YEAR, 
    TITLE, 
    GENRES, 
    TITLE_FILTER, 
    RELEASE_DATE_FILTER, 
    ALL, 
    NEXT_PAGE, 
    PREVIOUS_PAGE, 
    LIMIT } from '../../constants';
import MovieDetails from "../MovieDetails/MovieDetails";
import { BASE_URL, MOVIES_URL } from "../../utils/urls";

function MovieListPage({ }) {

    const sortFilters = [RELEASE_YEAR, TITLE];

    const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
    const [activeGenre, setActiveGenre] = useState(GENRES[0]);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    function handleGenreSelect(selectedGenre) {
        setSearchQuery(null);
        setActiveGenre(selectedGenre);
        setOffset(0);
    }

    function handleChangeSortFilter(filter) {
        setSearchQuery(null);
        setSelectedFilter(filter);
        setOffset(0);
    }

    const handleSelectedMovie = (movie) => {
        setSelectedMovie(movie);
    }

    const handleSearch = (searchedMovie) => {
        setSearchQuery(searchedMovie);
        setActiveGenre(null);
        setOffset(0);
    }

    const handleNextPage = () => {
        setOffset(offset + LIMIT);
      };
    
      const handlePrevPage = () => {
        if (offset >= LIMIT) {
          setOffset(offset - LIMIT);
        }
      };

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                const params = {
                    search: searchQuery,
                    searchBy: searchQuery ? 'title' : 'genres',
                    offset: offset,
                    limit: LIMIT,
                    sortBy: selectedFilter === RELEASE_YEAR ? RELEASE_DATE_FILTER : TITLE_FILTER,
                    sortOrder: 'desc',
                    filter: searchQuery ? null : (activeGenre === ALL ? null : activeGenre),
                };
                const response = await axios.get(BASE_URL + MOVIES_URL, {
                    params,
                    signal,
                });

                setMovieList(response.data.data);
                setTotalAmount(response.data.totalAmount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [searchQuery, selectedFilter, activeGenre, offset]);

    return (
        <>  
            {selectedMovie == null ? 
                <SearchForm onSearch={handleSearch} /> :
                <MovieDetails {...selectedMovie} onSearchSelect={handleSelectedMovie}/>
            }
            
            <div className='genre-sort-control'>
                <GenreSelect genres={GENRES} selectedGenre={activeGenre} onSelect={handleGenreSelect} />
                <SortControl sortFilters={sortFilters} selectedFilter={selectedFilter} onSelect={handleChangeSortFilter} />
            </div>
            <div className='movie_list-movie-tile-container'>
                <div className='row'>
                    {movieList.map((item) => {
                        return (
                            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                                <MovieTile {...item} onSelect={handleSelectedMovie} />
                            </div>)
                    })};
                </div>
                <div className="movie-list-page_pagination_container">
                    <button className="movie-list-page_load_button" onClick={handlePrevPage}>{PREVIOUS_PAGE}</button>
                    <button className="movie-list-page_load_button" onClick={handleNextPage}>{NEXT_PAGE}</button>
                </div>
            </div>
        </>
    );
}

export default MovieListPage;