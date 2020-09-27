(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["am3-account"], {
    /***/
    "../../libs/account/src/index.ts":
    /*!********************************************!*\
      !*** E:/Dev/am3/libs/account/src/index.ts ***!
      \********************************************/

    /*! exports provided: AccountModule */

    /***/
    function libsAccountSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/account.module */
      "../../libs/account/src/lib/account.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return _lib_account_module__WEBPACK_IMPORTED_MODULE_0__["AccountModule"];
      });
      /***/

    },

    /***/
    "../../libs/account/src/lib/account-routing.module.ts":
    /*!*****************************************************************!*\
      !*** E:/Dev/am3/libs/account/src/lib/account-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function libsAccountSrcLibAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
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
      "../../libs/account/src/lib/pages/index.ts");

      var ROUTES = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
      }];
      ;

      var AccountRoutingModule = function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      };

      AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AccountRoutingModule);
      /***/
    },

    /***/
    "../../libs/account/src/lib/account.module.ts":
    /*!*********************************************************!*\
      !*** E:/Dev/am3/libs/account/src/lib/account.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountModule */

    /***/
    function libsAccountSrcLibAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-routing.module */
      "../../libs/account/src/lib/account-routing.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var AccountModule = function AccountModule() {
        _classCallCheck(this, AccountModule);
      };

      AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_1__["AccountRoutingModule"]],
        exports: [_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["AccountRoutingModule"]]
      })], AccountModule);
      /***/
    },

    /***/
    "../../libs/account/src/lib/pages/account/account.component.scss":
    /*!****************************************************************************!*\
      !*** E:/Dev/am3/libs/account/src/lib/pages/account/account.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function libsAccountSrcLibPagesAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FjY291bnQvc3JjL2xpYi9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "../../libs/account/src/lib/pages/account/account.component.ts":
    /*!**************************************************************************!*\
      !*** E:/Dev/am3/libs/account/src/lib/pages/account/account.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AccountComponent */

    /***/
    function libsAccountSrcLibPagesAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AccountComponent = /*#__PURE__*/function () {
        function AccountComponent() {
          _classCallCheck(this, AccountComponent);
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccountComponent;
      }();

      AccountComponent.ctorParameters = function () {
        return [];
      };

      AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/src/lib/pages/account/account.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.component.scss */
        "../../libs/account/src/lib/pages/account/account.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AccountComponent);
      /***/
    },

    /***/
    "../../libs/account/src/lib/pages/index.ts":
    /*!******************************************************!*\
      !*** E:/Dev/am3/libs/account/src/lib/pages/index.ts ***!
      \******************************************************/

    /*! exports provided: AccountComponent */

    /***/
    function libsAccountSrcLibPagesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account/account.component */
      "../../libs/account/src/lib/pages/account/account.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return _account_account_component__WEBPACK_IMPORTED_MODULE_0__["AccountComponent"];
      });
      /***/

    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/src/lib/pages/account/account.component.html":
    /*!***************************************************************************************************************************!*\
      !*** E:/Dev/am3/node_modules/raw-loader/dist/cjs.js!E:/Dev/am3/libs/account/src/lib/pages/account/account.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsLibsAccountSrcLibPagesAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  account works!\r\n</p>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=am3-account-es5.js.map