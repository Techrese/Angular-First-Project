"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeEditComponent = void 0;
var core_1 = require("@angular/core");
var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route) {
        this.route = route;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
        });
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            templateUrl: './recipe-edit.component.html',
            styleUrls: ['./recipe-edit.component.css']
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map