import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'travel-blog-page',
  templateUrl: './travel-blog-page.component.html',
  styleUrls: ['./travel-blog-page.component.css']
})
export class TravelBlogPage {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}