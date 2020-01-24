function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeviceDeviceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div *ngIf=\"!devices|| !devices.length\">\r\n  <h3 style=\"text-align: center;margin: 25px;\">Register your device</h3>\r\n  <p style=\"text-align: center;text-align: center;\r\n  width: 400px;\r\n  max-width: 90vw;\r\n  margin: 0 auto;\r\n  opacity: 0.5;\r\n  margin-top: 50px;\">Enter the device ID to register your device. Your device ID can be found printed on the device.</p>\r\n  <input style=\"width: 300px;\r\n  max-width: 90vw;\r\n  margin: 0 auto;\r\n  display: block;\r\n  margin-top: 20px;text-align:center;\" type=\"text\" placeholder=\"Enter device ID\" [(ngModel)]=\"deviceId\">\r\n  <button  [disabled]=\"!deviceId || !deviceId.length\" (click)=\"register(deviceId)\">Register</button>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/device/device-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/device/device-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: DeviceRoutingModule */

  /***/
  function srcAppDeviceDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceRoutingModule", function () {
      return DeviceRoutingModule;
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


    var _device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device.component */
    "./src/app/device/device.component.ts");
    /* harmony import */


    var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../blocks/chowkidaar */
    "./src/app/blocks/chowkidaar.ts");

    var routes = [{
      path: '',
      component: _device_component__WEBPACK_IMPORTED_MODULE_3__["DeviceComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_4__["Chowkidaar"]],
      data: {
        authorities: ['authenticated']
      }
    }];

    var DeviceRoutingModule = function DeviceRoutingModule() {
      _classCallCheck(this, DeviceRoutingModule);
    };

    DeviceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceRoutingModule);
    /***/
  },

  /***/
  "./src/app/device/device.component.css":
  /*!*********************************************!*\
    !*** ./src/app/device/device.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeviceDeviceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n  margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztRQUNSLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLFdBQVc7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZDVhZjE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNkNWFmMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/device/device.component.ts":
  /*!********************************************!*\
    !*** ./src/app/device/device.component.ts ***!
    \********************************************/

  /*! exports provided: DeviceComponent */

  /***/
  function srcAppDeviceDeviceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceComponent", function () {
      return DeviceComponent;
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


    var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/data.service */
    "./src/app/shared/services/data.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");

    var DeviceComponent =
    /*#__PURE__*/
    function () {
      function DeviceComponent(router, dataService, fetchData) {
        _classCallCheck(this, DeviceComponent);

        this.router = router;
        this.dataService = dataService;
        this.fetchData = fetchData;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(DeviceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscriptions.add(this.dataService.devices$.subscribe(function (devices) {
            _this.devices = devices;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "register",
        value: function register(deviceId) {
          var _this2 = this;

          if (deviceId) {
            this.fetchData.registerDevice(deviceId).subscribe(function (res) {
              if (res && res.devices && res.devices.length) {
                _this2.dataService.setDevices(res.devices);
              }

              _this2.router.navigate['/']; //TODO navigate to on-boarding
            });
          }
        }
      }]);

      return DeviceComponent;
    }();

    DeviceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_5__["FetchData"]
      }];
    };

    DeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device.component.css */
      "./src/app/device/device.component.css")).default]
    })], DeviceComponent);
    /***/
  },

  /***/
  "./src/app/device/device.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/device/device.module.ts ***!
    \*****************************************/

  /*! exports provided: DeviceModule */

  /***/
  function srcAppDeviceDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceModule", function () {
      return DeviceModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _device_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./device-routing.module */
    "./src/app/device/device-routing.module.ts");
    /* harmony import */


    var _device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device.component */
    "./src/app/device/device.component.ts");

    var DeviceModule = function DeviceModule() {
      _classCallCheck(this, DeviceModule);
    };

    DeviceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_device_component__WEBPACK_IMPORTED_MODULE_5__["DeviceComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _device_routing_module__WEBPACK_IMPORTED_MODULE_4__["DeviceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
    })], DeviceModule);
    /***/
  }
}]);
//# sourceMappingURL=device-device-module-es5.js.map