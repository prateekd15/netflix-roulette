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
    LIMIT,
    EDIT_MOVIE,
    EDIT_MOVIE_MESSAGE
} from '../../constants';
import MovieDetails from "../MovieDetails/MovieDetails";
import { BASE_URL, MOVIES_URL } from "../../utils/urls";
import { useSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom';
import AddMovie from "../AddMovie/AddMovie";
import UpdateMovie from "../UpdateMovie/UpdateMovie";
import MessageModal from "../MessageModal/MessageModal";

function MovieListPage({ }) {

    const sortFilters = [RELEASE_YEAR, TITLE];

    const [isAddMovieDialogVisible, setIsAddMovieDialogVisible] = useState(false);
    const [isEditMovieDialogVisible, setIsEditMovieDialogVisible] = useState(false);
    const [isEditSuccessMessageVisible, setIsEditSuccessMessageVisible] = useState(false);

    const [movieToEdit, setMovieToEdit] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
    const [activeGenre, setActiveGenre] = useState(GENRES[0]);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    const [searchParams] = useSearchParams();
    const { movieIdParam, movieIdForEdit } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

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
        const movieId = (movie == null) ? null : movie.id;
        setSelectedMovie(movie);
        setParamsInURL('', movieId);

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

    function handleAddMovieDialogChange(state) {
        if (state) {
            setParamsInURL('new', null);
        } else {
            setParamsInURL('', null);
        }
        setIsAddMovieDialogVisible(state);
    }

    const handleEditSubmit = async (formData) => {
        try {
            const response = await axios.put('http://localhost:4000/movies', formData);
            const urlParams = new URLSearchParams(window.location.search);
            window.location.reload();
        } catch (error) {
            console.error('Error adding movie:', error);
        }
        setIsEditMovieDialogVisible(false);
        setIsEditSuccessMessageVisible(true);
        setTimeout(() => {
            setIsEditSuccessMessageVisible(false);
        }, 2000);
    };

    async function handleOnEditClick(movieId) {
        if(!location.pathname.includes("/edit")) {
            setParamsInURL(`${movieId}/edit`);
        }
        try {
            const response = await axios.get(`http://localhost:4000/movies/${movieId}`);
            setMovieToEdit(response.data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
        setIsEditMovieDialogVisible(true);
    }

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
            else if (location.pathname === '/new') {
                handleAddMovieDialogChange(true);
            } else if (movieIdForEdit) {
                handleOnEditClick(movieIdForEdit);
            }
        };

        fetchMovieDetails();
    }, [movieIdParam, movieIdForEdit]);

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
        let currentPath = location.pathname ? location.pathname : '';
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
                setParamsInURL(currentPath, movieIdParam);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [searchQuery, selectedFilter, activeGenre, offset]);

    //Used to set the currently selected movieId in the URL
    useEffect(() => {
        if (selectedMovie != null) {
            setParamsInURL('', selectedMovie.id)
        }
    }, [selectedMovie])

    function setParamsInURL(url, id) {
        const params = new URLSearchParams();
        if (searchQuery) params.set('query', searchQuery);
        if (activeGenre) params.set('genre', activeGenre);
        if (selectedFilter) params.set('sortBy', selectedFilter);
        params.set('offset', offset.toString());
        if (id) {
            navigate(`${url}/${id}?${params.toString()}`);
        } else {
            navigate(`${url}?${params.toString()}`);
        }
    }
    return (
        <>
            {selectedMovie == null ?
                <SearchForm onSearch={handleSearch} initialQuery={searchQuery} displayAddMovieDialog={handleAddMovieDialogChange} /> :
                <MovieDetails {...selectedMovie} onSearchSelect={handleSelectedMovie} />
            }
            {isAddMovieDialogVisible &&
                <AddMovie displayAddMovieDialog={handleAddMovieDialogChange} />
            }

            {isEditMovieDialogVisible && movieToEdit && (
                <UpdateMovie
                    initialMovieInfo={movieToEdit}
                    onClose={() => setIsEditMovieDialogVisible(false)}
                    onSubmit={handleEditSubmit}
                    title={EDIT_MOVIE}
                />
            )}
            {isEditSuccessMessageVisible && (
                <MessageModal message={EDIT_MOVIE_MESSAGE} />
            )}

            <div className='genre-sort-control'>
                <GenreSelect genres={GENRES} selectedGenre={activeGenre} onSelect={handleGenreSelect} />
                <SortControl sortFilters={sortFilters} selectedFilter={selectedFilter} onSelect={handleChangeSortFilter} />
            </div>
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
        </>
    );
}

export default MovieListPage;