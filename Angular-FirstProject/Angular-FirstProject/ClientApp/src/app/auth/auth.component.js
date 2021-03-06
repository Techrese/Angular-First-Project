"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        this.isLoginMode = true;
    }
    AuthComponent.prototype.onSwitchMode = function () {
        this.isLoginMode = !this.isLoginMode;
    };
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map