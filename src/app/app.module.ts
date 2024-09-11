import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelBlogOverview } from './overviews/travel-blog/travel-blog-overview.component';
import { RecipeOverview } from './overviews/recipes/recipe-overview.component';
import { PageNotFound } from './page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TravelBlogOverview,
    RecipeOverview,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
