function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddLocationAddLocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding:25px;\">\r\n\r\n\r\n  <h3>Add Location</h3>\r\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\r\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\r\n    <input style=\"width: 100%;\r\n    height: 36px;\r\n    font-size: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #0000001a;outline:none;\" [disabled]=\"adding\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Location Name\"/>\r\n  </div>\r\n  <button style=\"border:none;background:none;position: absolute;\r\n  right: 29px;\r\n  opacity: 0.5;margin-top:20px\"  id=\"scan-btn\" (click)=\"scan(true)\"><i class=\"fas fa-sync-alt\"></i></button>\r\n   <div id=\"scan-section\">\r\n\r\n     <div style=\"    margin-top: 50px;padding: 15px;border-radius: 5px;background: #107a8b08;\" id=\"switches\" *ngIf=\"deviceLength&&!adding&&showSwitches\">\r\n        <div *ngFor=\"let device of devices | keyvalue ; let ix=index\">\r\n            <ng-container *ngIf=\"device.value\">\r\n              <div *ngFor=\"let board of device.value | keyvalue; let ixx = index\">\r\n                {{setSwitchCount(ix,ixx, board)}}\r\n\r\n                <ng-container *ngIf=\"board.value && board.value.switches; \">\r\n\r\n\r\n\r\n                  <div style=\"margin-bottom:20px;background:white;\" *ngFor=\"let switch of board.value.switches; let i = index\">\r\n\r\n\r\n                    <table style=\"width:100px;height:70px;\">\r\n                      <tr>\r\n                        <td style=\"width:50px;padding:24px\">\r\n                          <button style=\"outline:none;border:none;background:none;\" *ngIf=\"(!selectedSwitches[device.key]||!selectedSwitches[device.key][board.key]||!selectedSwitches[device.key][board.key][i])\" (click)=\"select(device.key,board.key, i)\"><i class=\"far fa-square\"></i></button>\r\n                         <button style=\"outline:none;border:none;background:none;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" (click)=\"deselect(device.key,board.key, i)\"><i class=\"far fa-check-square\"></i></button>\r\n                        </td>\r\n                        <td>\r\n                          <tr>\r\n                            <td>\r\n                              <button style=\"outline:none;padding:0px;margin:0px;border:none;background:none;\"  *ngIf=\"devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-on\"></i></button>\r\n                              <button style=\"outline:none;padding:0px;margin: 0px;border:none;background:none;\"  *ngIf=\"!devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-off\"></i></button>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td style=\"height:35px;\">\r\n                              <input style=\"outline:none;border:none;background:none;  border-bottom: 1px solid #0000001a;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" placeholder=\"label\" [(ngModel)]=\"selectedSwitches[device.key][board.key][i].label\">\r\n\r\n                            </td>\r\n                          </tr>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div *ngIf=\"!switchCount\">\r\n          <p style=\"text-align:center\">No free switches available</p>\r\n        </div>\r\n     </div>\r\n     <button style=\"margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\"  [disabled]=\"!name||adding||!switchCount\" (click)=\"addLocation()\">Add Location</button>\r\n     <div *ngIf=\"!deviceLength\">\r\n       No devices found\r\n     </div>\r\n   </div>\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>carousel works!</p>\r\n<button [routerLink]=\"['/devices/']\">Skip</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div style=\"display: flex;\">\r\n\r\n        <span class=\"panel\">\r\n\r\n\r\n          <table style=\"display:inline-block;border-right: 2px solid #ffffff61;\">\r\n            <tr>\r\n              <td>\r\n                <i *ngIf=\"onlineDevicesLength\" style=\"font-size: 18px;\" class=\"far fa-hdd\"></i>\r\n                <i *ngIf=\"!onlineDevicesLength\" style=\"font-size: 18px;\" class=\"fas fa-exclamation\"></i>\r\n              </td>\r\n              <td style=\"line-height: 18px;padding: 0px 18px;\">\r\n                <tr><td>\r\n                  <span style=\"display: block;\"><span>{{onlineDevicesLength}}</span><span> Active</span></span>\r\n\r\n                </td></tr>\r\n                <tr><td style=\"opacity: 0.5;\">\r\n                  <span style=\"display:block\">Hub<span *ngIf=\"onlineDevicesLength>1||!onlineDevicesLength\">s</span></span>\r\n\r\n                </td></tr>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <table [ngClass]=\"{'disabled': !onlineDevicesLength}\" style=\"padding:6px;display:inline-block\">\r\n            <tr  (click)=\"launchDeviceAdder()\" style=\"cursor:pointer\">\r\n              <td>\r\n                <i  style=\"font-size: 18px; margin-left: 18px;\" class=\"fas fa-plus\"></i>\r\n              </td>\r\n              <td style=\"line-height: 18px;padding: 0px 0px 0px 18px;\">\r\n                <tr><td>\r\n                  <span style=\"display: block;\">Add Location</span>\r\n\r\n                </td></tr>\r\n\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"padding:45px 0px\"  *ngIf=\"locations\" class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\r\n        <span *ngIf=\"location.key\" [ngClass]=\"{'selected' : location.key == selectedLocation}\"  (click)=\"selectedLocation = location.key\" style=\"cursor:pointer;padding:0px 15px;padding-bottom:7px;color: #10316b;text-transform: capitalize;\" >\r\n         {{location.value.name}}\r\n         <i [ngClass]=\"{'green': location.value.active}\" style=\"font-weight: 900;font-size: 8px;position: relative;\r\n         top: -2px;margin-left: 5px;color: #8080806e;\" class=\"fas fa-circle\" >\r\n         </i>\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div style=\"padding-bottom:45px\"  *ngIf=\"locations\" class=\"row\">\r\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\r\n        <ng-container *ngIf=\"location.value.switches && location.value.switches.length\">\r\n          <ng-container  *ngFor=\"let switch of location.value.switches\">\r\n            <div *ngIf=\"onlineDevices&&onlineDevices[switch.deviceId]&&\r\n            onlineDevices[switch.deviceId][switch.board]&&\r\n            onlineDevices[switch.deviceId][switch.board].switches&&\r\n            onlineDevices[switch.deviceId][switch.board].switches.length&&\r\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=undefined&&\r\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=null&&\r\n            switch.locationId == selectedLocation\" class=\"col-6 col-md-4 col-lg-3\">\r\n\r\n            <div style=\"text-align:center;height:150px;background:#fff;width: 100%;border-radius: 3px;padding: 15px;box-shadow: 0px 5px 7px 0px #cac9c921;\">\r\n              <i style=\"margin-top:30px;font-size:34px;opacity:0.5\" class=\"fas fa-tv\"></i>\r\n              <p style=\"margin-bottom:0px\" *ngIf=\"switch.name\"> {{switch.name}} </p>\r\n\r\n                <p style=\"margin-bottom:0px;margin-top:10px;\">\r\n                <span style=\"cursor:pointer;font-size:12px;font-weight:bold;position: absolute;top:5px;right:27px\" (click)=\"toggle(switch.deviceId,onlineDevices[switch.deviceId][switch.board].switches[switch.switch],switch.board,switch.switch)\">\r\n                  <span style=\"color:#2cb978\" *ngIf=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">ON</span>\r\n                  <span style=\"color:#00000040\" *ngIf=\"!onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">OFF</span>\r\n                </span>\r\n                </p>\r\n                <i style=\" position: absolute;\r\n                bottom: 7px;\r\n                right: 27px;\r\n                opacity: 0.5;\" class=\"fas fa-arrow-right\"></i >\r\n            </div>\r\n            </div>\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n  </div>\r\n  <div *ngIf=\"onlineDevicesLength&&!locationsLength \"class=\"row\">\r\n    <div style=\"text-align:center\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-map-marker-alt\"></i>\r\n      <p style=\"opacity:0.4\">Looks like you haven't added any locations yet. Please add Locations to continue.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"devices && devices.length&&!onlineDevicesLength\"class=\"row\">\r\n    <div style=\"text-align:center\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-wifi\"></i>\r\n      <p style=\"opacity:0.4\">Please make sure your device is connected to WiFi.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div  *ngIf=\"!devices || !devices.length\"class=\"row\">\r\n    <div [routerLink]=\"['/devices/']\" style=\"text-align:center;cursor:pointer\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"far fa-hdd\"></i>\r\n      <p style=\"opacity:0.4\">No Devices registered. Click here to register your device</p>\r\n    </div>\r\n  </div >\r\n\r\n  <div style=\"cursor:pointer;padding:12px;text-align: center;position:fixed;width:100%;height:50px;bottom:0px;left:0px;color:#fff;background:#3d5af1 ;\">\r\n     <p (click)=\"logout()\" style=\"text-align:center;margin:0px\">Logout</p>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display:flex;height: 100vh;width:100vw; align-items: center;\r\njustify-content: center;\">\r\n\r\n  <div style=\"    width: 370px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  padding: 25px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n\">\r\n\r\n    <form style=\"width:80%\">\r\n      <input style=\"width:100%;display:block;margin:25px 0px;\" placeholder=\"username\" type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"username\">\r\n      <input style=\"width:100%;display:block\" placeholder=\"password\" type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\">\r\n      <button [disabled]=\"!username||!password\" (click)=\"login()\">Login</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/add-location/add-location.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/add-location/add-location.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddLocationAddLocationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-location/add-location.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/add-location/add-location.component.ts ***!
    \********************************************************/

  /*! exports provided: AddLocationComponent */

  /***/
  function srcAppAddLocationAddLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function () {
      return AddLocationComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _sockets_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sockets/connect */
    "./src/app/sockets/connect.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js"); //TODO multiple device per location


    var AddLocationComponent =
    /*#__PURE__*/
    function () {
      // get available switches
      function AddLocationComponent(activeModal, connect, socket) {
        _classCallCheck(this, AddLocationComponent);

        this.activeModal = activeModal;
        this.connect = connect;
        this.socket = socket;
        this.deviceLength = null;
        this.devices = {};
        this.allDevices = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.boards = [];
        this.selectedSwitches = {};
        this.assignedSwitches = {};
        this.activeRequests = [];
        this.showSwitches = false;
        this.switchCount = 0;
        this.selectedSwitchCount = 0;
      }

      _createClass(AddLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              _this.allDevices = JSON.parse(JSON.stringify(res));
            }

            if (_this.allDevices) {
              _this.deviceLength = Object.keys(_this.allDevices).length;
            } else {
              _this.deviceLength = 0;
            }

            if (!_this.deviceLength) {
              _this.activeModal.dismiss();
            }

            _this.scan(true);
          }));
          this.socket.on('locationAdded', function (res) {
            if (!res.error) {
              if (res.name && res.deviceId) {
                _this.activeRequests.splice(_this.activeRequests.indexOf(res.deviceId), 1);
              }

              if (!_this.activeRequests.length && res.name) {
                _this.adding = false;

                _this.connect.getLocations();

                _this.activeModal.dismiss();
              }
            } else {
              _this.adding = false;
              _this.activeRequests = [];
              alert(res.error);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.socket.removeListener('locationAdded');
          this.socket.removeListener('assignedSwitches');
        }
      }, {
        key: "scan",
        value: function scan(show) {
          var _this2 = this;

          if (this.allDevices && this.deviceLength) {
            var devices = Object.keys(this.allDevices);
            devices.map(function (d) {
              _this2.socket.emit('getAssignedSwitches', d);

              return d;
            });
            this.activeRequests = devices; //this.adding = true;

            this.socket.on('assignedSwitches', function (res) {
              if (res && res.deviceId) {
                _this2.activeRequests.splice(_this2.activeRequests.indexOf(res.deviceId), 1);

                if (res.switches && res.switches.length) {
                  res.switches.some(function (s) {
                    console.log(_this2.allDevices);

                    if (_this2.allDevices[res.deviceId] && _this2.allDevices[res.deviceId][s.board] && _this2.allDevices[res.deviceId][s.board].switches // tslint:disable-next-line: radix
                    && (_this2.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === true || _this2.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === false)) {
                      // tslint:disable-next-line: radix
                      _this2.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 1);
                    }
                  });
                }
              }

              if (!_this2.activeRequests.length) {
                // this.adding = false;
                if (show) {
                  _this2.showSwitches = true;
                }

                _this2.socket.removeListener('assignedSwitches');
              }

              _this2.devices = _this2.allDevices;
            });
          }
        }
      }, {
        key: "select",
        value: function select(device, board, swtch) {
          if (!this.selectedSwitches[device]) {
            this.selectedSwitches[device] = {};
          }

          if (!this.selectedSwitches[device][board]) {
            this.selectedSwitches[device][board] = {};
          }

          if (!this.selectedSwitches[device][board][swtch]) {
            this.selectedSwitches[device][board][swtch] = {};
            this.selectedSwitchCount += 1;
          }
        }
      }, {
        key: "deselect",
        value: function deselect(device, board, swtch) {
          if (this.selectedSwitches[device] && this.selectedSwitches[device][board] && this.selectedSwitches[device][board][swtch]) {
            delete this.selectedSwitches[device][board][swtch];

            if (!Object.keys(this.selectedSwitches[device][board]).length) {
              delete this.selectedSwitches[device][board];

              if (!Object.keys(this.selectedSwitches[device]).length) {
                delete this.selectedSwitches[device];
                this.selectedSwitchCount -= 1;
              }
            }
          }
        }
      }, {
        key: "toggle",
        value: function toggle(device, value, board, swtch) {
          if (board && swtch != null && swtch !== undefined && device && this.devices && this.devices[device] && this.devices[device][board] && this.devices[device][board].switches && this.devices[device][board].switches[swtch] != null && this.devices[device][board].switches[swtch] !== undefined) {
            this.connect.toggle(device, !value, board, swtch);
          }
        }
      }, {
        key: "addLocation",
        value: function addLocation() {
          var _this3 = this;

          this.adding = true;
          this.activeRequests = Object.keys(this.selectedSwitches) || [];
          this.socket.emit('addLocation', {
            name: this.name,
            devices: this.selectedSwitches
          }, function (res) {
            if (!res || res.error) {
              _this3.adding = false;
              alert(res.error);
            }
          });
        }
      }, {
        key: "setSwitchCount",
        value: function setSwitchCount(ix, ixx, board) {
          if (ix === 0 && ixx === 0) {
            this.switchCount = 0;
          }

          if (board && board.value && board.value.switches) {
            this.switchCount += board.value.switches.length;
          }
        }
      }]);

      return AddLocationComponent;
    }();

    AddLocationComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_3__["ConnectSocket"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]
      }];
    };

    AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-location.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-location.component.css */
      "./src/app/add-location/add-location.component.css")).default]
    })], AddLocationComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blocks/chowkidaar */
    "./src/app/blocks/chowkidaar.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'carousel',
      component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]],
      data: {
        authorities: ['authenticated']
      }
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]],
      data: {
        authorities: ['authenticated']
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-admin-module */
        "admin-admin-module").then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      }
    }, {
      path: 'devices',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | device-device-module */
        "device-device-module").then(__webpack_require__.bind(null,
        /*! ./device/device.module */
        "./src/app/device/device.module.ts")).then(function (m) {
          return m.DeviceModule;
        });
      }
    }, {
      path: '**',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'iot';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.js":
  /*!*******************************!*\
    !*** ./src/app/app.config.js ***!
    \*******************************/

  /*! exports provided: Config */

  /***/
  function srcAppAppConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });

    var Config = {
      server: 'http://134.209.155.230:3001'
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _blocks_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blocks/auth-interceptor */
    "./src/app/blocks/auth-interceptor.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./add-location/add-location.component */
    "./src/app/add-location/add-location.component.ts");
    /* harmony import */


    var _app_config_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.config.js */
    "./src/app/app.config.js");

    var config = {
      url: _app_config_js__WEBPACK_IMPORTED_MODULE_14__["Config"].server,
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config)],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"]],
      entryComponents: [_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _blocks_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blocks/auth-interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/blocks/auth-interceptor.ts ***!
    \********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppBlocksAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor() {
        _classCallCheck(this, AuthInterceptor);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('token');
          var authReq = req;

          if (token) {
            authReq = req.clone({
              headers: req.headers.set('Authorization', token)
            });
          } else {
            authReq = req.clone({
              headers: req.headers.delete('Authorization')
            });
          }

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/blocks/chowkidaar.ts":
  /*!**************************************!*\
    !*** ./src/app/blocks/chowkidaar.ts ***!
    \**************************************/

  /*! exports provided: Chowkidaar */

  /***/
  function srcAppBlocksChowkidaarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chowkidaar", function () {
      return Chowkidaar;
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


    var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");

    var Chowkidaar =
    /*#__PURE__*/
    function () {
      function Chowkidaar(router, fetchData) {
        _classCallCheck(this, Chowkidaar);

        this.router = router;
        this.fetchData = fetchData;
      }

      _createClass(Chowkidaar, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this4 = this;

          var authorities = route.data['authorities'];
          var url = state.url;
          return this.fetchData.account().toPromise().then(function (res) {
            if (!authorities || authorities.length === 0) {
              return true;
            }

            if (res && res.roles && res.roles.length) {
              var valid = true;
              authorities.map(function (a) {
                if (res.roles.indexOf(a) === -1) {
                  valid = false;
                }

                return a;
              });

              if (!valid) {
                if (sessionStorage.getItem('url')) {
                  sessionStorage.setItem('url', '');

                  _this4.router.navigate(['']);
                }
              }

              sessionStorage.setItem('url', '');
              return valid;
            }

            sessionStorage.setItem('url', url);

            _this4.logout();

            return false;
          }, function (error) {
            sessionStorage.setItem('url', url);

            _this4.logout();

            return false;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.fetchData.logout().subscribe(function (r) {});
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      }]);

      return Chowkidaar;
    }();

    Chowkidaar.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__["FetchData"]
      }];
    };

    Chowkidaar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Chowkidaar);
    /***/
  },

  /***/
  "./src/app/carousel/carousel.component.css":
  /*!*************************************************!*\
    !*** ./src/app/carousel/carousel.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/carousel/carousel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carousel/carousel.component.ts ***!
    \************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel {\r\n  padding: 12px 30px;\r\n  background: #3d5af1;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #3d5af1;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYixxQkFBcUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFLQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzNkNWFmMTtcclxuICBjb2xvcjogI2ZmZjtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDE5cHggMHB4ICM2ZDY5Njk2MTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZDVhZjE7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogIzJjYjk3OCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");
    /* harmony import */


    var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../blocks/chowkidaar */
    "./src/app/blocks/chowkidaar.ts");
    /* harmony import */


    var _sockets_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sockets/connect */
    "./src/app/sockets/connect.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../add-location/add-location.component */
    "./src/app/add-location/add-location.component.ts");
    /* harmony import */


    var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/services/data.service */
    "./src/app/shared/services/data.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(fetchData, chowkidaar, connect, dataservice, config, modalService) {
        _classCallCheck(this, HomeComponent);

        this.fetchData = fetchData;
        this.chowkidaar = chowkidaar;
        this.connect = connect;
        this.dataservice = dataservice;
        this.modalService = modalService;
        this.joinedRooms = {};
        this.locations = {};
        this.roomsCount = 0;
        this.onlineDevices = null;
        this.onlineDevicesLength = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.locationsLength = 0;
        config.backdrop = 'static';
        config.keyboard = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.fetchData.registeredDevices().subscribe(function (res) {
            if (res && res.devices && res.devices.length) {
              _this5.subscriptions.add(_this5.connect.locations$.subscribe(function (res) {
                _this5.locations = Object.assign({}, res);
                _this5.locationsLength = Object.keys(_this5.locations).length;

                if (!_this5.selectedLocation && _this5.locations && Object.keys(_this5.locations)[0]) {
                  _this5.selectedLocation = Object.keys(res)[0];
                }
              }));

              _this5.subscriptions.add(_this5.connect.roomsMap.subscribe(function (roomsMap) {
                if (roomsMap) {
                  console.log(roomsMap);
                  _this5.joinedRooms = Object.assign({}, roomsMap);
                  _this5.roomsCount = Object.keys(roomsMap).length;
                }
              }));

              _this5.subscriptions.add(_this5.connect.onlineDevices$.subscribe(function (response) {
                if (response) {
                  _this5.onlineDevices = Object.assign({}, response);
                  _this5.onlineDevicesLength = Object.keys(_this5.onlineDevices).length;
                } else {
                  _this5.onlineDevices = null;
                  _this5.onlineDevicesLength = 0;
                }
              }));

              _this5.devices = Object.assign({}, res).devices;

              _this5.devices.map(function (m) {
                _this5.connect.join(m.deviceId, m);

                return m;
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.connect.leaveAll(Object.keys(this.joinedRooms));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.chowkidaar.logout();
        }
      }, {
        key: "inRoom",
        value: function inRoom(deviceId) {
          if (this.roomsCount && this.joinedRooms[deviceId]) {
            return true;
          }

          return false;
        }
      }, {
        key: "toggle",
        value: function toggle(device, value, board, swtch) {
          if (board && swtch != null && swtch !== undefined && device && this.inRoom(device) && this.onlineDevices && this.onlineDevices[device] && this.onlineDevices[device][board] && this.onlineDevices[device][board].switches && this.onlineDevices[device][board].switches[swtch] != null && this.onlineDevices[device][board].switches[swtch] !== undefined) {
            this.connect.toggle(device, !value, board, swtch);
          }
        }
      }, {
        key: "launchDeviceAdder",
        value: function launchDeviceAdder() {
          if (this.onlineDevicesLength) {
            var modalRef = this.modalService.open(_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_7__["AddLocationComponent"]);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }, {
        type: _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__["Chowkidaar"]
      }, {
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"]
      }, {
        type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      providers: [_sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n  margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7UUFDUixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixXQUFXO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNkNWFmMTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Q1YWYxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/fetch-data */
    "./src/app/shared/services/fetch-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/data.service */
    "./src/app/shared/services/data.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fetchData, router, dataService) {
        _classCallCheck(this, LoginComponent);

        this.fetchData = fetchData;
        this.router = router;
        this.dataService = dataService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          this.fetchData.login({
            username: this.username,
            password: this.password
          }).subscribe(function (res) {
            if (res.id && res.userId) {
              localStorage.setItem('token', res.id);

              _this6.fetchData.registeredDevices().subscribe(function (res) {
                console.log(res);

                if (res.devices && res.devices.length) {
                  _this6.dataService.setDevices(res.devices);

                  if (!sessionStorage.getItem('url')) {
                    _this6.router.navigate(['']);
                  } else {
                    _this6.router.navigate([sessionStorage.getItem('url')]);
                  }
                } else {
                  _this6.dataService.setDevices([]);

                  _this6.router.navigate(['carousel']);
                }
              }, function (err) {
                console.log(err);
              });
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/shared/constants/rest-endpoints.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/constants/rest-endpoints.ts ***!
    \****************************************************/

  /*! exports provided: RestEndpointConstants */

  /***/
  function srcAppSharedConstantsRestEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestEndpointConstants", function () {
      return RestEndpointConstants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RestEndpointConstants = function RestEndpointConstants() {
      _classCallCheck(this, RestEndpointConstants);
    };

    RestEndpointConstants.RestEndpoints = {
      endpoints: [{
        name: 'login',
        url: '/api/Users/login',
        method: 'post'
      }, {
        name: 'logout',
        url: '/api/Users/logout',
        method: 'post'
      }, {
        name: 'registeredDevices',
        url: '/api/Devices/registered',
        method: 'get'
      }, {
        name: 'account',
        url: '/api/account',
        method: 'get'
      }, {
        name: 'postDevice',
        url: '/api/Devices',
        method: 'post'
      }, {
        name: 'registerBoard',
        url: '/api/Boards',
        method: 'post'
      }, {
        name: 'getDeviceByDeviceId',
        url: '/api/Devices/findOne?filter={"where":{"deviceId":"{parameter}"},"include":["boards"]}',
        method: 'get'
      }, {
        name: 'registerDevice',
        url: '/api/Devices/register?id={parameter}',
        method: 'patch'
      }]
    };
    /***/
  },

  /***/
  "./src/app/shared/services/data.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/data.service.ts ***!
    \*************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppSharedServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.devicesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.devices$ = this.devicesSubject$.asObservable();
      }

      _createClass(DataService, [{
        key: "setDevices",
        value: function setDevices(devices) {
          this.devicesSubject$.next(devices);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/shared/services/fetch-data.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/services/fetch-data.ts ***!
    \***********************************************/

  /*! exports provided: FetchData */

  /***/
  function srcAppSharedServicesFetchDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchData", function () {
      return FetchData;
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


    var _service_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-endpoints */
    "./src/app/shared/services/service-endpoints.ts");

    var FetchData =
    /*#__PURE__*/
    function () {
      function FetchData(serviceEndpoints) {
        _classCallCheck(this, FetchData);

        this.serviceEndpoints = serviceEndpoints;
      }

      _createClass(FetchData, [{
        key: "login",
        value: function login(payload) {
          return this.serviceEndpoints.init().login.makeRequest(payload);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.serviceEndpoints.init().logout.makeRequest();
        }
      }, {
        key: "registeredDevices",
        value: function registeredDevices() {
          return this.serviceEndpoints.init().registeredDevices.makeRequest();
        }
      }, {
        key: "account",
        value: function account() {
          return this.serviceEndpoints.init().account.makeRequest();
        }
      }, {
        key: "postDevice",
        value: function postDevice(payload) {
          return this.serviceEndpoints.init().postDevice.makeRequest(payload);
        }
      }, {
        key: "registerBoard",
        value: function registerBoard(payload) {
          return this.serviceEndpoints.init().registerBoard.makeRequest(payload);
        }
      }, {
        key: "getDeviceByDeviceId",
        value: function getDeviceByDeviceId(param) {
          return this.serviceEndpoints.init().getDeviceByDeviceId.makeRequest(null, param);
        }
      }, {
        key: "registerDevice",
        value: function registerDevice(param) {
          return this.serviceEndpoints.init().registerDevice.makeRequest({}, param);
        }
      }]);

      return FetchData;
    }();

    FetchData.ctorParameters = function () {
      return [{
        type: _service_endpoints__WEBPACK_IMPORTED_MODULE_2__["ServiceEndpoints"]
      }];
    };

    FetchData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FetchData);
    /***/
  },

  /***/
  "./src/app/shared/services/service-endpoints.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/service-endpoints.ts ***!
    \******************************************************/

  /*! exports provided: ServiceEndpoints */

  /***/
  function srcAppSharedServicesServiceEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceEndpoints", function () {
      return ServiceEndpoints;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/constants/rest-endpoints */
    "./src/app/shared/constants/rest-endpoints.ts");

    var ServiceEndpoints =
    /*#__PURE__*/
    function () {
      function ServiceEndpoints(http) {
        _classCallCheck(this, ServiceEndpoints);

        this.http = http;
        this.endpoints = {};
        this.serviceEndpointsList = _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__["RestEndpointConstants"].RestEndpoints.endpoints;
      }

      _createClass(ServiceEndpoints, [{
        key: "defineEndpoint",
        value: function defineEndpoint(name, url, method, requestHeader) {
          var httpRequest = this.http;
          var finalUrl;
          this.endpoints[name] = {
            name: name,
            url: url,
            method: method,
            makeRequest: function makeRequest(payload, parameter, formData, requestHeader, transform) {
              if (parameter !== undefined && parameter !== null) {
                finalUrl = url.replace('{parameter}', parameter);
              } else {
                finalUrl = url;
              }

              payload = payload || {};
              var options = {};

              if (transform) {
                options.responseType = 'text';
              }

              if (requestHeader != undefined && requestHeader != null) {
                options.headers = requestHeader;
              }

              if (method === 'get') {
                return httpRequest.get(finalUrl, options);
              }

              if (method === 'post') {
                return httpRequest.post(finalUrl, payload, options);
              }

              if (method === 'patch') {
                return httpRequest.patch(finalUrl, payload, options);
              }

              if (method === 'put') {
                return httpRequest.put(finalUrl, payload, options);
              }

              if (method === 'delete') {
                return httpRequest.delete(finalUrl, options);
              }
            }
          };
        }
      }, {
        key: "init",
        value: function init(headers) {
          if (Object.keys(this.endpoints).length > 0) {
            return this.endpoints;
          }

          this.serviceEndpointsList = _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__["RestEndpointConstants"].RestEndpoints.endpoints;

          for (var i = this.serviceEndpointsList.length - 1; i >= 0; i--) {
            this.defineEndpoint(this.serviceEndpointsList[i].name, this.serviceEndpointsList[i].url, this.serviceEndpointsList[i].method, headers);
          }

          return this.endpoints;
        }
      }]);

      return ServiceEndpoints;
    }();

    ServiceEndpoints.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceEndpoints = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceEndpoints);
    /***/
  },

  /***/
  "./src/app/sockets/connect.ts":
  /*!************************************!*\
    !*** ./src/app/sockets/connect.ts ***!
    \************************************/

  /*! exports provided: ConnectSocket */

  /***/
  function srcAppSocketsConnectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectSocket", function () {
      return ConnectSocket;
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


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConnectSocket =
    /*#__PURE__*/
    function () {
      function ConnectSocket(socket) {
        _classCallCheck(this, ConnectSocket);

        this.socket = socket;
        this.rooms = {};
        this.onlineDevices = null;
        this.locations = null;
        this.roomsMap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.onlineDevices$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.onlineDevices);
        this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.locations);
        this.getSwitches();
        this.onDeviceDisconnect();
        this.initLocations();
      }

      _createClass(ConnectSocket, [{
        key: "initLocations",
        value: function initLocations() {
          var _this7 = this;

          this.socket.on('locations', function (res) {
            console.log(res);

            if (!res.error) {
              if (res.deviceId && res.switches && res.switches.length) {
                _this7.locations = {};
                res.switches.some(function (s) {
                  if (!_this7.locations[s.locationId]) {
                    _this7.locations[s.locationId] = {};
                  }

                  _this7.locations[s.locationId].name = s.locationName;

                  if (!_this7.locations[s.locationId].switches) {
                    _this7.locations[s.locationId].switches = [];
                  }

                  s.deviceId = res.deviceId;

                  _this7.locations[s.locationId].switches.push(s);
                  /*  if (!this.locations[s.locationId].devices) {
                     this.locations[s.locationId].devices = {};
                   }
                   if (!this.locations[s.locationId].devices[res.deviceId]) {
                     this.locations[s.locationId].devices[res.deviceId] = {};
                   }
                   if (! this.locations[s.locationId].devices[res.deviceId][s.board]) {
                     this.locations[s.locationId].devices[res.deviceId][s.board] = {};
                   }
                                if (!this.locations[s.locationId].devices[res.deviceId][s.board][s.switch]) {
                     this.locations[s.locationId].devices[res.deviceId][s.board][s.switch] = {};
                   }
                   this.locations[s.locationId].devices[res.deviceId][s.board][s.switch].name = s.name; */

                });

                _this7.calculateActiveLocations();

                _this7.locations$.next(_this7.locations);
              }
            }
          });
        }
      }, {
        key: "calculateActiveLocations",
        value: function calculateActiveLocations() {
          var _this8 = this;

          if (this.locations) {
            var locations = Object.keys(this.locations);

            if (locations.length) {
              locations.some(function (l) {
                _this8.locations[l].active = false;

                if (_this8.locations[l].switches) {
                  _this8.locations[l].switches.some(function (s) {
                    if (_this8.onlineDevices && _this8.onlineDevices[s.deviceId] && _this8.onlineDevices[s.deviceId][s.board] && _this8.onlineDevices[s.deviceId][s.board].switches && _this8.onlineDevices[s.deviceId][s.board].switches.length && _this8.onlineDevices[s.deviceId][s.board].switches[s.switch]) {
                      _this8.locations[l].active = true;
                      return;
                    }
                  });
                }
              });
            }
          }
        }
      }, {
        key: "getLocations",
        value: function getLocations() {
          var devices = [];

          if (this.onlineDevices) {
            devices = Object.keys(this.onlineDevices);
          }

          if (devices.length) {
            this.socket.emit('getLocations', devices);
          } else {
            this.locations = null;
            this.locations$.next(null);
          }
        }
      }, {
        key: "onDeviceDisconnect",
        value: function onDeviceDisconnect() {
          var _this9 = this;

          this.socket.on('deviceDisconnected', function (id) {
            if (id) {
              if (_this9.onlineDevices && _this9.onlineDevices[id]) {
                delete _this9.onlineDevices[id];

                if (Object.keys(_this9.onlineDevices).length) {
                  _this9.onlineDevices = null;
                }

                _this9.getLocations();

                _this9.onlineDevices$.next(_this9.onlineDevices);
              }
            }
          });
        }
      }, {
        key: "join",
        value: function join(msg, device) {
          this.joined(device);
          this.socket.emit('join', msg);
        }
      }, {
        key: "joined",
        value: function joined(device) {
          var _this10 = this;

          return this.socket.fromEvent('joined').subscribe(function (m) {
            if (m != null && typeof m === 'string') {
              _this10.rooms[m] = device;

              _this10.roomsMap.next(_this10.rooms);

              _this10.socket.emit('getBoards', m);
            }
          });
        }
      }, {
        key: "leaveAll",
        value: function leaveAll(ids) {
          var _this11 = this;

          if (ids && ids.length) {
            ids.map(function (id) {
              _this11.socket.emit('leave', id);

              return id;
            });
          }
        }
      }, {
        key: "getSwitches",
        value: function getSwitches() {
          var _this12 = this;

          this.socket.on('boards', function (response) {
            if (_this12.rooms && response && response.deviceId && response.boards) {
              if (!_this12.onlineDevices) {
                _this12.onlineDevices = {};
              }

              _this12.onlineDevices[response.deviceId] = response.boards;

              _this12.getLocations();

              _this12.onlineDevices$.next(_this12.onlineDevices);
            }
          });
        }
      }, {
        key: "toggle",
        value: function toggle(device, value, board, swtch) {
          var msg = {
            d: device,
            v: value,
            b: board,
            s: swtch
          };
          this.socket.emit('toggle', msg);
        }
      }]);

      return ConnectSocket;
    }();

    ConnectSocket.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
      }];
    };

    ConnectSocket = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConnectSocket);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\bgh45159\Desktop\mukund\iot-loopback-server\client\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map