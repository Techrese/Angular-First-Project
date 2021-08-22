import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Tasty', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries',20)]),
    new Recipe('Burger', 'Tasty', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg', [new Ingredient('Meat', 1), new Ingredient('Buns', 2)])
  ];

  getRecipes() {

    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    this.slService.addIngredients(ingredients);

  }

}
