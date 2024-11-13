import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Movie Recommendation Application';
  selectedMovie: any = null;
  showButton: boolean = true;
  isMovieSelected: boolean = false;
  showContent: boolean = false;

  constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Reset the selected movie and state when navigating away from the detail page
        if (this.isMovieSelected) {
          this.clearSelectedMovie();
        }
      }

      if (event instanceof NavigationEnd) {
        this.showButton = event.url === '/';
        this.showContent = event.url === '/';
      }
    });
  }

  // Update selected movie
  onMovieSelect(movie: any) {
    this.selectedMovie = movie;
  }
  clearSelectedMovie() {
    this.selectedMovie = null;
    this.isMovieSelected = false;
    this.showContent = true;
  }

  // This method is triggered when the movieSelected event is emitted
  onMovieSelected(selected: boolean): void {
    this.isMovieSelected = selected;
  }
}
