import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }


  storeRecipes() {

    const recipes = this.recipeService.getRecipes();
    this.http.post('https://localhost:44301/api/recipe', recipes).subscribe(response => {

      console.log(response);

    });

  }

  fetchRecipes() {

    this.http.get<Recipe[]>('https://localhost:44301/api/recipe').pipe(map(recipes => {
      return recipes.map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      })
    })).subscribe(recipes => {
      
      this.recipeService.setRecipes(recipes);

    });

  }



}
