import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-recommendation-application';

  slides = [
    {
      image: 'https://via.placeholder.com/600x300?text=Slide+1',
      altText: 'Slide 1',
    },
    {
      image: 'https://via.placeholder.com/600x300?text=Slide+2',
      altText: 'Slide 2',
    },
    {
      image: 'https://via.placeholder.com/600x300?text=Slide+3',
      altText: 'Slide 3',
    },
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
