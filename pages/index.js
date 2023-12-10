import React from 'react';
import MovieListPage from '../src/component/MovieListPage/MovieListPage';
import Counter from '../src/component/Counter/Counter'
import { LIMIT, RELEASE_DATE_FILTER } from '../src/constants';
import { BASE_URL, MOVIES_URL } from "../src/utils/urls";
import axios from 'axios';

function HomePage({initialMovieList}) {
  return (
     <MovieListPage initialMovieList={initialMovieList}/>
  );
};

export default HomePage;

export async function getServerSideProps() {
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
      initialMovieList
    },
  };
}