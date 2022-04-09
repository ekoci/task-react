import CircularProgress from '@mui/material/CircularProgress';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../components/card/Card';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Box from '@mui/material/Box';
import {
  getMovies,
  setMovies,
  setSelectedMovie,
} from '../../redux/features/movie.js';
import axios from 'axios';
import './movies.css';
function Movies() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  let [movies1, setMovies1] = useState([]);
  let [searchText, setSearchText] = useState('');
  let [searchedMovies, setSearchedMovies] = useState([]);

  const selectMovie = (movie) => {
    dispatch(setSelectedMovie(movie));
    navigate(`/movies/${movie.id}`);
  };

  useLayoutEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://imdb-api.com/API/AdvancedSearch/k_sgbf9rjl/?groups=top_250&count=250`
      );
      console.log(res.data);
      dispatch(setMovies(res.data.results));
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (movies) {
      let newMovies = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchText) ||
          movie.description.toLowerCase().includes(searchText)
      );
      setSearchedMovies(newMovies);
    }
  }, [searchText]);

  useEffect(() => {
    setMovies1(
      searchedMovies?.length > 0
        ? searchedMovies
        : searchedMovies?.length === 0
        ? null
        : movies
    );
  }, [searchedMovies]);

  return (
    <div>
      {!movies ? (
        <div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <>
          <div className={'searchArea'}>
            <TextField
              id='outlined-basic'
              label='Search Movie'
              variant='outlined'
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className={'container'}>
            {movies1?.length > 0 &&
              movies1.map((movie, i) => (
                <div className={'movieContainer'} key={i}>
                  <MovieCard movie={movie} onClick={() => selectMovie(movie)} />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
