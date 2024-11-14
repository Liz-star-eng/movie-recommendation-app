import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(100px)' }),
            stagger(100, [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class MovieListComponent {
  query: string = '';
  movies: any[] = [];
  searchResults: any[] = [];
  selectedMovie: any = null;
  page: number = 1;

  @Output() movieSelected = new EventEmitter<boolean>();

  constructor(private movieService: MovieService, private router: Router) {}

  onSearch() {
    this.page = 1;
    this.movies = []; // Clear current movies
    this.fetchMovies();
  }

  fetchMovies() {
    if (this.query) {
      this.movieService.searchMovies(this.query).subscribe((response) => {
        this.movies = response.results;
        console.log(this.movies);
      });
    }
  }

  onMovieClick(movieId: number) {
    this.router.navigate(['/movie', movieId]);
    this.movieSelected.emit(true);
  }
}
