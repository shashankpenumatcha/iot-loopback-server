(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div class=\"row\" style=\"padding:45px;\">\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n     <div  [routerLink]=\"['register/device']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n      <button style=\"border: none;background: none;\" [routerLink]=\"['register/device']\">Device Management</button>\n    </div>\n    </div>\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n      <div  [routerLink]=\"['register/board']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n        <button style=\"border: none;background: none;\" [routerLink]=\"['register/board']\">Board Management</button>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-12\" style=\"padding:15px;height:165px;\">\n      <div [routerLink]=\"['user-management']\" style=\"height:100%;cursor:pointer;border:1px solid #01010130;display:flex;justify-content: center;align-items: center;\">\n        <button style=\"border: none;background: none;\" [routerLink]=\"['user-management']\">User Management</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div style=\"padding:15px\">\n  <form style=\"margin-bottom:15px;\">\n\n    <button style=\"margin-left: 15px;\" type=\"submit\" (click)=\"register()\">Add Board</button>\n  </form>\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"boards&&boards.length\">\n      <tr>\n        <th>S No.</th>\n        <th>Board Id</th>\n        <th>Registered To</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let board of boards; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{board.id}}</td>\n        <td>{{board.deviceId}}</td>\n        <td>\n          <button style=\"margin-right:15px;margin-left:15px\"  type=\"button\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(board.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"board.deviceId\" type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"deregister(board)\" >Deregister</span>\n          </button>\n\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:15px\">\n  <form style=\"margin-bottom:15px;\">\n    <input placeholder=\"Enter device id\" type=\"text\" name=\"deviceId\" [(ngModel)]=\"deviceId\" />\n    <button style=\"margin-left: 15px;\" [disabled]=\"!deviceId || !deviceId.length\" type=\"submit\" (click)=\"register()\">Add Device</button>\n  </form>\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"devices&&devices.length\">\n      <tr>\n        <th>S No.</th>\n        <th>Device Id</th>\n        <th>Registered To</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let device of devices; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{device.deviceId}}</td>\n        <td>{{device.userId}}</td>\n        <td>\n          <button style=\"margin-right:15px;margin-left:15px\"  type=\"button\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(device.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"device.userId\" type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"deregister(device)\" >Deregister</span>\n          </button>\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:15px\">\n\n  {{message}}\n\n  <div class=\"table-responsive\">\n\n    <table stye=\"background:#ffffffcf\" class=\"table\" *ngIf=\"users&&users.length\">\n      <tr>\n        <th>S No.</th>\n        <th>User Id</th>\n        <th>Email</th>\n        <th>Verified</th>\n\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{user.id}}</td>\n        <td>{{user.username}}</td>\n        <td>{{user.emailVerified}}</td>\n\n        <td>\n\n          <button type=\"button\" style=\"margin-right:15px;margin-left:15px\" class=\"btn btn-danger\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"delete(user.id)\" >Delete</span>\n          </button>\n          <button *ngIf=\"!user.emailVerified\"  type=\"button\" class=\"btn btn-success\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"verify(user)\" >Verify</span>\n          </button>\n          <button  *ngIf=\"user.emailVerified\"  type=\"button\" class=\"btn btn-warning\">\n            <span style=\"display: inline-block;margin: 0px 7px;\" (click)=\"unverify(user)\">Unverify</span>\n          </button>\n\n\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/chowkidaar */ "./src/app/blocks/chowkidaar.ts");
/* harmony import */ var _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-device/register-device.component */ "./src/app/admin/register/register-device/register-device.component.ts");
/* harmony import */ var _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register-board/register-board.component */ "./src/app/admin/register/register-board/register-board.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/admin/user-management/user-management.component.ts");








const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
        data: { authorities: ['authenticated', 'admin'] }
    }, {
        path: 'register/device',
        component: _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__["RegisterDeviceComponent"],
        canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
        data: { authorities: ['authenticated', 'admin'] }
    }, {
        path: 'register/board',
        component: _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__["RegisterBoardComponent"],
        canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
        data: { authorities: ['authenticated', 'admin'] }
    }, {
        path: 'user-management',
        component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
        canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
        data: { authorities: ['authenticated', 'admin'] }
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let AdminComponent = class AdminComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/']);
        this.layoutService.title.next('Admin');
        this.layoutService.toolbar.next(null);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-device/register-device.component */ "./src/app/admin/register/register-device/register-device.component.ts");
/* harmony import */ var _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register-board/register-board.component */ "./src/app/admin/register/register-board/register-board.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/admin/user-management/user-management.component.ts");









let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _register_register_device_register_device_component__WEBPACK_IMPORTED_MODULE_5__["RegisterDeviceComponent"], _register_register_board_register_board_component__WEBPACK_IMPORTED_MODULE_6__["RegisterBoardComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/register/register-board/register-board.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/register/register-board/register-board.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXItYm9hcmQvcmVnaXN0ZXItYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/register/register-board/register-board.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/register/register-board/register-board.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterBoardComponent", function() { return RegisterBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout-service.service */ "./src/app/layout-service.service.ts");




let RegisterBoardComponent = class RegisterBoardComponent {
    constructor(fetchData, layoutService) {
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.message = null;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/admin']);
        this.layoutService.title.next('Board Management');
        this.layoutService.toolbar.next(null);
        this.getBoards();
    }
    getBoards() {
        this.fetchData.adminBoards().subscribe(res => {
            console.log(res);
            this.boards = res;
        });
    }
    deregister(device) {
        let payload = Object.assign({}, device);
        payload.deviceId = null;
        payload.deviceId_fk = null;
        this.fetchData.patchAdminBoards(`?id=${payload.id}`, payload).subscribe(res => {
            this.getBoards();
        });
    }
    delete(id) {
        this.fetchData.deleteAdminBoards(id).subscribe(r => {
            this.getBoards();
        });
    }
    register() {
        this.message = null;
        this.fetchData.registerBoard({}).subscribe(res => {
            if (res && res.id) {
                this.message = `board added - ${res.id}`;
            }
            this.getBoards();
        }, e => {
            this.message = `Error while adding board`;
        });
    }
};
RegisterBoardComponent.ctorParameters = () => [
    { type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
RegisterBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-board/register-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-board.component.css */ "./src/app/admin/register/register-board/register-board.component.css")).default]
    })
], RegisterBoardComponent);



/***/ }),

/***/ "./src/app/admin/register/register-device/register-device.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/register/register-device/register-device.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXItZGV2aWNlL3JlZ2lzdGVyLWRldmljZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/register/register-device/register-device.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/register/register-device/register-device.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDeviceComponent", function() { return RegisterDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout-service.service */ "./src/app/layout-service.service.ts");




let RegisterDeviceComponent = class RegisterDeviceComponent {
    constructor(fetchData, layoutService) {
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.boards = [];
        this.message = null;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/admin']);
        this.layoutService.title.next('Device Management');
        this.layoutService.toolbar.next(null);
        this.getDevices();
    }
    getDevices() {
        this.fetchData.adminDevices().subscribe(res => {
            this.devices = res;
        });
    }
    register() {
        this.message = null;
        if (this.deviceId) {
            this.fetchData.postDevice({ deviceId: this.deviceId, boards: this.boards }).subscribe(res => {
                console.log(res);
                this.deviceId = null;
                this.message = `device added succesfully - ` + res.deviceId;
                this.getDevices();
            }, e => {
                this.message = (e && e.error && e.error.error && e.error.error.message) ? e.error.error.message : 'error while adding device';
            });
        }
    }
    deregister(device) {
        let payload = Object.assign({}, device);
        payload.userId = null;
        this.fetchData.patchAdminDevices(`?id=${payload.id}`, payload).subscribe(res => {
            this.getDevices();
        });
    }
    delete(id) {
        this.fetchData.deleteAdminDevices(id).subscribe(r => {
            this.getDevices();
        });
    }
};
RegisterDeviceComponent.ctorParameters = () => [
    { type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
RegisterDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-device',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register-device/register-device.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-device.component.css */ "./src/app/admin/register/register-device/register-device.component.css")).default]
    })
], RegisterDeviceComponent);



/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout-service.service */ "./src/app/layout-service.service.ts");




let UserManagementComponent = class UserManagementComponent {
    constructor(fetchData, layoutService) {
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.message = null;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/admin']);
        this.layoutService.title.next('User Management');
        this.layoutService.toolbar.next(null);
        this.getUsers();
    }
    getUsers() {
        this.fetchData.users().subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }
    unverify(user) {
        let payload = Object.assign({}, user);
        payload.emailVerified = false;
        this.fetchData.patchUsers(`?id=${payload.id}`, payload).subscribe(res => {
            this.getUsers();
        });
    }
    verify(user) {
        let payload = Object.assign({}, user);
        payload.emailVerified = true;
        this.fetchData.patchUsers(`?id=${payload.id}`, payload).subscribe(res => {
            this.getUsers();
        });
    }
    delete(id) {
        this.fetchData.deleteUsers(id).subscribe(r => {
            this.getUsers();
        });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: src_app_shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: src_app_layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/admin/user-management/user-management.component.css")).default]
    })
], UserManagementComponent);



/***/ })

}]);