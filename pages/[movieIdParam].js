import React from 'react';
import MovieListPage from '../src/component/MovieListPage/MovieListPage';
import axios from 'axios';
import { LIMIT, RELEASE_DATE_FILTER } from '../src/constants';
import { BASE_URL, MOVIES_URL } from "../src/utils/urls";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsPage = ({initialSelectedMovie, initialMovieList}) => {
  return (
      <MovieListPage initialSelectedMovie={initialSelectedMovie} initialMovieList={initialMovieList}/>
  );
};

export default DetailsPage;

export async function getServerSideProps(context) {
    const { movieIdParam } = context.params;
    let initialSelectedMovie;
    try {
        const response = await axios.get(`http://localhost:4000/movies/${movieIdParam}`);
        // console.log("response ",response)
        initialSelectedMovie = response.data;
        console.log("initialSelectedMovie  ",initialSelectedMovie)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
    let initialMovieList;
    try {
        const params = {
            searchBy: 'genres',
            offset: 0,
            limit: LIMIT,
            sortBy: RELEASE_DATE_FILTER,
            sortOrder: 'desc'
        };
        const response = await axios.get(BASE_URL + MOVIES_URL, {
            params
        });
        initialMovieList = response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return {
      props: {
        initialSelectedMovie,
        initialMovieList
      },
    };
  }