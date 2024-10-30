import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeOverview } from './overviews/recipes/recipe-overview.component';
import { TravelBlogOverview } from './overviews/travel-blog/travel-blog-overview.component';
import { PageNotFound } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'recipes', component: RecipeOverview },
  { path: 'travel-blog', component: TravelBlogOverview },
  { path: '**', component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
