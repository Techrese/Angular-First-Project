"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListService = void 0;
var core_1 = require("@angular/core");
var ingredients_model_1 = require("../Shared/ingredients.model");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientChanged = new core_1.EventEmitter();
        this.ingredients = [
            new ingredients_model_1.Ingredient('Apples', 1),
            new ingredients_model_1.Ingredient('Tomatoes', 10)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    };
    ShoppingListService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map