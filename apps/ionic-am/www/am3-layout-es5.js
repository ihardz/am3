(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["am3-layout"], {
    /***/
    "../../libs/layout/src/index.ts":
    /*!*******************************************!*\
      !*** E:/Dev/am3/libs/layout/src/index.ts ***!
      \*******************************************/

    /*! exports provided: LayoutModule */

    /***/
    function libsLayoutSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/layout.module */
      "../../libs/layout/src/lib/layout.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return _lib_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"];
      });
      /***/

    },

    /***/
    "../../libs/layout/src/lib/layout-routing.module.ts":
    /*!***************************************************************!*\
      !*** E:/Dev/am3/libs/layout/src/lib/layout-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: LayoutRoutingModule */

    /***/
    function libsLayoutSrcLibLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
        return LayoutRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _tabs_layout_tabs_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs-layout/tabs-layout.component */
      "../../libs/layout/src/lib/tabs-layout/tabs-layout.component.ts");
      /* harmony import */


      var _am3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @am3/shared */
      "../../libs/shared/src/index.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var REDIECT_ROUTE = {
        path: '',
        redirectTo: _am3_shared__WEBPACK_IMPORTED_MODULE_2__["PATHS"].NEWS,
        pathMatch: 'full'
      };
      var ROUTES = [REDIECT_ROUTE, {
        path: _am3_shared__WEBPACK_IMPORTED_MODULE_2__["PATHS"].NEWS,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | am3-news */
          "am3-news").then(__webpack_require__.bind(null,
          /*! @am3/news */
          "../../libs/news/src/index.ts")).then(function (x) {
            return x.NewsModule;
          });
        }
      }, {
        path: _am3_shared__WEBPACK_IMPORTED_MODULE_2__["PATHS"].ACCOUNT,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | am3-account */
          "am3-account").then(__webpack_require__.bind(null,
          /*! @am3/account */
          "../../libs/account/src/index.ts")).then(function (x) {
            return x.AccountModule;
          });
        }
      }, {
        path: _am3_shared__WEBPACK_IMPORTED_MODULE_2__["PATHS"].METERS,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | am3-meter */
          "am3-meter").then(__webpack_require__.bind(null,
          /*! @am3/meter */
          "../../libs/meter/src/index.ts")).then(function (x) {
            return x.MeterModule;
          });
        }
      }];
      var ROOT = [{
        path: '',
        component: _tabs_layout_tabs_layout_component__WEBPACK_IMPORTED_MODULE_1__["TabsLayoutComponent"],
        children: ROUTES
      }, REDIECT_ROUTE];

      var LayoutRoutingModule = function LayoutRoutingModule() {
        _classCallCheck(this, LayoutRoutingModule);
      };

      LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ROOT)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], LayoutRoutingModule);
      /***/
    },

    /***/
    "../../libs/layout/src/lib/layout.module.ts":
    /*!*******************************************************!*\
      !*** E:/Dev/am3/libs/layout/src/lib/layout.module.ts ***!
      \*******************************************************/

    /*! exports provided: LayoutModule */

    /***/
    function libsLayoutSrcLibLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _tabs_layout_tabs_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs-layout/tabs-layout.component */
      "../../libs/layout/src/lib/tabs-layout/tabs-layout.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout-routing.module */
      "../../libs/layout/src/lib/layout-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"]],
        declarations: [_tabs_layout_tabs_layout_component__WEBPACK_IMPORTED_MODULE_1__["TabsLayoutComponent"]],
        exports: [_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"]]
      })], LayoutModule);
      /***/
    },

    /***/
    "../../libs/layout/src/lib/tabs-layout/tabs-layout.component.scss":
    /*!*****************************************************************************!*\
      !*** E:/Dev/am3/libs/layout/src/lib/tabs-layout/tabs-layout.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function libsLayoutSrcLibTabsLayoutTabsLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2xheW91dC9zcmMvbGliL3RhYnMtbGF5b3V0L3RhYnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "../../libs/layout/src/lib/tabs-layout/tabs-layout.component.ts":
    /*!***************************************************************************!*\
      !*** E:/Dev/am3/libs/layout/src/lib/tabs-layout/tabs-layout.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TabsLayoutComponent */

    /***/
    function libsLayoutSrcLibTabsLayoutTabsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsLayoutComponent", function () {
        return TabsLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _am3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @am3/shared */
      "../../libs/shared/src/index.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TabsLayoutComponent = /*#__PURE__*/function () {
        function TabsLayoutComponent() {
          _classCallCheck(this, TabsLayoutComponent);

          this.paths = _am3_shared__WEBPACK_IMPORTED_MODULE_1__["PATHS"];
        }

        _createClass(TabsLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsLayoutComponent;
      }();

      TabsLayoutComponent.ctorParameters = function () {
        return [];
      };

      TabsLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tabs-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs-layout.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!../../libs/layout/src/lib/tabs-layout/tabs-layout.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs-layout.component.scss */
        "../../libs/layout/src/lib/tabs-layout/tabs-layout.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TabsLayoutComponent);
      /***/
    },

    /***/
    "../../libs/shared/src/index.ts":
    /*!*******************************************!*\
      !*** E:/Dev/am3/libs/shared/src/index.ts ***!
      \*******************************************/

    /*! exports provided: SharedModule, PATHS */

    /***/
    function libsSharedSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/shared.module */
      "../../libs/shared/src/lib/shared.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
      });
      /* harmony import */


      var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/constants */
      "../../libs/shared/src/lib/constants/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PATHS", function () {
        return _lib_constants__WEBPACK_IMPORTED_MODULE_1__["PATHS"];
      });
      /***/

    },

    /***/
    "../../libs/shared/src/lib/constants/index.ts":
    /*!*********************************************************!*\
      !*** E:/Dev/am3/libs/shared/src/lib/constants/index.ts ***!
      \*********************************************************/

    /*! exports provided: PATHS */

    /***/
    function libsSharedSrcLibConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./paths */
      "../../libs/shared/src/lib/constants/paths.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PATHS", function () {
        return _paths__WEBPACK_IMPORTED_MODULE_0__["PATHS"];
      });
      /***/

    },

    /***/
    "../../libs/shared/src/lib/constants/paths.ts":
    /*!*********************************************************!*\
      !*** E:/Dev/am3/libs/shared/src/lib/constants/paths.ts ***!
      \*********************************************************/

    /*! exports provided: PATHS */

    /***/
    function libsSharedSrcLibConstantsPathsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PATHS", function () {
        return PATHS;
      });

      var PATHS = {
        METERS: 'meters',
        NEWS: 'news',
        ACCOUNT: 'account'
      };
      /***/
    },

    /***/
    "../../libs/shared/src/lib/shared.module.ts":
    /*!*******************************************************!*\
      !*** E:/Dev/am3/libs/shared/src/lib/shared.module.ts ***!
      \*******************************************************/

    /*! exports provided: SharedModule */

    /***/
    function libsSharedSrcLibSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!../../libs/layout/src/lib/tabs-layout/tabs-layout.component.html":
    /*!****************************************************************************************************************************!*\
      !*** E:/Dev/am3/node_modules/raw-loader/dist/cjs.js!E:/Dev/am3/libs/layout/src/lib/tabs-layout/tabs-layout.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsLibsLayoutSrcLibTabsLayoutTabsLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [tab]=\"paths.METERS\">\r\n      <ion-icon name=\"speedometer-outline\"></ion-icon>\r\n      <ion-label>Meters</ion-label>\r\n      <ion-badge>!</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"paths.NEWS\">\r\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n      <ion-label>News</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"paths.ACCOUNT\">\r\n      <ion-icon name=\"person-circle\"></ion-icon>\r\n      <ion-label>Account</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=am3-layout-es5.js.map