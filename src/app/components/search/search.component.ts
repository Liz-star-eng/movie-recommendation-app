import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  onSearch() {
    if (this.query) {
      this.movieService.searchMovies(this.query).subscribe((response) => {
        this.movies = response.results;
      });
    }
  }
}
