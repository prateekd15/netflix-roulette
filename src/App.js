import { useState } from 'react';
import './App.css';
import { RELEASE_YEAR, TITLE } from './constants';
import MovieListPage from "./component/MovieListPage/MovieListPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './component/AddMovie/AddMovie';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:movieIdParam" element={<MovieListPage />} />
        <Route path="/new" element={<MovieListPage />} />
        <Route path="/:movieIdForEdit/edit" element={<MovieListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
