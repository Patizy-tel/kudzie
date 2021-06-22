(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tello\Projects\Work4\kudzie\src\main.ts */"zUnb");


/***/ }),

/***/ "1xwn":
/*!*************************************!*\
  !*** ./src/app/models/authority.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class AlertService {
    constructor() { }
    error(text) {
        const option = {
            title: 'Error message',
            text: text,
            icon: 'error',
            confirmButtonText: 'ok'
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(option);
    }
    success(text) {
        const option = {
            title: 'Success',
            text: text,
            timer: 3000,
            icon: 'success',
            confirmButtonText: 'Ok'
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(option)
            .then(() => { });
    }
    serverError() {
        const option = {
            title: 'Server Error',
            text: 'Server Error',
            icon: 'error',
            confirmButtonText: 'Ok'
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(option);
    }
    confirm(text) {
        const option = {
            title: 'Are you sure?',
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'cancel'
        };
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(option);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6fWh":
/*!****************************************************!*\
  !*** ./src/app/services/access-control.service.ts ***!
  \****************************************************/
/*! exports provided: AccessControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlService", function() { return AccessControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis.service */ "8RPc");




class AccessControlService {
    constructor(apis) {
        this.apis = apis;
    }
    getPaginatedAuthorites(filters) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: filters });
        return this.apis.get(`/v1/access-control/authorities`, httpParams);
    }
    getSystemAuthorites() {
        return this.apis.get(`/v1/access-control/authorities/all`);
    }
    postAuthority(Auth) {
        return this.apis.post(`/v1/access-control/group-authorities`, Auth);
    }
    postUserAuthority(User) {
        return this.apis.post(`/v1/access-control/user-authorities`, User);
    }
    getpaginatedUserAuthority(id, filters) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: filters });
        return this.apis.get(`/v1/access-control/user-authorities/by-user/${id}`, httpParams);
    }
}
AccessControlService.ɵfac = function AccessControlService_Factory(t) { return new (t || AccessControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"])); };
AccessControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccessControlService, factory: AccessControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] }]; }, null); })();


/***/ }),

/***/ "7wNR":
/*!**********************************!*\
  !*** ./src/app/models/groups.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "8RPc":
/*!******************************************!*\
  !*** ./src/app/services/apis.service.ts ***!
  \******************************************/
/*! exports provided: ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApisService extends _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] {
    constructor(http, baseUrl) {
        super(http);
        this.baseUrl = baseUrl;
        this.server = `${baseUrl}`;
    }
}
ApisService.ɵfac = function ApisService_Factory(t) { return new (t || ApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('baseUrl')); };
ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApisService, factory: ApisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['baseUrl']
            }] }]; }, null); })();


/***/ }),

/***/ "8djI":
/*!****************************************************!*\
  !*** ./src/app/views/admin-ui/variables/charts.ts ***!
  \****************************************************/
/*! exports provided: chartOptions, parseOptions, chartExample1, chartExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartOptions", function() { return chartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartExample1", function() { return chartExample1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartExample2", function() { return chartExample2; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.elements.Rectangle.prototype.draw = function () {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;
    // Set Radius Here
    // If radius is large enough to cause drawing errors a max radius is imposed
    var cornerRadius = 6;
    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || "bottom";
    }
    else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || "left";
    }
    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
        var borderRight = right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
        var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
        var borderBottom = bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }
    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;
    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [[left, bottom], [left, top], [right, top], [right, bottom]];
    // Find first (starting) corner with fallback to 'bottom'
    var borders = ["bottom", "left", "top", "right"];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }
    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }
    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);
    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        let nextCornerId = i + 1;
        if (nextCornerId === 4) {
            nextCornerId = 0;
        }
        // let nextCorner = cornerAt(nextCornerId);
        let width = corners[2][0] - corners[1][0];
        let height = corners[0][1] - corners[1][1];
        let x = corners[1][0];
        let y = corners[1][1];
        // eslint-disable-next-line
        var radius = cornerRadius;
        // Fix radius being too large
        if (radius > height / 2) {
            radius = height / 2;
        }
        if (radius > width / 2) {
            radius = width / 2;
        }
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
    }
    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
};
var mode = 'light'; //(themeMode) ? themeMode : 'light';
var fonts = {
    base: 'Open Sans'
};
// Colors
var colors = {
    gray: {
        100: '#f6f9fc',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#8898aa',
        700: '#525f7f',
        800: '#32325d',
        900: '#212529'
    },
    theme: {
        'default': '#172b4d',
        'primary': '#5e72e4',
        'secondary': '#f4f5f7',
        'info': '#11cdef',
        'success': '#2dce89',
        'danger': '#f5365c',
        'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent',
};
function chartOptions() {
    // Options
    var options = {
        defaults: {
            global: {
                responsive: true,
                maintainAspectRatio: false,
                defaultColor: (mode == 'dark') ? colors.gray[700] : colors.gray[600],
                defaultFontColor: (mode == 'dark') ? colors.gray[700] : colors.gray[600],
                defaultFontFamily: fonts.base,
                defaultFontSize: 13,
                layout: {
                    padding: 0
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 16
                    }
                },
                elements: {
                    point: {
                        radius: 0,
                        backgroundColor: colors.theme['primary']
                    },
                    line: {
                        tension: .4,
                        borderWidth: 4,
                        borderColor: colors.theme['primary'],
                        backgroundColor: colors.transparent,
                        borderCapStyle: 'rounded'
                    },
                    rectangle: {
                        backgroundColor: colors.theme['warning']
                    },
                    arc: {
                        backgroundColor: colors.theme['primary'],
                        borderColor: (mode == 'dark') ? colors.gray[800] : colors.white,
                        borderWidth: 4
                    }
                },
                tooltips: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                }
            },
            doughnut: {
                cutoutPercentage: 83,
                legendCallback: function (chart) {
                    var data = chart.data;
                    var content = '';
                    data.labels.forEach(function (label, index) {
                        var bgColor = data.datasets[0].backgroundColor[index];
                        content += '<span class="chart-legend-item">';
                        content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
                        content += label;
                        content += '</span>';
                    });
                    return content;
                }
            }
        }
    };
    // yAxes
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.scaleService.updateScaleDefaults('linear', {
        gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: (mode == 'dark') ? colors.gray[900] : colors.gray[300],
            drawBorder: false,
            drawTicks: false,
            lineWidth: 0,
            zeroLineWidth: 0,
            zeroLineColor: (mode == 'dark') ? colors.gray[900] : colors.gray[300],
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
        },
        ticks: {
            beginAtZero: true,
            padding: 10,
            callback: function (value) {
                if (!(value % 10)) {
                    return value;
                }
            }
        }
    });
    // xAxes
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.scaleService.updateScaleDefaults('category', {
        gridLines: {
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: false
        },
        ticks: {
            padding: 20
        },
        maxBarThickness: 10
    });
    return options;
}
const parseOptions = (parent, options) => {
    for (var item in options) {
        if (typeof options[item] !== 'object') {
            parent[item] = options[item];
        }
        else {
            parseOptions(parent[item], options[item]);
        }
    }
};
const chartExample1 = {
    options: {
        scales: {
            yAxes: [{
                    gridLines: {
                        color: colors.gray[900],
                        zeroLineColor: colors.gray[900]
                    },
                    ticks: {
                        callback: function (value) {
                            if (!(value % 10)) {
                                return value + '%';
                            }
                        }
                    }
                }]
        }
    },
    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
                label: 'Performance',
                data: [100, 90, 98, 92, 96, 92, 90, 99, 91]
            }]
    }
};
const chartExample2 = {
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        callback: function (value) {
                            if (!(value % 10)) {
                                //return '$' + value + 'k'
                                return value;
                            }
                        }
                    }
                }
            ]
        },
        tooltips: {
            callbacks: {
                label: function (item, data) {
                    var label = data.datasets[item.datasetIndex].label || "";
                    var yLabel = item.yLabel;
                    var content = "";
                    if (data.datasets.length > 1) {
                        content += label;
                    }
                    content += yLabel;
                    return content;
                }
            }
        }
    },
    data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sales",
                data: [25, 20, 30, 22, 17, 29]
            }
        ]
    }
};


/***/ }),

/***/ "ACO2":
/*!************************************!*\
  !*** ./src/app/models/Utilites.ts ***!
  \************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
class Utilities {
    constructor() { }
    static formatDatagridState(state, page) {
        const filters = {};
        if (state.filters) {
            const searchQueries = Object.values(state.filters)
                .map((val) => {
                return val.property + ':' + val.value;
            })
                .join(',');
            filters.search = searchQueries;
        }
        if (state.sort) {
            filters.sort = state.sort.by;
            filters.order = state.sort.reverse ? 'DESC' : 'ASC';
        }
        filters.page = page;
        filters.size = 10;
        return filters;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAz0":
/*!***********************************!*\
  !*** ./src/app/models/answers.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "DOHG":
/*!*********************************************************************!*\
  !*** ./src/app/views/page-not-found-ui/page-not-found.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " page-not-found works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](), contentType = null) {
        return this.http
            .get(`${this.server}${path}`, {
            headers: this.setHeaders(contentType),
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    post(path, body, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](), contentType = null) {
        return this.http
            .post(`${this.server}${path}`, body, {
            headers: this.setHeaders(contentType),
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    put(path, body = {}, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](), contentType = null) {
        return this.http
            .put(`${this.server}${path}`, JSON.stringify(body), {
            headers: this.setHeaders(contentType),
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    patch(path, body = {}, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](), contentType = null) {
        return this.http
            .patch(`${this.server}${path}`, JSON.stringify(body), {
            headers: this.setHeaders(contentType),
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    delete(path, contentType = null, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        return this.http
            .delete(`${this.server}${path}`, {
            headers: this.setHeaders(contentType),
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    file(path, formData, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        return this.http
            .post(`${this.server}${path}`, formData, {
            /* headers: this.setHeaders('multipart-form-data'), */
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.formatErrors));
    }
    getFile(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        return this.http.get(`${this.server}${path}`, {
            params,
            responseType: 'blob',
        });
    }
    upload(path, file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', `${this.server}${path}`, formData, {
            reportProgress: false,
        }));
    }
    setHeaders(contentType = null) {
        const headersConfig = {
            Accept: 'application/json',
        };
        switch (contentType) {
            case 'file':
                break;
            case 'form-data':
                headersConfig['Content-Type'] = `application/x-www-form-urlencoded`;
                break;
            case 'multipart-form-data':
                headersConfig['Content-Type'] = `multipart/form-data`;
                break;
            default:
                headersConfig['Content-Type'] = `application/json`;
                break;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headersConfig);
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmnC":
/*!*******************************************************************************!*\
  !*** ./src/app/views/admin-ui/Booking/booking-form/booking-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return BookingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");






class BookingFormComponent {
    constructor(notesService) {
        this.notesService = notesService;
        this.dialog = false;
        this.loading = false;
        this.childSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createProjectForm();
    }
    createProjectForm() {
        this.vendorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    onSubmit() {
        let id = sessionStorage.getItem('theid');
        let finalObj = {
            details: this.vendorForm.value.details,
            patId: id
        };
        this.notesService.postNotes(finalObj).subscribe(resp => {
            alert('success');
        });
    }
}
BookingFormComponent.ɵfac = function BookingFormComponent_Factory(t) { return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
BookingFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingFormComponent, selectors: [["app-booking-form"]], inputs: { errorMessage: "errorMessage", dialog: "dialog", btnState$: "btnState$", loading: "loading" }, outputs: { childSubmit: "childSubmit" }, decls: 16, vars: 2, consts: [[1, "card"], ["solid", "", 1, "btn", "btn-success", 3, "click"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrStepper", "", "clrForm", "", 1, "loginForm", 3, "formGroup", "ngSubmit"], ["layout", "horizontal", "clrInput", "", "formControlName", "details", "required", ""], ["type", "submit", 1, "btn", "btn-success"]], template: function BookingFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingFormComponent_Template_button_click_1_listener() { return ctx.dialog = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function BookingFormComponent_Template_clr_modal_clrModalOpenChange_4_listener($event) { return ctx.dialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookingFormComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.vendorForm);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrStepper"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrStepperWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking-form',
                templateUrl: './booking-form.component.html',
                styleUrls: ['./booking-form.component.scss']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnState$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "LrL7":
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-ui/Users/users-list/users-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Booking/booking-form/booking-form.component */ "LmnC");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");






function UsersListComponent_clr_dg_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-action-overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Deactivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.updatedAt);
} }
class UsersListComponent {
    constructor(notesSerices) {
        this.notesSerices = notesSerices;
        this.updatedState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.getLevels({});
    }
    getLevels(state) {
        let id = sessionStorage.getItem('theid');
        this.notesSerices.getAllNotes(id, (src_app_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0))).subscribe((resp) => {
            console.log(resp);
            this.total = resp.length;
            this.levels = resp;
        });
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], inputs: { total: "total", levels: "levels" }, outputs: { updatedState: "updatedState" }, decls: 10, vars: 3, consts: [[1, "limit-height"], [3, "clrDgRefresh"], [3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [1, "action-item"], [1, "action-item", 2, "background-color", "rgb(241, 187, 8)"], [1, "action-item", 2, "background-color", "red", "color", "#fff"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-booking-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-datagrid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrDgRefresh", function UsersListComponent_Template_clr_datagrid_clrDgRefresh_4_listener($event) { return ctx.updatedState.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Updated Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersListComponent_clr_dg_row_9_Template, 14, 2, "clr-dg-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.levels);
    } }, directives: [_Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_3__["BookingFormComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridCellRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridActionOverflow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-list',
                templateUrl: './users-list.component.html',
                styleUrls: ['./users-list.component.css']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { updatedState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], levels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MHO5":
/*!**********************************!*\
  !*** ./src/app/models/agents.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Mv9d":
/*!**********************************************!*\
  !*** ./src/app/helper/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const token = sessionStorage.getItem('token');
        if (token) {
            const role = sessionStorage.getItem('role');
            if (role === 'ROLE_ADMIN') {
                return true;
            }
            else {
                sessionStorage.clear();
                this.router.navigate(['login']);
                return false;
            }
        }
        else {
            sessionStorage.clear();
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "NzFH":
/*!*********************************************!*\
  !*** ./src/app/models/questionAndAnswer.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "OOQP":
/*!*********************************************!*\
  !*** ./src/app/models/group-authorities.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "OZe2":
/*!*************************************!*\
  !*** ./src/app/models/documents.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "PA2q":
/*!************************************************!*\
  !*** ./src/app/views/admin-ui/admin.module.ts ***!
  \************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/main-page.component */ "TVj6");
/* harmony import */ var _helper_helper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helper/helper.module */ "sBk1");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.component */ "baQe");
/* harmony import */ var _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users/users-list/users-list.component */ "LrL7");
/* harmony import */ var _Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Users/users-form/users-form.component */ "q9Dj");
/* harmony import */ var _insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./insuarance/insurance-list/insurance-list.component */ "ReDS");
/* harmony import */ var _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Booking/booking-form/booking-form.component */ "LmnC");
/* harmony import */ var _insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./insuarance/insuarance-detail/insuarance-detail.component */ "yfzV");
/* harmony import */ var _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Fuel/fuel-form/fuel-form.component */ "vSsR");

















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _helper_helper_module__WEBPACK_IMPORTED_MODULE_8__["HelperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        _Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"],
        _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"],
        _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__["BookingFormComponent"],
        _insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_12__["InsuranceListComponent"], _insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_14__["InsuaranceDetailComponent"],
        _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_15__["FuelFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _helper_helper_module__WEBPACK_IMPORTED_MODULE_8__["HelperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]], exports: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        _Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"],
        _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"],
        _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__["BookingFormComponent"],
        _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_15__["FuelFormComponent"],
        _insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_12__["InsuranceListComponent"], _insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_14__["InsuaranceDetailComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _helper_helper_module__WEBPACK_IMPORTED_MODULE_8__["HelperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]
                ],
                declarations: [
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                    _Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"],
                    _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"],
                    _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__["BookingFormComponent"],
                    _insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_12__["InsuranceListComponent"], _insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_14__["InsuaranceDetailComponent"],
                    _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_15__["FuelFormComponent"]
                ],
                exports: [
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                    _Users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"],
                    _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"],
                    _Booking_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_13__["BookingFormComponent"],
                    _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_15__["FuelFormComponent"],
                    _insuarance_insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_12__["InsuranceListComponent"], _insuarance_insuarance_detail_insuarance_detail_component__WEBPACK_IMPORTED_MODULE_14__["InsuaranceDetailComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QnEg":
/*!*******************************************!*\
  !*** ./src/app/helper/jwt.interceptor.ts ***!
  \*******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = sessionStorage.getItem('token');
        //token
        const isLoggedIn = currentUser;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ReDS":
/*!**************************************************************************************!*\
  !*** ./src/app/views/admin-ui/insuarance/insurance-list/insurance-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InsuranceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceListComponent", function() { return InsuranceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");



function InsuranceListComponent_clr_dg_row_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clr-dg-action-overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceListComponent_clr_dg_row_26_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.view.emit(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Health Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.marital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.EcontactName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.EcontactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.updatedAt);
} }
class InsuranceListComponent {
    constructor() {
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
InsuranceListComponent.ɵfac = function InsuranceListComponent_Factory(t) { return new (t || InsuranceListComponent)(); };
InsuranceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceListComponent, selectors: [["app-insurance-list"]], inputs: { total: "total", levels: "levels" }, outputs: { view: "view" }, decls: 27, vars: 12, consts: [[1, "limit-height"], [3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [1, "action-item", 3, "click"]], template: function InsuranceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reference Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Patient Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Marital Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Emergency Contact Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Emergency Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reported Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InsuranceListComponent_clr_dg_row_26_Template, 29, 12, "clr-dg-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "firstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "lastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "marital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "EcontactName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "EcontactNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updatedAt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.levels);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridCellRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridActionOverflow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-insurance-list', templateUrl: './insurance-list.component.html', styleUrls: ['./insurance-list.component.scss'] }]
    }], function () { return []; }, { view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], levels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(url, router) {
        this.url = url;
        this.router = router;
        this.title = 'app works!';
        console.log(this.url);
    }
    ngOnInit() {
        if (!sessionStorage.getItem('token')) {
            return this.router.navigate(['/login']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('baseUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['baseUrl']
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "TAdG":
/*!************************************!*\
  !*** ./src/app/models/projects.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "TVj6":
/*!*****************************************************************!*\
  !*** ./src/app/views/admin-ui/main-page/main-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables/charts */ "8djI");


// core components


const _c0 = ["chart"];
class MainPageComponent {
    constructor() {
        this.clicked = true;
        this.clicked1 = false;
        this.chartOptions = {
            series: [
                {
                    name: "Tanaka",
                    data: [23, 49, 98, 51, 42, 55, 80]
                },
                {
                    name: "Tinashe",
                    data: [60, 21, 55, 72, 34, 92, 41]
                },
                {
                    name: "Tonderai",
                    data: [90, 32, 45, 82, 4, 2, 1]
                },
                {
                    name: "Kudzai",
                    data: [11, 32, 5, 32, 34, 55, 70]
                },
                {
                    name: "Melody",
                    data: [40, 32, 4, 62, 34, 52, 30]
                }
            ],
            chart: {
                height: 350,
                type: "area"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "category",
                categories: [
                    "1Feb",
                    "2Feb",
                    "3Feb",
                    "4Feb",
                    "5Feb",
                    "6Feb",
                    "7Feb"
                ]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
    }
    ngOnInit() {
        this.datasets = [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ];
        this.data = this.datasets[0];
        var chartOrders = document.getElementById('chart-orders');
        Object(_variables_charts__WEBPACK_IMPORTED_MODULE_2__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartOptions"])());
        var ordersChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(chartOrders, {
            type: 'bar',
            options: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample2"].options,
            data: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample2"].data
        });
        var chartSales = document.getElementById('chart-sales');
        this.salesChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(chartSales, {
            type: 'line',
            options: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample1"].options,
            data: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample1"].data
        });
    }
    generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    updateOptions() {
        this.salesChart.data.datasets[0].data = this.data;
        this.salesChart.update();
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], viewQuery: function MainPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "TZz9":
/*!******************************************!*\
  !*** ./src/app/models/page.interface.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "VHTt":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.interface */ "TZz9");
/* empty/unused harmony star reexport *//* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "xEpQ");
/* empty/unused harmony star reexport *//* harmony import */ var _group_authorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-authorities */ "OOQP");
/* empty/unused harmony star reexport *//* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups */ "7wNR");
/* empty/unused harmony star reexport *//* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilites */ "ACO2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_4__["Utilities"]; });

/* harmony import */ var _user_authorities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-authorities */ "e+kc");
/* empty/unused harmony star reexport *//* harmony import */ var _authority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authority */ "1xwn");
/* empty/unused harmony star reexport *//* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects */ "TAdG");
/* empty/unused harmony star reexport *//* harmony import */ var _agents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agents */ "MHO5");
/* empty/unused harmony star reexport *//* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents */ "OZe2");
/* empty/unused harmony star reexport *//* harmony import */ var _questions_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questions.interface */ "eDiB");
/* empty/unused harmony star reexport *//* harmony import */ var _answers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./answers */ "CAz0");
/* empty/unused harmony star reexport *//* harmony import */ var _questionAndAnswer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questionAndAnswer */ "NzFH");
/* empty/unused harmony star reexport */














/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/jwt.interceptor */ "QnEg");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login-ui/login.module */ "fq0B");
/* harmony import */ var _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/admin-ui/admin.module */ "PA2q");
/* harmony import */ var _helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper/auth-guard.service */ "Mv9d");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _views_page_not_found_ui_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page-not-found-ui/page-not-found.component */ "DOHG");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
        _services__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
        { provide: 'baseUrl', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
            _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _views_page_not_found_ui_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
        _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _views_page_not_found_ui_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _views_login_ui_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
                    _views_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClarityModule"],
                ],
                providers: [
                    _helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
                    { provide: 'baseUrl', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "baQe":
/*!***********************************************************!*\
  !*** ./src/app/views/admin-ui/layout/layout.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");




class LayoutComponent {
    constructor(router) {
        this.router = router;
        this.collapsible = true;
        this.collapsed = true;
        this.fullname = sessionStorage.getItem('fullname');
    }
    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('fullname');
        this.router.navigate(['login']);
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 20, vars: 2, consts: [[1, "header-4", 2, "background-color", "rgba(100, 12, 158, 0.692)"], [1, "branding"], [1, "nav-link"], [1, "header-actions"], [1, "dropdown", "bottom-right"], ["clrDropdownToggle", "", 1, "nav-text"], [1, "dropdown-menu"], ["routerLink", "./password-management", "clrDropdownItem", ""], ["clrDropdownItem", "", 3, "click"], [1, "content-container"], [1, "content-area"], [3, "clrVerticalNavCollapsible", "clrVerticalNavCollapsed", "clrVerticalNavCollapsedChange"], ["clrVerticalNavLink", "", "routerLink", "./patients"], ["clrVerticalNavIcon", "", "shape", "users"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-vertical-nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrVerticalNavCollapsedChange", function LayoutComponent_Template_clr_vertical_nav_clrVerticalNavCollapsedChange_16_listener($event) { return ctx.collapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "clr-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Patients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrVerticalNavCollapsible", ctx.collapsible)("clrVerticalNavCollapsed", ctx.collapsed);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["MainContainerWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNav"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNavLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNavIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "cSde":
/*!*******************************************************************!*\
  !*** ./src/app/views/login-ui/login-page/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function LoginPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/forgot-password"]; };
class LoginPageComponent {
    constructor() {
        this.loading = false;
        this.childSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createLoginForm();
    }
    createLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        this
            .childSubmit
            .emit(this.loginForm.value);
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], inputs: { errorMessage: "errorMessage", btnState$: "btnState$", loading: "loading" }, outputs: { childSubmit: "childSubmit" }, decls: 21, vars: 7, consts: [[1, "text-center"], [1, "login-wrapper"], ["clrForm", "", 1, "login", 3, "formGroup", "ngSubmit"], ["alt", ""], [1, "row", "login-group"], ["type", "text", "name", "username", "clrInput", "", "name", "username", "formControlName", "username"], ["type", "password", "name", "password", "clrPassword", "", "formControlName", "password"], ["type", "submit", 1, "btn", "btn-success", 3, "clrLoading"], [4, "ngIf"], [1, "signup", 3, "routerLink"], ["clrInline", ""]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-password-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginPageComponent_div_17_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrLoading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx.btnState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["MainContainerWillyWonka"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPassword"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoading"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["img[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.css'] }]
    }], function () { return []; }, { errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnState$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "e+kc":
/*!********************************************!*\
  !*** ./src/app/models/user-authorities.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "eDiB":
/*!***********************************************!*\
  !*** ./src/app/models/questions.interface.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "fq0B":
/*!************************************************!*\
  !*** ./src/app/views/login-ui/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helper_helper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/helper.module */ "sBk1");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "cSde");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _helper_helper_module__WEBPACK_IMPORTED_MODULE_4__["HelperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _helper_helper_module__WEBPACK_IMPORTED_MODULE_4__["HelperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _helper_helper_module__WEBPACK_IMPORTED_MODULE_4__["HelperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
                ],
                exports: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],],
                declarations: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis.service */ "8RPc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");






class AuthService {
    constructor(apis, router, alerts) {
        this.apis = apis;
        this.router = router;
        this.alerts = alerts;
    }
    Login(auth) {
        return this
            .apis
            .post(`/authenticate`, auth);
    }
    decodeToken(x) {
        this.alerts.success("Nice ✔👌");
        sessionStorage.setItem('token', x);
        sessionStorage.setItem('role', "ROLE_ADMIN");
        return this
            .router
            .navigate(['/admin/patients']);
        /*       const decode :any = jwt_decode(x)
               let {authorities} = decode
               authorities.map(y => {
       
       
                   if(y.authority != "ROLE_ADMIN"){
       
                       this.alerts.error("Sorry 😒Only Admins Can Login In")
       
       
                   }else{
       
       
                       this.alerts.success("Nice ✔👌")
                       sessionStorage.setItem('role', y.authority)
                       return this
                           .router
                           .navigate(['/admin']);
       
       
                   }
                 
       
               })*/
    }
    forgotPassword(forg) {
        return this
            .apis
            .post(`/v1/users/forgot-password`, forg);
    }
    UpdatePassword(updates) {
        return this
            .apis
            .post(`/v1/users/update-password`, updates);
    }
    postPatient(patient) {
        return this.apis.post('/api/patients', patient);
    }
    getAllpaitns(filters) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: filters });
        return this.apis.get(`/api/patients`, httpParams);
    }
    postNotes(notes) {
        return this.apis.post('/api/notes', notes);
    }
    getAllNotes(id, filters) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: filters });
        return this.apis.get(`/api/notes/${id}`, httpParams);
    }
    postEmail(mdsg) {
        return this.apis.post('/api/sendemail', mdsg);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthService, AlertService, AccessControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-control.service */ "6fWh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessControlService", function() { return _access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"]; });






/***/ }),

/***/ "pn9B":
/*!*********************************************!*\
  !*** ./src/app/helper/to-thai-date.pipe.ts ***!
  \*********************************************/
/*! exports provided: ToThaiDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToThaiDatePipe", function() { return ToThaiDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class ToThaiDatePipe {
    transform(value, args) {
        if (moment__WEBPACK_IMPORTED_MODULE_1__(value, 'YYYY-MM-DD').isValid()) {
            const thaiDate = `${moment__WEBPACK_IMPORTED_MODULE_1__(value).format('DD/MM')}/ ${moment__WEBPACK_IMPORTED_MODULE_1__(value).get('year') + 543}`;
            return thaiDate;
        }
        else {
            return '-';
        }
    }
}
ToThaiDatePipe.ɵfac = function ToThaiDatePipe_Factory(t) { return new (t || ToThaiDatePipe)(); };
ToThaiDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toThaiDate", type: ToThaiDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToThaiDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toThaiDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "q9Dj":
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-ui/Users/users-form/users-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function() { return UsersFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UsersFormComponent {
    constructor() {
        this.dialog = false;
        this.loading = false;
        this.childSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createProjectForm();
    }
    createProjectForm() {
        this.vendorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            marital: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            EcontactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            EcontactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    onSubmit() {
        this
            .childSubmit
            .emit(this.vendorForm.value);
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(); };
UsersFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["app-users-form"]], inputs: { errorMessage: "errorMessage", dialog: "dialog", btnState$: "btnState$", loading: "loading" }, outputs: { childSubmit: "childSubmit" }, decls: 59, vars: 2, consts: [[1, "card"], [1, "card-block"], ["shape", "switch", "size", "28"], ["solid", "", 1, "btn", "btn-success", 3, "click"], ["routerLink", "/admin/users"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrStepper", "", "clrForm", "", 1, "loginForm", 3, "formGroup", "ngSubmit"], ["clrInput", "", "formControlName", "firstName", "required", ""], ["clrInput", "", "formControlName", "lastName", "required", ""], ["type", "email", "clrInput", "", "formControlName", "email", "required", ""], ["clrInput", "", "formControlName", "phone", "required", ""], ["clrInput", "", "formControlName", "address", "required", ""], ["clrInput", "", "formControlName", "city", "required", ""], ["clrInput", "", "formControlName", "gender", "required", ""], ["clrInput", "", "formControlName", "marital", "required", ""], ["clrInput", "", "formControlName", "EcontactName", "required", ""], ["clrInput", "", "formControlName", "EcontactNumber", "required", ""], ["type", "submit", 1, "btn", "btn-success"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Patients Profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersFormComponent_Template_button_click_6_listener() { return ctx.dialog = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function UsersFormComponent_Template_clr_modal_clrModalOpenChange_12_listener($event) { return ctx.dialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersFormComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Marital Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Emergency Contact Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Emergency Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.vendorForm);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStepper"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrStepperWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-form',
                templateUrl: './users-form.component.html',
                styleUrls: ['./users-form.component.css']
            }]
    }], function () { return []; }, { errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnState$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sBk1":
/*!*****************************************!*\
  !*** ./src/app/helper/helper.module.ts ***!
  \*****************************************/
/*! exports provided: HelperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperModule", function() { return HelperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _to_thai_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-thai-date.pipe */ "pn9B");




class HelperModule {
}
HelperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelperModule });
HelperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HelperModule_Factory(t) { return new (t || HelperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelperModule, { declarations: [_to_thai_date_pipe__WEBPACK_IMPORTED_MODULE_2__["ToThaiDatePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_to_thai_date_pipe__WEBPACK_IMPORTED_MODULE_2__["ToThaiDatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_to_thai_date_pipe__WEBPACK_IMPORTED_MODULE_2__["ToThaiDatePipe"]],
                exports: [_to_thai_date_pipe__WEBPACK_IMPORTED_MODULE_2__["ToThaiDatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vSsR":
/*!**********************************************************************!*\
  !*** ./src/app/views/admin-ui/Fuel/fuel-form/fuel-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: FuelFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelFormComponent", function() { return FuelFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class FuelFormComponent {
    constructor(sendIt) {
        this.sendIt = sendIt;
        this.dialog = false;
        this.loading = false;
        this.childSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.createProjectForm();
    }
    createProjectForm() {
        this.vendorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            msg: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        let finalDet = {
            msg: this.vendorForm.value.msg,
            email: sessionStorage.getItem('theemail')
        };
        this.sendIt.postEmail(finalDet).subscribe(resp => {
            alert('Done sending Email');
        });
    }
}
FuelFormComponent.ɵfac = function FuelFormComponent_Factory(t) { return new (t || FuelFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
FuelFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FuelFormComponent, selectors: [["app-fuel-form"]], inputs: { errorMessage: "errorMessage", dialog: "dialog", btnState$: "btnState$", loading: "loading" }, outputs: { childSubmit: "childSubmit" }, decls: 25, vars: 2, consts: [[1, "card"], [1, "card-block"], ["shape", "switch", "size", "28"], ["solid", "", 1, "btn", "btn-success", 3, "click"], ["routerLink", "/admin/users"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", "", 3, "formGroup", "ngSubmit"], [1, "form-block"], ["clrInput", "", "formControlName", "msg", "rows", "10", "required", "", 2, "width", "100%"], ["type", "submit", 1, "btn", "btn-success"]], template: function FuelFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuelFormComponent_Template_button_click_6_listener() { return ctx.dialog = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Email +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function FuelFormComponent_Template_clr_modal_clrModalOpenChange_12_listener($event) { return ctx.dialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FuelFormComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.vendorForm);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWVsLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuelFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fuel-form',
                templateUrl: './fuel-form.component.html',
                styleUrls: ['./fuel-form.component.scss']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnState$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | controllers-FeatureRouting-feature-module */ "controllers-FeatureRouting-feature-module").then(__webpack_require__.bind(null, /*! ./controllers/FeatureRouting/feature.module */ "bLJ4")).then((mod) => mod.FeatureModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xEpQ":
/*!*********************************!*\
  !*** ./src/app/models/users.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "yfzV":
/*!********************************************************************************************!*\
  !*** ./src/app/views/admin-ui/insuarance/insuarance-detail/insuarance-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InsuaranceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuaranceDetailComponent", function() { return InsuaranceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fuel/fuel-form/fuel-form.component */ "vSsR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Users/users-list/users-list.component */ "LrL7");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");








const _c0 = ["chart"];
const _c1 = ["chart2"];
function InsuaranceDetailComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "apx-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "apx-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("stroke", ctx_r0.chartOptions.stroke)("dataLabels", ctx_r0.chartOptions.dataLabels)("yaxis", ctx_r0.chartOptions.yaxis)("labels", ctx_r0.chartOptions.labels)("legend", ctx_r0.chartOptions.legend)("title", ctx_r0.chartOptions.title)("subtitle", ctx_r0.chartOptions.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r0.chartOptions2.series)("chart", ctx_r0.chartOptions2.chart)("xaxis", ctx_r0.chartOptions2.xaxis)("stroke", ctx_r0.chartOptions2.stroke)("dataLabels", ctx_r0.chartOptions2.dataLabels)("yaxis", ctx_r0.chartOptions2.yaxis)("labels", ctx_r0.chartOptions2.labels)("legend", ctx_r0.chartOptions2.legend)("title", ctx_r0.chartOptions2.title)("subtitle", ctx_r0.chartOptions2.subtitle);
} }
const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000');
class InsuaranceDetailComponent {
    constructor() {
        this.dayta = [];
        this.laybels = [];
        this.loader = true;
        this.tempdayta = [];
        this.chartOptions = {
            series: [
                {
                    name: "Pulse",
                    data: []
                }
            ],
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Pulse",
                align: "left"
            },
            subtitle: {
                text: "Pulse for the  Last Few Days",
                align: "left"
            },
            labels: [],
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: "left"
            }
        };
        this.chartOptions2 = {
            series: [
                {
                    name: "Temperature",
                    color: 'red',
                    data: []
                }
            ],
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Temperature",
                align: "left"
            },
            subtitle: {
                text: "Temperature for the  Last Few Days",
                align: "left"
            },
            labels: [],
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: "left"
            }
        };
    }
    ngOnInit() {
        this.getInfo();
        this.loader = false;
    }
    getInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            socket.on('pulse', (res) => {
                this.dayta = res;
            });
            socket.on('_temp', (res) => {
                this.tempdayta = res;
            });
            socket.on('_date', (res) => {
                this.laybels = res;
                this.updateCharts();
            });
        });
    }
    addData(mylabels, myData, mytemp) {
        this.chartOptions.labels = mylabels;
        this.chartOptions.series[0].data = myData;
        this.chartOptions2.labels = mylabels;
        this.chartOptions2.series[0].data = mytemp;
    }
    updateCharts() {
        if (this.dayta.length === 0 && this.tempdayta.length === 0 && this.laybels.length === 0) {
        }
        else {
            this.lastpulse = this.dayta.slice(-1);
            this.lasttemp = this.tempdayta.slice(-1);
            this.addData(this.laybels, this.dayta, this.tempdayta);
        }
        this.lastpulse = this.dayta.slice(-1);
        this.lasttemp = this.tempdayta.slice(-1);
    }
}
InsuaranceDetailComponent.ɵfac = function InsuaranceDetailComponent_Factory(t) { return new (t || InsuaranceDetailComponent)(); };
InsuaranceDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InsuaranceDetailComponent, selectors: [["app-insuarance-detail"]], viewQuery: function InsuaranceDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart2 = _t.first);
    } }, decls: 26, vars: 3, consts: [[1, "row"], [1, "col-xl-6", "col-lg-6"], [1, "card", "card-stats", "mb-4", "mb-xl-0"], [1, "card-body"], [1, "col"], [1, "card-title", "text-uppercase", "text-muted", "mb-0"], [1, "h5", "font-weight-bold", "mb-0"], [1, "col-auto"], [1, "icon", "icon-shape", "bg-danger", "text-white", "rounded-circle", "shadow"], ["class", "row", 4, "ngIf"], ["id", "chart", 1, "col-xl-12", "col-lg-12", 2, "width", "100%"], [3, "series", "chart", "xaxis", "stroke", "dataLabels", "yaxis", "labels", "legend", "title", "subtitle"], ["id", "chart2", 1, "col-xl-12", "col-lg-12", 2, "width", "100%"]], template: function InsuaranceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-fuel-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Last Temp Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Last Pulse Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InsuaranceDetailComponent_div_24_Template, 5, 20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-users-list");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lasttemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lastpulse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader === false);
    } }, directives: [_Fuel_fuel_form_fuel_form_component__WEBPACK_IMPORTED_MODULE_3__["FuelFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _Users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1YXJhbmNlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InsuaranceDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-insuarance-detail',
                templateUrl: './insuarance-detail.component.html',
                styleUrls: ['./insuarance-detail.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["chart"]
        }], chart2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["chart2"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map