(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "1zC5":
/*!*************************************************!*\
  !*** ./src/app/controllers/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "nBPA");
/* harmony import */ var _auth_route_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-route.routing */ "bjtC");
/* harmony import */ var _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/login-ui/login.module */ "fq0B");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_route_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRouteRoutes"],
            _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_route_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRouteRoutes"],
        _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_route_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRouteRoutes"],
                    _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]
                ],
                declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],]
            }]
    }], null, null); })();


/***/ }),

/***/ "bjtC":
/*!********************************************************!*\
  !*** ./src/app/controllers/auth/auth-route.routing.ts ***!
  \********************************************************/
/*! exports provided: AuthRouteRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouteRoutes", function() { return AuthRouteRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "nBPA");





const routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
    }
];
class AuthRouteRoutes {
}
AuthRouteRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRouteRoutes });
AuthRouteRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRouteRoutes_Factory(t) { return new (t || AuthRouteRoutes)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRouteRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRouteRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "nBPA":
/*!****************************************************!*\
  !*** ./src/app/controllers/auth/auth.component.ts ***!
  \****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_login_ui_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/login-ui/login-page/login-page.component */ "cSde");





class AuthComponent {
    constructor(auth, alert, router) {
        this.auth = auth;
        this.alert = alert;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        if (sessionStorage.getItem('token')) {
            return this
                .router
                .navigate(['/admin']);
        }
    }
    login(e) {
        this.loading = true;
        console.log(e);
        if (e.username === 'sysadmin' && e.password === 'admin@123') {
            this
                .auth
                .decodeToken("e.jwtToken");
        }
        else {
            this
                .alert
                .error('Incorrect Credentials');
            this.loading = false;
        }
        /*     this
                 .auth
                 .Login(e)
                 .subscribe((e) => {
     
                     this
                         .auth
                         .decodeToken(e.jwtToken)
     
                 }, (x) => {
     
                     this
                         .alert
                         .error(x.error.message)
                     this.loading = false
     
                 })*/
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 1, consts: [[3, "loading", "childSubmit"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function AuthComponent_Template_app_login_page_childSubmit_0_listener($event) { return ctx.login($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_views_login_ui_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-auth', templateUrl: './auth.component.html', styleUrls: ['./auth.component.scss'] }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map