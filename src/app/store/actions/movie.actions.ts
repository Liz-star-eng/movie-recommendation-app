import { createAction, props } from '@ngrx/store';

export const searchMovies = createAction(
  '[Movie Search] Search Movies',
  props<{ query: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movie Search] Search Movies Success',
  props<{ movies: any[] }>()
);
