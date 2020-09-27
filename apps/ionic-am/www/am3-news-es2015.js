(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["am3-news"],{

/***/ "../../libs/news/src/index.ts":
/*!*****************************************!*\
  !*** E:/Dev/am3/libs/news/src/index.ts ***!
  \*****************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_news_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/news.module */ "../../libs/news/src/lib/news.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return _lib_news_module__WEBPACK_IMPORTED_MODULE_0__["NewsModule"]; });




/***/ }),

/***/ "../../libs/news/src/lib/news-routing.module.ts":
/*!***********************************************************!*\
  !*** E:/Dev/am3/libs/news/src/lib/news-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "../../libs/news/src/lib/pages/index.ts");




const ROUTES = [
    { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], pathMatch: 'full' }
];
let NewsRoutingModule = class NewsRoutingModule {
};
NewsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], NewsRoutingModule);



/***/ }),

/***/ "../../libs/news/src/lib/news.module.ts":
/*!***************************************************!*\
  !*** E:/Dev/am3/libs/news/src/lib/news.module.ts ***!
  \***************************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-routing.module */ "../../libs/news/src/lib/news-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let NewsModule = class NewsModule {
};
NewsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsRoutingModule"]
        ],
        exports: [
            _news_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsRoutingModule"]
        ]
    })
], NewsModule);



/***/ }),

/***/ "../../libs/news/src/lib/pages/index.ts":
/*!***************************************************!*\
  !*** E:/Dev/am3/libs/news/src/lib/pages/index.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news/news.component */ "../../libs/news/src/lib/pages/news/news.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return _news_news_component__WEBPACK_IMPORTED_MODULE_0__["NewsComponent"]; });




/***/ }),

/***/ "../../libs/news/src/lib/pages/news/news.component.scss":
/*!*******************************************************************!*\
  !*** E:/Dev/am3/libs/news/src/lib/pages/news/news.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25ld3Mvc3JjL2xpYi9wYWdlcy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "../../libs/news/src/lib/pages/news/news.component.ts":
/*!*****************************************************************!*\
  !*** E:/Dev/am3/libs/news/src/lib/pages/news/news.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent.ctorParameters = () => [];
NewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./news.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/news/src/lib/pages/news/news.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./news.component.scss */ "../../libs/news/src/lib/pages/news/news.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NewsComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/news/src/lib/pages/news/news.component.html":
/*!******************************************************************************************************************!*\
  !*** E:/Dev/am3/node_modules/raw-loader/dist/cjs.js!E:/Dev/am3/libs/news/src/lib/pages/news/news.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>News</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n      <ion-card-title>Card Title</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      Keep close to Nature's heart... and break clear away, once in awhile,\r\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=am3-news-es2015.js.map