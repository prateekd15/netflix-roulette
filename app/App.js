import './App.css';
import MovieListPage from "./component/MovieListPage/MovieListPage";
import { Routes, Route } from 'react-router-dom';
import { RemixBrowserProvider } from '@remix';

function App() {
  return (
    <RemixBrowserProvider>
    <Routes>
      <Route path="/" element={<MovieListPage />} />
      {/* <Route path="/:movieIdParam" element={<MovieListPage />} />
      <Route path="/new" element={<MovieListPage />} />
      <Route path="/:movieIdForEdit/edit" element={<MovieListPage />} /> */}
    </Routes>
    </RemixBrowserProvider>
  );
}

export default App;
