import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {

    return this.recipes.slice();
  }

  getRecipe(id: number) {

    return this.recipes[id];
  }


  constructor(private slService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    this.slService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }


  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {

    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
