"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStorageService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService) {
        this.http = http;
        this.recipeService = recipeService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var recipes = this.recipeService.getRecipes();
        this.http.post('https://localhost:44301/api/recipe', recipes).subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.fetchRecipes = function () {
        var _this = this;
        return this.http.get('https://localhost:44301/api/recipe').pipe((0, operators_1.map)(function (recipes) {
            return recipes.map(function (recipe) {
                return __assign(__assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), (0, operators_1.tap)(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        }));
    };
    DataStorageService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=data-storage.service.js.map