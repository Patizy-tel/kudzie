(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controllers-FeatureRouting-feature-module"],{

/***/ "3cIW":
/*!*********************************************************************!*\
  !*** ./src/app/controllers/FeatureRouting/feature-Route.routing.ts ***!
  \*********************************************************************/
/*! exports provided: FeatureShellRouteRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureShellRouteRoutes", function() { return FeatureShellRouteRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_admin_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/admin-ui/layout/layout.component */ "baQe");





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ../auth/auth.module */ "1zC5")).then((mod) => mod.AuthModule)
    },
    {
        path: 'admin',
        //  canActivate: [AuthGuard],
        component: _views_admin_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ../admin/admin.module */ "m4W2")).then((mod) => mod.AdminDashboardModule)
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

/***/ "bLJ4":
/*!**************************************************************!*\
  !*** ./src/app/controllers/FeatureRouting/feature.module.ts ***!
  \**************************************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feature_Route_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-Route.routing */ "3cIW");




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