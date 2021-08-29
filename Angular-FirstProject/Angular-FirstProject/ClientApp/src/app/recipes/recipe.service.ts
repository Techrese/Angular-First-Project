import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Tasty', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [new Ingredient('Meat', 1), new Ingredient('French Fries',20)]),
    new Recipe('Burger', 'burger', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [new Ingredient('Meat', 1), new Ingredient('Buns', 2)])
  ];

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

}
