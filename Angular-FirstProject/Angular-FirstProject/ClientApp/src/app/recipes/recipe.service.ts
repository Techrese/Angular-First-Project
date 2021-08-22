import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg'),
    new Recipe('A test recipe', 'simple test', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg')
  ];

  getRecipes() {

    return this.recipes.slice();
  }

}
