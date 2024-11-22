import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent {
  images: any[] = [
    'assets/anime.jpg',
    'assets/aot.jpg',
    'assets/manga.jpg',
    'assets/nami.jpg',
  ];
  index = 0;
  
  clickedimg(i: number){
    this.index = i;
  }
  nextimage() {
    if (this.index < this.images.length - 1) {
      this.index += 1;
    } else {
      this.index = 0;
    }
  }
  previousimage() {
    if (this.index > 0) {
      this.index -= 1;
    } else {
      this.index = this.images.length - 1;
    }
  }
}
