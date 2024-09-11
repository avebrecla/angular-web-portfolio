import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private datePipe: DatePipe
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
  currentDate = new Date();

  goTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
