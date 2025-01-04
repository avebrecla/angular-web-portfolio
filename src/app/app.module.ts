import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelBlogOverview } from './overviews/travel-blog/travel-blog-overview.component';
import { RecipeOverview } from './overviews/recipes/recipe-overview.component';
import { PageNotFound } from './page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelBlogOverview,
    RecipeOverview,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
