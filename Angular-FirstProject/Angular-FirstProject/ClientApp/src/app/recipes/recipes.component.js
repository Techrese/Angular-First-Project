"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesComponent = void 0;
var core_1 = require("@angular/core");
var recipe_service_1 = require("./recipe.service");
var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.recipeSelected.subscribe(function (recipe) {
            _this.selectedRecipe = recipe;
        });
    };
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'app-recipes',
            templateUrl: './recipes.component.html',
            styleUrls: ['./recipes.component.css'],
            providers: [recipe_service_1.RecipeService]
        })
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map