import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  ngOnInit(): void {
    this.startAutoSlide();
  }

  carouselItems:any[] = [
    {
      img:"https://static.wixstatic.com/media/29b1700939354be4858c3e7b244ef75a.jpg/v1/fill/w_396,h_551,q_90/29b1700939354be4858c3e7b244ef75a.webp",
      caption:"slide1"
    },
    {
      img:"https://static.wixstatic.com/media/b5b0e800754745b4adc4decfd1f8d29d.jpg/v1/fill/w_396,h_551,q_90/b5b0e800754745b4adc4decfd1f8d29d.webp",
      caption:"slide1"
    },
    {
      img:"https://static.wixstatic.com/media/c8dcaade3ba84f0d95b9ebbdbb84fc28.jpg/v1/fill/w_396,h_551,q_90/c8dcaade3ba84f0d95b9ebbdbb84fc28.webp",
      caption:"slide1"
    },
  ]
     
  slideIndex = 0;
  autoSlideInterval: any;

 

  nextSlide() {
    this.slideIndex++;
    if (this.slideIndex >= this.carouselItems.length) {
      this.slideIndex = 0;
    }
  }

  prevSlide() {
    this.slideIndex--;
    if (this.slideIndex < 0) {
      this.slideIndex = this.carouselItems.length - 1;
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}
