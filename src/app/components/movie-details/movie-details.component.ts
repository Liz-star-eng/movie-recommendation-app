import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movieDetails: any;
  recommendedMovies: any[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the movie_id from the route
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.getMovieDetails();
      this.getRecommendations();
    });
  }

  // Fetch the selected movie's details
  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe(data => {
      this.movieDetails = data;
    });
  }

  // Fetch movie recommendations
  getRecommendations() {
    this.movieService.getRecommendations(this.movieId).subscribe(response => {
      this.recommendedMovies = response.results;  // Store recommendations
    });
  }
}

