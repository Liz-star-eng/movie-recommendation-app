import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  query: string = '';
  movies: any[] = [];
  searchResults: any[] = [];
  selectedMovie: any = null;

  @Output() movieSelected = new EventEmitter<boolean>();

  constructor(private movieService: MovieService, private router: Router) {}

  onSearch() {
    if (this.query) {
      this.movieService.searchMovies(this.query).subscribe((response) => {
        this.movies = response.results;
      });
    }
  }

  onMovieClick(movieId: number) {
    this.router.navigate(['/movie', movieId]);
    this.movieSelected.emit(true);
  }
}
