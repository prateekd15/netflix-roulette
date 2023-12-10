import styles from "./MovieListPage.module.css";
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
import { useRouter } from 'next/router';
import AddMovie from "../AddMovie/AddMovie";
import UpdateMovie from "../UpdateMovie/UpdateMovie";
import MessageModal from "../MessageModal/MessageModal";
import MovieTileContainer from "../MovieTileContainer/MovieTileContainer";

function MovieListPage({initialMovieList, initialSelectedMovie}) {

    const sortFilters = [RELEASE_YEAR, TITLE];

    const [isAddMovieDialogVisible, setIsAddMovieDialogVisible] = useState(false);
    const [isEditMovieDialogVisible, setIsEditMovieDialogVisible] = useState(false);
    const [isEditSuccessMessageVisible, setIsEditSuccessMessageVisible] = useState(false);

    const [movieToEdit, setMovieToEdit] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
    const [activeGenre, setActiveGenre] = useState(GENRES[0]);
    const [movieList, setMovieList] = useState(initialMovieList ?? []);
    const [selectedMovie, setSelectedMovie] = useState(initialSelectedMovie ??null);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    const router = useRouter();
    const { query } = router;
    const { movieIdParam, movieIdForEdit } = query;

    const canUpdateMovie = isEditMovieDialogVisible && movieToEdit
    
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
            else if (router.pathname === '/new') {
                handleAddMovieDialogChange(true);
            } else if (movieIdForEdit) {
                handleOnEditClick(movieIdForEdit);
            }
        };

        fetchMovieDetails();
    }, [movieIdParam, movieIdForEdit]);

    //Used to fetch the queryParams from the URL
    useEffect(() => {
        const params = new URLSearchParams(query);
        setSearchQuery(params.get('query') || '');
        setActiveGenre(params.get('genre') || GENRES[0]);
        setSelectedFilter(params.get('sortBy') || sortFilters[0]);
        setOffset(parseInt(params.get('offset')) || 0);
    }, [query]);

    //Used to fetch movies based on default params if queryparams and movieId are absent 
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        let currentPath = router.pathname ? router.pathname : '';
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
                console.log("Logging fetched data: ", response.data)
                setMovieList(response.data.data);
                setTotalAmount(response.data.totalAmount);
              
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
        console.log("called handleSelectedMovie method with movie as: ", movie);
        const movieId = (movie == null) ? null : movie.id;
        setSelectedMovie(movie);
        setParamsInURL('/', movieId);

    }

    function handleAddMovieDialogChange(state) {
        if (state && !router.pathname === "/new") {
            setParamsInURL('new', null);
        } else {
            setParamsInURL('/', null);
        }
        setIsAddMovieDialogVisible(state);
    }

    const handleEditSubmit = async (formData) => {
        try {
            const response = await axios.put('http://localhost:4000/movies', formData);
        } catch (error) {
            console.error('Error adding movie:', error);
        }
        closeEditDialog();
        setIsEditSuccessMessageVisible(true);
        setTimeout(() => {
            setIsEditSuccessMessageVisible(false);
        }, 2000);
    };

    async function handleOnEditClick(movieId) {
        if(!router.pathname === "edit") {
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

    function closeEditDialog() {
        setIsEditMovieDialogVisible(false);
        setMovieToEdit(null);
        setParamsInURL('/', null)
    }

    function setParamsInURL(url, id) {
        const params = new URLSearchParams();
        if (searchQuery) params.set('query', searchQuery);
        if (activeGenre) params.set('genre', activeGenre);
        if (selectedFilter) params.set('sortBy', selectedFilter);
        params.set('offset', offset.toString());
        console.log("Generated URL after setparamsInUrl method: ", url, params);
        if (id) {
            router.push(`${url}/${id}?${params.toString()}`);
        } else {
            router.push(`${url}?${params.toString()}`);
        }
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
        <div>
            {selectedMovie == null ?
                <SearchForm onSearch={handleSearch} initialQuery={searchQuery} displayAddMovieDialog={handleAddMovieDialogChange} /> :
                <MovieDetails {...selectedMovie} onSearchSelect={handleSelectedMovie} />
            }
            {isAddMovieDialogVisible &&
                <AddMovie displayAddMovieDialog={handleAddMovieDialogChange} />
            }

            {canUpdateMovie && (
                <UpdateMovie
                    initialMovieInfo={movieToEdit}
                    onClose={() => closeEditDialog()}
                    onSubmit={handleEditSubmit}
                    title={EDIT_MOVIE}
                />
            )}
            {isEditSuccessMessageVisible && (
                <MessageModal message={EDIT_MOVIE_MESSAGE} />
            )}

            <div className={styles.genre_sort_control}>
                <GenreSelect genres={GENRES} selectedGenre={activeGenre} onSelect={handleGenreSelect} />
                <SortControl sortFilters={sortFilters} selectedFilter={selectedFilter} onSelect={handleChangeSortFilter} />
            </div>
            <MovieTileContainer 
                movieList={movieList}  
                handleSelectedMovie={handleSelectedMovie} 
                handleOnEditClick={handleOnEditClick}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage} />

        </div>
    );
}

export default MovieListPage;