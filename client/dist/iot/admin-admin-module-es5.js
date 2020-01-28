function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin works!</p>\n\n<button [routerLink]=\"['register/device']\">Register Device</button>\n<button [routerLink]=\"['register/board']\">Register Board</button>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRegisterRegisterBoardRegisterBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Register Board</p>\n\n<form>\n  <div>Device Id</div>\n  <input type=\"text\" name=\"deviceId\" [(ngModel)]=\"deviceId\" />\n  <button [disabled]=\"!deviceId || !deviceId.length\" type=\"submit\" (click)=\"verify()\">Verify Device</button>\n</form><br/>\n<button (click)=\"register()\" *ngIf=\"device\">Add Board</button><br/>\n{{message}}<br/>\n<pre>{{device|json}}</pre><br/>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRegisterRegisterDeviceRegisterDeviceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Register Device</p>\n<form>\n  <div>Device Id</div>\n  <input type=\"text\" name=\"deviceId\" [(ngModel)]=\"deviceId\" />\n  <button [disabled]=\"!deviceId || !deviceId.length\" type=\"submit\" (click)=\"register()\">Add Device</button>\n</form>\n{{message}}\n";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../blocks/chowkidaar */
    "./src/app/blocks/chowkidaar.ts");
    /* harmony import */


    var _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register-device/register-device.component */
    "./src/app/admin/register/register-device/register-device.component.ts");
    /* harmony import */


    var _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register-board/register-board.component */
    "./src/app/admin/register/register-board/register-board.component.ts");

    var routes = [{
      path: '',
      component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
      data: {
        authorities: ['authenticated', 'admin']
      }
    }, {
      path: 'register/device',
      component: _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__["RegisterDeviceComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
      data: {
        authorities: ['authenticated', 'admin']
      }
    }, {
      path: 'register/board',
      component: _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__["RegisterBoardComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
      data: {
        authorities: ['authenticated', 'admin']
      }
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register-device/register-device.component */
    "./src/app/admin/register/register-device/register-device.component.ts");
    /* harmony import */


    var _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register-board/register-board.component */
    "./src/app/admin/register/register-board/register-board.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__["RegisterDeviceComponent"], _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__["RegisterBoardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/register/register-board/register-board.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/register/register-board/register-board.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRegisterRegisterBoardRegisterBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci1ib2FyZC9yZWdpc3Rlci1ib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/register/register-board/register-board.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/register/register-board/register-board.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RegisterBoardComponent */

  /***/
  function srcAppAdminRegisterRegisterBoardRegisterBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterBoardComponent", function () {
      return RegisterBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");

    var RegisterBoardComponent =
    /*#__PURE__*/
    function () {
      function RegisterBoardComponent(fetchData) {
        _classCallCheck(this, RegisterBoardComponent);

        this.fetchData = fetchData;
        this.message = null;
      }

      _createClass(RegisterBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          this.message = null;

          if (this.device && this.device.id) {
            this.fetchData.registerBoard({
              deviceId: this.device.id
            }).subscribe(function (res) {
              if (res && res.id) {
                _this.message = "board added - ".concat(res.id);
              }

              if (!_this.device.boards) {
                _this.device.baords = [];
              }

              _this.device.boards.unshift(res);
            }, function (e) {
              _this.message = "Error while adding board";
            });
          }
        }
      }, {
        key: "verify",
        value: function verify() {
          var _this2 = this;

          this.message = null;

          if (this.deviceId) {
            this.fetchData.getDeviceByDeviceId(this.deviceId).subscribe(function (res) {
              if (res && res.id) {
                _this2.deviceId = null;
                _this2.device = res;
              }
            }, function (e) {
              _this2.message = 'error while fetching device';
              _this2.device = null;
            });
          }
        }
      }]);

      return RegisterBoardComponent;
    }();

    RegisterBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }];
    };

    RegisterBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-board.component.css */
      "./src/app/admin/register/register-board/register-board.component.css")).default]
    })], RegisterBoardComponent);
    /***/
  },

  /***/
  "./src/app/admin/register/register-device/register-device.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/register/register-device/register-device.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRegisterRegisterDeviceRegisterDeviceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci1kZXZpY2UvcmVnaXN0ZXItZGV2aWNlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/register/register-device/register-device.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/register/register-device/register-device.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RegisterDeviceComponent */

  /***/
  function srcAppAdminRegisterRegisterDeviceRegisterDeviceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterDeviceComponent", function () {
      return RegisterDeviceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");

    var RegisterDeviceComponent =
    /*#__PURE__*/
    function () {
      function RegisterDeviceComponent(fetchData) {
        _classCallCheck(this, RegisterDeviceComponent);

        this.fetchData = fetchData;
        this.boards = [];
        this.message = null;
      }

      _createClass(RegisterDeviceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this3 = this;

          this.message = null;

          if (this.deviceId) {
            this.fetchData.postDevice({
              deviceId: this.deviceId,
              boards: this.boards
            }).subscribe(function (res) {
              console.log(res);
              _this3.deviceId = null;
              _this3.message = "device added succesfully - " + res.deviceId;
            }, function (e) {
              _this3.message = e && e.error && e.error.error && e.error.error.message ? e.error.error.message : 'error while adding device';
            });
          }
        }
      }]);

      return RegisterDeviceComponent;
    }();

    RegisterDeviceComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }];
    };

    RegisterDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-device.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-device.component.css */
      "./src/app/admin/register/register-device/register-device.component.css")).default]
    })], RegisterDeviceComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map