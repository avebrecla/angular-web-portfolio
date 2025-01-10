import { Component } from '@angular/core';
import travelDataJSON from '../../../assets/content/travel-objects.json';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router) {}

  travelSections: TravelSection[] = travelDataJSON;

  images = [
    'assets/travel-images/prague/prague-scenic-castle.jpg',
    'assets/travel-images/prague/prague-gump.jpg',
    'assets/travel-images/chicago/chicago-loop.jpg',
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

  goHome() {
    this.router.navigateByUrl("/home")
  }
}