import { useState } from 'react';
import './App.css';
import { RELEASE_YEAR, TITLE } from './constants';
import MovieListPage from "./component/MovieListPage/MovieListPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:movieIdParam" element={<MovieListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
