(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["am3-meter"], {
    /***/
    "../../libs/meter/src/index.ts":
    /*!******************************************!*\
      !*** E:/Dev/am3/libs/meter/src/index.ts ***!
      \******************************************/

    /*! exports provided: MeterModule */

    /***/
    function libsMeterSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_meter_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/meter.module */
      "../../libs/meter/src/lib/meter.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MeterModule", function () {
        return _lib_meter_module__WEBPACK_IMPORTED_MODULE_0__["MeterModule"];
      });
      /***/

    },

    /***/
    "../../libs/meter/src/lib/components/index.ts":
    /*!*********************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/components/index.ts ***!
      \*********************************************************/

    /*! exports provided: MeterReadingComponent */

    /***/
    function libsMeterSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _meter_reading_meter_reading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meter-reading/meter-reading.component */
      "../../libs/meter/src/lib/components/meter-reading/meter-reading.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MeterReadingComponent", function () {
        return _meter_reading_meter_reading_component__WEBPACK_IMPORTED_MODULE_0__["MeterReadingComponent"];
      });
      /***/

    },

    /***/
    "../../libs/meter/src/lib/components/meter-reading/meter-reading.component.scss":
    /*!*******************************************************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/components/meter-reading/meter-reading.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function libsMeterSrcLibComponentsMeterReadingMeterReadingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  --background: rgb(224,103,123);\n  --background: linear-gradient(90deg, rgba(224,103,123,1) 0%, rgba(232,146,132,1) 50%, rgba(246,208,139,1) 100%);\n}\nion-card ion-card-header {\n  align-items: flex-end;\n  position: relative;\n}\nion-card ion-card-header ion-card-title {\n  --color: #FFFFFF;\n  font-size: 1.5em;\n}\nion-card ion-card-header .contract-number {\n  color: #FFFFFF;\n  position: absolute;\n  right: 16px;\n  top: 20px;\n  font-weight: bold;\n}\nion-card ion-card-content .content {\n  width: 100%;\n  display: flex;\n  color: #FFFFFF;\n  justify-content: stretch;\n}\nion-card ion-card-content .content .current,\nion-card ion-card-content .content .previous {\n  flex-grow: 1;\n}\nion-card ion-card-content .content .current .label,\nion-card ion-card-content .content .previous .label {\n  font-size: 0.9em;\n}\nion-card ion-card-content .content .previous {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbWV0ZXIvc3JjL2xpYi9jb21wb25lbnRzL21ldGVyLXJlYWRpbmcvbWV0ZXItcmVhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0dBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFLQSxrQkFBQTtBQUZKO0FBRkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSU47QUFESTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBUUEsd0JBQUE7QUFOTjtBQURNOztFQUtFLFlBQUE7QUFBUjtBQUhROztFQUNFLGdCQUFBO0FBTVY7QUFFTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBUiIsImZpbGUiOiJsaWJzL21ldGVyL3NyYy9saWIvY29tcG9uZW50cy9tZXRlci1yZWFkaW5nL21ldGVyLXJlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjI0LDEwMywxMjMpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyNCwxMDMsMTIzLDEpIDAlLCByZ2JhKDIzMiwxNDYsMTMyLDEpIDUwJSwgcmdiYSgyNDYsMjA4LDEzOSwxKSAxMDAlKTsgLy8jRTA2NzdCICNFODkyODQgI0Y2RDA4QlxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICAgIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNvbnRyYWN0LW51bWJlciB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICB0b3A6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAuY3VycmVudCxcclxuICAgICAgLnByZXZpb3VzIHtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIH1cclxuICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLnByZXZpb3VzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "../../libs/meter/src/lib/components/meter-reading/meter-reading.component.ts":
    /*!*****************************************************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/components/meter-reading/meter-reading.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MeterReadingComponent */

    /***/
    function libsMeterSrcLibComponentsMeterReadingMeterReadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeterReadingComponent", function () {
        return MeterReadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MeterReadingComponent = /*#__PURE__*/function () {
        function MeterReadingComponent() {
          _classCallCheck(this, MeterReadingComponent);
        }

        _createClass(MeterReadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MeterReadingComponent;
      }();

      MeterReadingComponent.ctorParameters = function () {
        return [];
      };

      MeterReadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meter-reading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./meter-reading.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/components/meter-reading/meter-reading.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./meter-reading.component.scss */
        "../../libs/meter/src/lib/components/meter-reading/meter-reading.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MeterReadingComponent);
      /***/
    },

    /***/
    "../../libs/meter/src/lib/meter-routing.module.ts":
    /*!*************************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/meter-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MeterRoutingModule */

    /***/
    function libsMeterSrcLibMeterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeterRoutingModule", function () {
        return MeterRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages */
      "../../libs/meter/src/lib/pages/index.ts");

      var ROUTES = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_3__["MetersComponent"]
      }];

      var MeterRoutingModule = function MeterRoutingModule() {
        _classCallCheck(this, MeterRoutingModule);
      };

      MeterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], MeterRoutingModule);
      /***/
    },

    /***/
    "../../libs/meter/src/lib/meter.module.ts":
    /*!*****************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/meter.module.ts ***!
      \*****************************************************/

    /*! exports provided: MeterModule */

    /***/
    function libsMeterSrcLibMeterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeterModule", function () {
        return MeterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages */
      "../../libs/meter/src/lib/pages/index.ts");
      /* harmony import */


      var _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meter-routing.module */
      "../../libs/meter/src/lib/meter-routing.module.ts");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components */
      "../../libs/meter/src/lib/components/index.ts");

      var MeterModule = function MeterModule() {
        _classCallCheck(this, MeterModule);
      };

      MeterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterRoutingModule"]],
        declarations: [_pages__WEBPACK_IMPORTED_MODULE_4__["MetersComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["MeterReadingComponent"]],
        exports: [_pages__WEBPACK_IMPORTED_MODULE_4__["MetersComponent"]]
      })], MeterModule);
      /***/
    },

    /***/
    "../../libs/meter/src/lib/pages/index.ts":
    /*!****************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/pages/index.ts ***!
      \****************************************************/

    /*! exports provided: MetersComponent */

    /***/
    function libsMeterSrcLibPagesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _meters_meters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meters/meters.component */
      "../../libs/meter/src/lib/pages/meters/meters.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MetersComponent", function () {
        return _meters_meters_component__WEBPACK_IMPORTED_MODULE_0__["MetersComponent"];
      });
      /***/

    },

    /***/
    "../../libs/meter/src/lib/pages/meters/meters.component.scss":
    /*!************************************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/pages/meters/meters.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function libsMeterSrcLibPagesMetersMetersComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: var(--color-content-background, --ion-color-light) ;\n}\n\nion-card-header {\n  background-color: #424C58;\n  padding: 0.6em 2em;\n}\n\nion-card-header ion-card-title {\n  --color: #ffffff;\n  font-size: 1.5em;\n}\n\n.meter-reading {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.meter-reading-grid .header ion-col {\n  padding-top: 0.5em;\n}\n\n.meter-reading-grid ion-input {\n  --background: #E2E7EC;\n  --padding-top: 2px;\n  --padding-end: 2px;\n  --padding-bottom: 2px;\n  --padding-start: 2px;\n}\n\n.meter-reading-grid .previous-value-col {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbWV0ZXIvc3JjL2xpYi9wYWdlcy9tZXRlcnMvbWV0ZXJzLmNvbXBvbmVudC5zY3NzIiwiX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUVBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFPSTtFQUNFLGtCQUFBO0FBSk47O0FBT0U7RUMzQkEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRHVCRjs7QUFHRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoibGlicy9tZXRlci9zcmMvbGliL3BhZ2VzL21ldGVycy9tZXRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQsIC0taW9uLWNvbG9yLWxpZ2h0KVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0QzU4O1xyXG4gIHBhZGRpbmc6IC42ZW0gMmVtO1xyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH0gIFxyXG59XHJcblxyXG4ubWV0ZXItcmVhZGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG4ubWV0ZXItcmVhZGluZy1ncmlkIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIGlvbi1pbnB1dC1taXhpbjtcclxuICB9XHJcbiAgLnByZXZpb3VzLXZhbHVlLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59IiwiQG1peGluIGlvbi1pbnB1dC1taXhpbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRTJFN0VDO1xyXG4gIC0tcGFkZGluZy10b3A6IDJweDtcclxuICAtLXBhZGRpbmctZW5kOiAycHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMnB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "../../libs/meter/src/lib/pages/meters/meters.component.ts":
    /*!**********************************************************************!*\
      !*** E:/Dev/am3/libs/meter/src/lib/pages/meters/meters.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MetersComponent */

    /***/
    function libsMeterSrcLibPagesMetersMetersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetersComponent", function () {
        return MetersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MetersComponent = /*#__PURE__*/function () {
        function MetersComponent() {
          _classCallCheck(this, MetersComponent);
        }

        _createClass(MetersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MetersComponent;
      }();

      MetersComponent.ctorParameters = function () {
        return [];
      };

      MetersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./meters.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/pages/meters/meters.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./meters.component.scss */
        "../../libs/meter/src/lib/pages/meters/meters.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MetersComponent);
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/components/meter-reading/meter-reading.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** E:/Dev/am3/node_modules/raw-loader/dist/cjs.js!E:/Dev/am3/libs/meter/src/lib/components/meter-reading/meter-reading.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsLibsMeterSrcLibComponentsMeterReadingMeterReadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\n  <ion-card-header>\n    <ion-card-title>Газ</ion-card-title>\n    <div class=\"contract-number\">\n      172-65\n    </div>\n  </ion-card-header>\n  <ion-card-content>\n    <!-- <ion-grid class=\"meter-reading-grid\">\n      <ion-row>\n        <ion-col>\n          Текущее\n        </ion-col>\n        <ion-col class=\"previous-value-col\">\n          Предыдущее\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input placeholder=\"Значение\"></ion-input>\n        </ion-col>\n        <ion-col class=\"previous-value-col\">\n          <ion-text>1234</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n    <div class=\"content\">\n      \n      <div class=\"current\">\n        <div class=\"label\">\n          <span>Текущее</span>\n        </div>\n        <div>\n          <input type=\"text\" />\n        </div>\n      </div>\n      <div class=\"previous\">\n        <div class=\"label\">\n          <span>Предыдущее</span>\n        </div>\n        <div>1234</div>\n      </div>\n    </div>\n\n\n  </ion-card-content>\n</ion-card>";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!../../libs/meter/src/lib/pages/meters/meters.component.html":
    /*!***********************************************************************************************************************!*\
      !*** E:/Dev/am3/node_modules/raw-loader/dist/cjs.js!E:/Dev/am3/libs/meter/src/lib/pages/meters/meters.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsLibsMeterSrcLibPagesMetersMetersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Meters</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Газ</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid class=\"meter-reading-grid\">\r\n        <ion-row>\r\n          <ion-col>\r\n            Текущее\r\n          </ion-col>\r\n          <ion-col class=\"previous-value-col\">\r\n            Предыдущее\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-input placeholder=\"Значение\"></ion-input>\r\n          </ion-col>\r\n          <ion-col class=\"previous-value-col\">\r\n            <ion-text>1234</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n  <app-meter-reading></app-meter-reading>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=am3-meter-es5.js.map