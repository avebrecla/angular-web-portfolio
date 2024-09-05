import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(
  private router: Router,
  private route: ActivatedRoute
) {}

  title = 'Avery Clark';
  tiles = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  goTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
