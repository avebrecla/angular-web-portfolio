import { Component } from '@angular/core';
import travelDataJSON from '../../../assets/content/travel-objects.json';

interface TravelSection {
  location: string;
  travelData: TravelDatum[];
}

interface TravelDatum {
  name: string;
  country: string;
  backgroundImageUrl: string;
  htmlText: string;
}

@Component({
  selector: 'travel-blog-overview',
  templateUrl: './travel-blog-overview.component.html',
  styleUrls: ['./travel-blog-overview.component.css']
})
export class TravelBlogOverview {
  travelSections: TravelSection[] = travelDataJSON;

  images = [
    'assets/travel-images/prague/prague-scenic-castle.jpg',
    'assets/email.png',
    'assets/home.png',
  ];
  currentImageIndex = 0; 

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; 
  }
}