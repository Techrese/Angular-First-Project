import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../Shared/ingredients.model";

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 1),
    new Ingredient('Tomatoes', 10)
  ];


  getIngredients() {

    return this.ingredients.slice();    
  }

  addIngredient(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }


}
