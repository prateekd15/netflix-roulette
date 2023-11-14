import "./MovieListPage.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from "../SearchForm/SearchForm";
import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import { RELEASE_YEAR, TITLE, GENRES, TITLE_FILTER, RELEASE_YEAR_FILTER } from '../../constants';
import MovieDetails from "../MovieDetails/MovieDetails";

function MovieListPage({ }) {

    const sortFilters = [RELEASE_YEAR, TITLE];

    const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
    const [activeGenre, setActiveGenre] = useState(GENRES[0]);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const limit = 12;
    const [totalAmount, setTotalAmount] = useState(0)

    function handleGenreSelect(selectedGenre) {
        setActiveGenre(selectedGenre);

        //TODO write code to make API call based on selected genre.
        //Set the result in the below method
        // setMovieList(movies);
    }

    function handleChangeSortFilter(filter) {
        console.log("Selected Filter "+ filter);
        setSelectedFilter(filter);
    }

    const handleSelectedMovie = (movie) => {
        setSelectedMovie(movie);
    }

    const handleSearch = (searchedMovie) => {
        setSearchQuery(searchedMovie);

    }

    useEffect(() => {
        console.log('use effect triggered');
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                const params = {
                    search: searchQuery,
                    searchBy: searchQuery ? 'title' : 'genres',
                    offset: offset,
                    limit: limit,
                    sortBy: selectedFilter === RELEASE_YEAR ? RELEASE_YEAR_FILTER : TITLE_FILTER,
                    sortOrder: 'asc',
                    filter: searchQuery ? null : activeGenre,
                };
                console.log("calling backend to get data");
                const response = await axios.get('http://localhost:4000/movies', {
                    params,
                    signal,
                });
                console.log('params:', params);
                console.log('response:', response);

                setMovieList(response.data.data);
                setTotalAmount(response.data.totalAmount);
                console.log('totalAmount' + totalAmount);
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
                <MovieDetails {...selectedMovie}/>
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
            </div>
        </>
    );
}

export default MovieListPage;