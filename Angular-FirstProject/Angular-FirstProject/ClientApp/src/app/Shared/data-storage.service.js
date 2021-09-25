"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStorageService = void 0;
var core_1 = require("@angular/core");
var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService) {
        this.http = http;
        this.recipeService = recipeService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var recipes = this.recipeService.getRecipes();
    };
    DataStorageService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=data-storage.service.js.map