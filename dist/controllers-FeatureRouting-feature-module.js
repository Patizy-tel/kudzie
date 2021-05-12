(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controllers-FeatureRouting-feature-module"],{

/***/ "./src/app/controllers/FeatureRouting/feature-Route.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/controllers/FeatureRouting/feature-Route.routing.ts ***!
  \*********************************************************************/
/*! exports provided: FeatureShellRouteRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureShellRouteRoutes", function() { return FeatureShellRouteRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/admin-ui/layout/layout.component */ "./src/app/ui/admin-ui/layout/layout.component.ts");
/* harmony import */ var src_app_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helper/auth-guard.service */ "./src/app/helper/auth-guard.service.ts");






const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ../auth/auth.module */ "./src/app/controllers/auth/auth.module.ts")).then((mod) => mod.AuthModule)
    },
    {
        path: 'admin',
        canActivate: [src_app_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _ui_admin_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ../admin/admin.module */ "./src/app/controllers/admin/admin.module.ts")).then((mod) => mod.AdminDashboardModule)
    }
];
class FeatureShellRouteRoutes {
}
FeatureShellRouteRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureShellRouteRoutes });
FeatureShellRouteRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureShellRouteRoutes_Factory(t) { return new (t || FeatureShellRouteRoutes)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureShellRouteRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureShellRouteRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/controllers/FeatureRouting/feature.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/controllers/FeatureRouting/feature.module.ts ***!
  \**************************************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feature_Route_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-Route.routing */ "./src/app/controllers/FeatureRouting/feature-Route.routing.ts");




class FeatureModule {
}
FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureModule_Factory(t) { return new (t || FeatureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _feature_Route_routing__WEBPACK_IMPORTED_MODULE_2__["FeatureShellRouteRoutes"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _feature_Route_routing__WEBPACK_IMPORTED_MODULE_2__["FeatureShellRouteRoutes"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _feature_Route_routing__WEBPACK_IMPORTED_MODULE_2__["FeatureShellRouteRoutes"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=controllers-FeatureRouting-feature-module.js.map