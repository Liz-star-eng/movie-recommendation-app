import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movieDetails: any;
  recommendedMovies: any[] = [];
  selectedMovie: any = null;
  @Input() movie: any;

  @Output() detailsDisplayed = new EventEmitter<boolean>();
  @Output() showContent = new EventEmitter<boolean>();

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get the movieId from the route params
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      this.getMovieDetails();
      this.getRecommendations();
    });

    if (this.movieDetails) {
      this.detailsDisplayed.emit(true);
    }
  }

  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe((data) => {
      this.movieDetails = data;
    });
  }

  getRecommendations() {
    this.movieService.getRecommendations(this.movieId).subscribe((response) => {
      this.recommendedMovies = response.results;
    });
  }

  onRecommendationClick(movie: any) {
    this.router.navigate([`/movie/${movie.id}`]);
  }

  // Navigate to the previous page
  goBack(): void {
    this.location.back();
    this.showContent.emit(true);
  }
}

