import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test description','https://i.vimeocdn.com/portrait/58832_300x300'),
    new Recipe('Another Test Recipe','Test description','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  onRecipeClick(recipe: Recipe){
    this.recipeClicked.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
