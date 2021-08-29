import {Injectable } from "@angular/core";
import { Ingredient } from "../Shared/ingredients.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 1),
    new Ingredient('Tomatoes', 10)
  ];


  getIngredients() {

    return this.ingredients.slice();    
  }

  addIngredient(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
