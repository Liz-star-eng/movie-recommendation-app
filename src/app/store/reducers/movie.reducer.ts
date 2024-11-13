import { createReducer, on } from '@ngrx/store';
import { searchMoviesSuccess } from '../actions/movie.actions';

export interface MovieState {
  movies: any[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieReducer = createReducer(
  initialState,
  on(searchMoviesSuccess, (state, { movies }) => ({ ...state, movies }))
);
