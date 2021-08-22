"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var ingredients_model_1 = require("../Shared/ingredients.model");
var recipe_model_1 = require("./recipe.model");
var RecipeService = /** @class */ (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipeSelected = new core_1.EventEmitter();
        this.recipes = [
            new recipe_model_1.Recipe('Tasty Schnitzel', 'Tasty', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg', [new ingredients_model_1.Ingredient('Meat', 1), new ingredients_model_1.Ingredient('French Fries', 20)]),
            new recipe_model_1.Recipe('Burger', 'Tasty', 'https://www.maxpixel.net/static/photo/1x/Meat-Recipe-Duck-Tasty-Fry-Food-Duck-Breast-4813261.jpg', [new ingredients_model_1.Ingredient('Meat', 1), new ingredients_model_1.Ingredient('Buns', 2)])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map