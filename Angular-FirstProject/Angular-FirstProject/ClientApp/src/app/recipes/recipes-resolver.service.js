"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolverService = void 0;
var core_1 = require("@angular/core");
var RecipeResolverService = /** @class */ (function () {
    function RecipeResolverService(dataStorageService, recipeService) {
        this.dataStorageService = dataStorageService;
        this.recipeService = recipeService;
    }
    RecipeResolverService.prototype.resolve = function (route, state) {
        var recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    };
    RecipeResolverService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], RecipeResolverService);
    return RecipeResolverService;
}());
exports.RecipeResolverService = RecipeResolverService;
//# sourceMappingURL=recipes-resolver.service.js.map