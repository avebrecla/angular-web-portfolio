import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverview {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}