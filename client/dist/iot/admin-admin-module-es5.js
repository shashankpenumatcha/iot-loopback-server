function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    __webpack_exports__["default"] = "\n<div class=\"container\">\n  <div class=\"row\" style=\"padding:45px;\">\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n     <div  [routerLink]=\"['register/device']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n      <button style=\"border: none;background: none;\" [routerLink]=\"['register/device']\">Device Management</button>\n    </div>\n    </div>\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n      <div  [routerLink]=\"['register/board']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n        <button style=\"border: none;background: none;\" [routerLink]=\"['register/board']\">Board Management</button>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n      <div [routerLink]=\"['user-management']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n        <button style=\"border: none;background: none;\" [routerLink]=\"['user-management']\">User Management</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n";
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


    __webpack_exports__["default"] = "\n\n<div style=\"padding:15px\">\n  <form style=\"margin-bottom:15px;\">\n\n    <button style=\"height:30px;margin-left: 15px;\" type=\"submit\" (click)=\"register()\">Add Board</button>\n    <input [ngModelOptions]=\"{standalone: true}\" style=\"margin-left:15px;height:30px;padding:5px\" placeholder=\"Filter by device id\" (keyup)=\"search()\" [(ngModel)]=\"deviceId\" type=\"text\" name=\"\" id=\"\">\n  </form>\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"boards&&boards.length\">\n      <tr>\n        <th>S No.</th>\n        <th>Board Id</th>\n        <th>Registered To</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let board of boards; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{board.id}}</td>\n        <td>{{board.deviceId}}</td>\n        <td>\n          <button style=\"margin-right:15px;margin-left:15px\"  type=\"button\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(board.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"board.deviceId\" type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"deregister(board)\" >Deregister</span>\n          </button>\n\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div style=\"padding:15px\">\n  <form style=\"margin-bottom:15px;\">\n    <input placeholder=\"Enter device id\" type=\"text\" name=\"deviceId\" [(ngModel)]=\"deviceId\" />\n    <button style=\"margin-left: 15px;\" [disabled]=\"!deviceId || !deviceId.length\" type=\"submit\" (click)=\"register()\">Add Device</button>\n  </form>\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"devices&&devices.length\">\n      <tr>\n        <th>S No.</th>\n        <th>Device Id</th>\n        <th>Registered To</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let device of devices; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{device.deviceId}}</td>\n        <td>{{device.userId}}</td>\n        <td>\n          <button style=\"margin-right:15px;margin-left:15px\"  type=\"button\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(device.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"device.userId\" type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"deregister(device)\" >Deregister</span>\n          </button>\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUserManagementUserManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding:15px\">\n\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"users&&users.length\">\n      <tr>\n        <th>S No.</th>\n        <th>User Id</th>\n        <th>Email</th>\n        <th>Name</th>\n        <th>Contact</th>\n        <th>Device</th>\n        <th>Verified</th>\n\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{user.id}}</td>\n        <td>{{user.username}}</td>\n        <td>{{user.name}}</td>\n        <td>{{user.contactNumber}}</td>\n        <td>{{user.deviceId}}</td>\n        <td>{{user.emailVerified}}</td>\n\n        <td>\n\n          <button type=\"button\" style=\"margin-right:15px;margin-left:15px\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(user.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"!user.emailVerified\"  type=\"button\" class=\"btn btn-success\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"verify(user)\" >Verify</span>\n          </button>\n          <button  *ngIf=\"user.emailVerified\"  type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"unverify(user)\">Unverify</span>\n          </button>\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n";
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
    /* harmony import */


    var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-management/user-management.component */
    "./src/app/admin/user-management/user-management.component.ts");

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
    }, {
      path: 'user-management',
      component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
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
    /* harmony import */


    var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout-service.service */
    "./src/app/layout-service.service.ts");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(layoutService) {
        _classCallCheck(this, AdminComponent);

        this.layoutService = layoutService;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.header.next(true);
          this.layoutService.back.next(['/']);
          this.layoutService.title.next('Admin');
          this.layoutService.toolbar.next(null);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"]
      }];
    };

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
    /* harmony import */


    var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-management/user-management.component */
    "./src/app/admin/user-management/user-management.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__["RegisterDeviceComponent"], _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__["RegisterBoardComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLWJvYXJkL3JlZ2lzdGVyLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
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
    /* harmony import */


    var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/layout-service.service */
    "./src/app/layout-service.service.ts");

    var RegisterBoardComponent =
    /*#__PURE__*/
    function () {
      function RegisterBoardComponent(fetchData, layoutService) {
        _classCallCheck(this, RegisterBoardComponent);

        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.message = null;
      }

      _createClass(RegisterBoardComponent, [{
        key: "search",
        value: function search() {
          var _this = this;

          console.log(this.deviceId);

          if (!this.deviceId) {
            this.boards = this.allBoards;
            return;
          }

          this.boards = this.allBoards.filter(function (f) {
            return f.deviceId && f.deviceId.indexOf(_this.deviceId) >= 0;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.header.next(true);
          this.layoutService.back.next(['/admin']);
          this.layoutService.title.next('Board Management');
          this.layoutService.toolbar.next(null);
          this.getBoards();
        }
      }, {
        key: "getBoards",
        value: function getBoards() {
          var _this2 = this;

          this.fetchData.adminBoards().subscribe(function (res) {
            console.log(res);

            if (res && res.length) {
              _this2.boards = _toConsumableArray(res);
              _this2.allBoards = _toConsumableArray(res);
            }
          });
        }
      }, {
        key: "deregister",
        value: function deregister(device) {
          var _this3 = this;

          var payload = Object.assign({}, device);
          payload.deviceId = null;
          payload.deviceId_fk = null;
          this.fetchData.patchAdminBoards("?id=".concat(payload.id), payload).subscribe(function (res) {
            _this3.getBoards();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          this.fetchData.deleteAdminBoards(id).subscribe(function (r) {
            _this4.getBoards();
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this5 = this;

          this.message = null;
          this.fetchData.registerBoard({}).subscribe(function (res) {
            if (res && res.id) {
              _this5.message = "board added - ".concat(res.id);
            }

            _this5.getBoards();
          }, function (e) {
            _this5.message = "Error while adding board";
          });
        }
      }]);

      return RegisterBoardComponent;
    }();

    RegisterBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }, {
        type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLWRldmljZS9yZWdpc3Rlci1kZXZpY2UuY29tcG9uZW50LmNzcyJ9 */";
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
    /* harmony import */


    var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/layout-service.service */
    "./src/app/layout-service.service.ts");

    var RegisterDeviceComponent =
    /*#__PURE__*/
    function () {
      function RegisterDeviceComponent(fetchData, layoutService) {
        _classCallCheck(this, RegisterDeviceComponent);

        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.boards = [];
        this.message = null;
      }

      _createClass(RegisterDeviceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.header.next(true);
          this.layoutService.back.next(['/admin']);
          this.layoutService.title.next('Device Management');
          this.layoutService.toolbar.next(null);
          this.getDevices();
        }
      }, {
        key: "getDevices",
        value: function getDevices() {
          var _this6 = this;

          this.fetchData.adminDevices().subscribe(function (res) {
            _this6.devices = res;
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this7 = this;

          this.message = null;

          if (this.deviceId) {
            this.fetchData.postDevice({
              deviceId: this.deviceId,
              boards: this.boards
            }).subscribe(function (res) {
              console.log(res);
              _this7.deviceId = null;
              _this7.message = "device added succesfully - " + res.deviceId;

              _this7.getDevices();
            }, function (e) {
              _this7.message = e && e.error && e.error.error && e.error.error.message ? e.error.error.message : 'error while adding device';
            });
          }
        }
      }, {
        key: "deregister",
        value: function deregister(device) {
          var _this8 = this;

          var payload = Object.assign({}, device);
          payload.userId = null;
          this.fetchData.patchAdminDevices("?id=".concat(payload.id), payload).subscribe(function (res) {
            _this8.getDevices();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this9 = this;

          this.fetchData.deleteAdminDevices(id).subscribe(function (r) {
            _this9.getDevices();
          });
        }
      }]);

      return RegisterDeviceComponent;
    }();

    RegisterDeviceComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }, {
        type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"]
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
  },

  /***/
  "./src/app/admin/user-management/user-management.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/user-management/user-management.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUserManagementUserManagementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/user-management/user-management.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/user-management/user-management.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserManagementComponent */

  /***/
  function srcAppAdminUserManagementUserManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
      return UserManagementComponent;
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
    /* harmony import */


    var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/layout-service.service */
    "./src/app/layout-service.service.ts");

    var UserManagementComponent =
    /*#__PURE__*/
    function () {
      function UserManagementComponent(fetchData, layoutService) {
        _classCallCheck(this, UserManagementComponent);

        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.message = null;
      }

      _createClass(UserManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.header.next(true);
          this.layoutService.back.next(['/admin']);
          this.layoutService.title.next('User Management');
          this.layoutService.toolbar.next(null);
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this10 = this;

          this.fetchData.users().subscribe(function (res) {
            console.log(res);
            _this10.users = res;
          });
        }
      }, {
        key: "unverify",
        value: function unverify(user) {
          var _this11 = this;

          var payload = Object.assign({}, user);
          payload.emailVerified = false;
          this.fetchData.patchUsers("?id=".concat(payload.id), payload).subscribe(function (res) {
            _this11.getUsers();
          });
        }
      }, {
        key: "verify",
        value: function verify(user) {
          var _this12 = this;

          var payload = Object.assign({}, user);
          payload.emailVerified = true;
          this.fetchData.patchUsers("?id=".concat(payload.id), payload).subscribe(function (res) {
            _this12.getUsers();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this13 = this;

          this.fetchData.deleteUsers(id).subscribe(function (r) {
            _this13.getUsers();
          });
        }
      }]);

      return UserManagementComponent;
    }();

    UserManagementComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }, {
        type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"]
      }];
    };

    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-management.component.css */
      "./src/app/admin/user-management/user-management.component.css")).default]
    })], UserManagementComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map