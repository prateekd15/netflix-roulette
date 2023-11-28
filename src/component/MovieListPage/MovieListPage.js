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
    LIMIT
} from '../../constants';
import MovieDetails from "../MovieDetails/MovieDetails";
import { BASE_URL, MOVIES_URL } from "../../utils/urls";
import { useSearchParams, useParams } from 'react-router-dom';
import { setParamsInURL } from '../../utils/Utils';

function MovieListPage({ }) {

    const sortFilters = [RELEASE_YEAR, TITLE];

    const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
    const [activeGenre, setActiveGenre] = useState(GENRES[0]);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    const [searchParams] = useSearchParams();
    const { movieIdParam } = useParams();

    //Used to fetch movieId from the url and if present, render MovieDetails with the corresponding movie
    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (movieIdParam) {
                try {
                    const response = await axios.get(`http://localhost:4000/movies/${movieIdParam}`);
                    setSelectedMovie(response.data);
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    setSelectedMovie(null);
                }
            }
        };

        fetchMovieDetails();
    }, [movieIdParam]);

    //Used to fetch the queryParams from the URL
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        setSearchQuery(params.get('query') || '');
        setActiveGenre(params.get('genre') || GENRES[0]);
        setSelectedFilter(params.get('sortBy') || sortFilters[0]);
        setOffset(parseInt(params.get('offset')) || 0);
    }, [searchParams]);

    //Used to fetch movies based on default params if queryparams and movieId are absent 
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
                setParamsInURL(movieIdParam, searchQuery, activeGenre, selectedFilter, offset);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [searchQuery, selectedFilter, activeGenre, offset]);

    //Used to set the currently selected movieId in the URL
    useEffect(() => {
        if(selectedMovie != null) {
            setParamsInURL(selectedMovie.id, searchQuery, activeGenre, selectedFilter, offset)
        }
    }, [selectedMovie])

    function handleGenreSelect(selectedGenre) {
        setSearchQuery(null);
        setActiveGenre(selectedGenre);
        setOffset(0);
    }

    function handleChangeSortFilter(filter) {
        console.log("Called MovieListPage handleChangeSortFilter with value " + filter);
        setSearchQuery(null);
        setSelectedFilter(filter);
        setOffset(0);
    }

    const handleSelectedMovie = (movie) => {
        const movieId = (movie == null) ? null : movie.id;
        setParamsInURL(movieId, searchQuery, activeGenre, selectedFilter, offset);
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

    return (
        <>
            {selectedMovie == null ?
                <SearchForm onSearch={handleSearch} /> :
                <MovieDetails {...selectedMovie} onSearchSelect={handleSelectedMovie} />
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