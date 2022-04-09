import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from './modules/Movies/MovieDetail/MovieDetail';
import Movies from './modules/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
