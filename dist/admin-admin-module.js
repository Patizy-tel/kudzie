(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0T/R":
/*!********************************************************************!*\
  !*** ./src/app/controllers/admin/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_admin_ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../views/admin-ui/main-page/main-page.component */ "TVj6");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
    } }, directives: [_views_admin_ui_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Jyzt":
/*!**********************************************************************!*\
  !*** ./src/app/controllers/admin/insuarance/insuarance.component.ts ***!
  \**********************************************************************/
/*! exports provided: InsuaranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuaranceComponent", function() { return InsuaranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _views_admin_ui_Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../views/admin-ui/Users/users-form/users-form.component */ "q9Dj");
/* harmony import */ var _views_admin_ui_insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../views/admin-ui/insuarance/insurance-list/insurance-list.component */ "ReDS");







class InsuaranceComponent {
    constructor(router, patientService) {
        this.router = router;
        this.patientService = patientService;
    }
    ;
    ngOnInit() {
        this.getLevels({});
    }
    viewMore(x) {
        sessionStorage.setItem('theid', x._id);
        sessionStorage.setItem('theemail', x.email);
        this
            .router
            .navigate([`admin/detail-patients/${x._id}`]);
    }
    postPatient(patient) {
        this.patientService.postPatient(patient)
            .subscribe(resp => {
            alert('success');
        });
    }
    getLevels(state) {
        this.patientService.getAllpaitns((src_app_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0))).subscribe((resp) => {
            console.log(resp);
            this.total = resp.length;
            this.levels = resp;
        });
    }
}
InsuaranceComponent.ɵfac = function InsuaranceComponent_Factory(t) { return new (t || InsuaranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
InsuaranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuaranceComponent, selectors: [["app-insuarance"]], decls: 2, vars: 2, consts: [[3, "childSubmit"], [3, "total", "levels", "view", "updatedState"]], template: function InsuaranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-users-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function InsuaranceComponent_Template_app_users_form_childSubmit_0_listener($event) { return ctx.postPatient($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-insurance-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("view", function InsuaranceComponent_Template_app_insurance_list_view_1_listener($event) { return ctx.viewMore($event); })("updatedState", function InsuaranceComponent_Template_app_insurance_list_updatedState_1_listener($event) { return ctx.getLevels($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total)("levels", ctx.levels);
    } }, directives: [_views_admin_ui_Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_4__["UsersFormComponent"], _views_admin_ui_insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_5__["InsuranceListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1YXJhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuaranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-insuarance',
                templateUrl: './insuarance.component.html',
                styleUrls: ['./insuarance.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "NVEW":
/*!**********************************************************!*\
  !*** ./src/app/controllers/admin/admin-route.routing.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoute", function() { return AdminRoute; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "0T/R");
/* harmony import */ var _Users_Users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Users/Users.component */ "g58E");
/* harmony import */ var _insuarance_insuarance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insuarance/insuarance.component */ "Jyzt");
/* harmony import */ var src_app_views_admin_ui_insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/views/admin-ui/insuarance/insuarance-detail/insuarance-detail.component */ "yfzV");








const routes = [
    {
        path: '',
        redirectTo: 'patients',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'users',
        component: _Users_Users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    },
    {
        path: 'patients',
        component: _insuarance_insuarance_component__WEBPACK_IMPORTED_MODULE_4__["InsuaranceComponent"]
    }, {
        path: 'detail-patients/:id',
        component: src_app_views_admin_ui_insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_5__["InsuaranceDetailComponent"]
    }
];
class AdminRoute {
}
AdminRoute.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoute });
AdminRoute.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoute_Factory(t) { return new (t || AdminRoute)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoute, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoute, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "g58E":
/*!************************************************************!*\
  !*** ./src/app/controllers/admin/Users/Users.component.ts ***!
  \************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _views_admin_ui_Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../views/admin-ui/Users/users-list/users-list.component */ "LrL7");





class UsersComponent {
    constructor(patientService) {
        this.patientService = patientService;
    }
    ngOnInit() {
        this.getLevels({});
    }
    getLevels(state) {
        let id = sessionStorage.getItem('theid');
        this.patientService.getAllNotes(id, (src_app_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0))).subscribe((resp) => {
            console.log(resp + " results loadinf");
            this.total = resp.length;
            this.levels = resp;
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-Users"]], decls: 1, vars: 2, consts: [[3, "total", "levels", "updatedState"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-users-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function UsersComponent_Template_app_users_list_updatedState_0_listener($event) { return ctx.getLevels($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total)("levels", ctx.levels);
    } }, directives: [_views_admin_ui_Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJVc2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Users',
                templateUrl: './Users.component.html',
                styleUrls: ['./Users.component.scss']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "m4W2":
/*!***************************************************!*\
  !*** ./src/app/controllers/admin/admin.module.ts ***!
  \***************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/admin-ui/admin.module */ "PA2q");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-route.routing */ "NVEW");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "0T/R");
/* harmony import */ var _Users_Users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Users/Users.component */ "g58E");
/* harmony import */ var _insuarance_insuarance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insuarance/insuarance.component */ "Jyzt");











class AdminDashboardModule {
}
AdminDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminDashboardModule });
AdminDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminDashboardModule_Factory(t) { return new (t || AdminDashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ', libraries: ['places'] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminDashboardModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _Users_Users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
        _insuarance_insuarance_component__WEBPACK_IMPORTED_MODULE_8__["InsuaranceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ', libraries: ['places'] })
                ],
                declarations: [
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _Users_Users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                    _insuarance_insuarance_component__WEBPACK_IMPORTED_MODULE_8__["InsuaranceComponent"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map