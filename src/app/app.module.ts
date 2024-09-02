import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelBlogOverview } from './overviews/travel-blog/travel-blog-overview.component';
import { RecipeOverview } from './overviews/recipes/recipe-overview.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
