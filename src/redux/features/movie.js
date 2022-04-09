import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: {},
    selectedMovie: {},
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
      console.log(state.selectedMovie);
    },
  },
});

export const { setMovies, setSelectedMovie } = movieSlice.actions;

export const getMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;

export default movieSlice.reducer;
