(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["am3-meter"],{

/***/ "../../libs/meter/src/index.ts":
/*!**********************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/index.ts ***!
  \**********************************************/
/*! exports provided: MeterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_meter_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/meter.module */ "../../libs/meter/src/lib/meter.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeterModule", function() { return _lib_meter_module__WEBPACK_IMPORTED_MODULE_0__["MeterModule"]; });




/***/ }),

/***/ "../../libs/meter/src/lib/meter-routing.module.ts":
/*!*****************************************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/lib/meter-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterRoutingModule", function() { return MeterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "../../libs/meter/src/lib/pages/index.ts");




const ROUTES = [
    { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_3__["MetersComponent"] }
];
let MeterRoutingModule = class MeterRoutingModule {
};
MeterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], MeterRoutingModule);



/***/ }),

/***/ "../../libs/meter/src/lib/meter.module.ts":
/*!*********************************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/lib/meter.module.ts ***!
  \*********************************************************/
/*! exports provided: MeterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterModule", function() { return MeterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "../../libs/meter/src/lib/pages/index.ts");
/* harmony import */ var _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meter-routing.module */ "../../libs/meter/src/lib/meter-routing.module.ts");






let MeterModule = class MeterModule {
};
MeterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterRoutingModule"]
        ],
        declarations: [
            _pages__WEBPACK_IMPORTED_MODULE_4__["MetersComponent"]
        ],
        exports: [
            _pages__WEBPACK_IMPORTED_MODULE_4__["MetersComponent"]
        ]
    })
], MeterModule);



/***/ }),

/***/ "../../libs/meter/src/lib/pages/index.ts":
/*!********************************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/lib/pages/index.ts ***!
  \********************************************************/
/*! exports provided: MetersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meters_meters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meters/meters.component */ "../../libs/meter/src/lib/pages/meters/meters.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetersComponent", function() { return _meters_meters_component__WEBPACK_IMPORTED_MODULE_0__["MetersComponent"]; });




/***/ }),

/***/ "../../libs/meter/src/lib/pages/meters/meters.component.scss":
/*!****************************************************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/lib/pages/meters/meters.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: var(--ion-color-content-background, --ion-color-light) ;\n}\n\nion-card-header {\n  background-color: #424C58;\n}\n\nion-card-header ion-card-title {\n  --color: #ffffff;\n}\n\n.meter-reading {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.meter-reading-grid ion-input {\n  --background: #E2E7EC;\n  --padding-top: 2px;\n  --padding-end: 2px;\n  --padding-bottom: 2px;\n  --padding-start: 2px;\n}\n\n.meter-reading-grid .previous-value-col {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbWV0ZXIvc3JjL2xpYi9wYWdlcy9tZXRlcnMvbWV0ZXJzLmNvbXBvbmVudC5zY3NzIiwiX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUVBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQU1FO0VDcEJBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QURrQkY7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImxpYnMvbWV0ZXIvc3JjL2xpYi9wYWdlcy9tZXRlcnMvbWV0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbnRlbnQtYmFja2dyb3VuZCwgLS1pb24tY29sb3ItbGlnaHQpXHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjRDNTg7XHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9ICBcclxufVxyXG5cclxuLm1ldGVyLXJlYWRpbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQGltcG9ydCAnbWl4aW5zJztcclxuLm1ldGVyLXJlYWRpbmctZ3JpZCB7XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIGlvbi1pbnB1dC1taXhpbjtcclxuICB9XHJcbiAgLnByZXZpb3VzLXZhbHVlLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59IiwiQG1peGluIGlvbi1pbnB1dC1taXhpbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRTJFN0VDO1xyXG4gIC0tcGFkZGluZy10b3A6IDJweDtcclxuICAtLXBhZGRpbmctZW5kOiAycHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "../../libs/meter/src/lib/pages/meters/meters.component.ts":
/*!**************************************************************************!*\
  !*** D:/dev/am3/am3/libs/meter/src/lib/pages/meters/meters.component.ts ***!
  \**************************************************************************/
/*! exports provided: MetersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetersComponent", function() { return MetersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MetersComponent = class MetersComponent {
    constructor() { }
    ngOnInit() {
    }
};
MetersComponent.ctorParameters = () => [];
MetersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./meters.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/pages/meters/meters.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./meters.component.scss */ "../../libs/meter/src/lib/pages/meters/meters.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MetersComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/pages/meters/meters.component.html":
/*!*******************************************************************************************************************************!*\
  !*** D:/dev/am3/am3/node_modules/raw-loader/dist/cjs.js!D:/dev/am3/am3/libs/meter/src/lib/pages/meters/meters.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Meters</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Газ</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"meter-reading-grid\">\n        <ion-row>\n          <ion-col>\n            Текущее\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            Предыдущее\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input placeholder=\"Значение\"></ion-input>\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            <ion-text>1234</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Газ</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"meter-reading-grid\">\n        <ion-row>\n          <ion-col>\n            Текущее\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            Предыдущее\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input placeholder=\"Значение\"></ion-input>\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            <ion-text>1234</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Газ</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"meter-reading-grid\">\n        <ion-row>\n          <ion-col>\n            Текущее\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            Предыдущее\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input placeholder=\"Значение\"></ion-input>\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            <ion-text>1234</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Газ</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"meter-reading-grid\">\n        <ion-row>\n          <ion-col>\n            Текущее\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            Предыдущее\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input placeholder=\"Значение\"></ion-input>\n          </ion-col>\n          <ion-col class=\"previous-value-col\">\n            <ion-text>1234</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=am3-meter-es2015.js.map