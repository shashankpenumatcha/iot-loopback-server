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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddBoardAddBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding:25px;\">\n  <h3>Add Board - {{deviceId}}</h3>\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\n    <input style=\"width: 100%;height: 36px;font-size: 100%;border: none;border-bottom: 1px solid #0000001a;outline:none;\"\n    [disabled]=\"adding\" [(ngModel)]=\"boardId\" type=\"text\" placeholder=\"Enter Board ID\"/>\n  </div>\n\n   <div id=\"scan-section\">\n     <button style=\"margin: 0 auto;\n        display: block;\n        margin-top: 40px;\n        padding: 10px 35px;\n        background: #3d5af1;\n        border: 1px solid #3d5af1;\n        border-radius: 200px;\n        color: #fff;\"  [disabled]=\"adding||!deviceId||!boardId\" (click)=\"addBoard()\">Add Board</button>\n\n   </div>\n\n\n</div>\n";
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


    __webpack_exports__["default"] = "<div style=\"padding:25px;\">\n\n\n  <h3>Add Location</h3>\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\n    <input style=\"width: 100%;\n    height: 36px;\n    font-size: 100%;\n    border: none;\n    border-bottom: 1px solid #0000001a;outline:none;\" [disabled]=\"adding\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Location Name\"/>\n  </div>\n  <button style=\"border:none;background:none;position: absolute;\n  right: 29px;\n  opacity: 0.5;margin-top:20px\"  id=\"scan-btn\" (click)=\"scan(true)\"><i class=\"fas fa-sync-alt\"></i></button>\n   <div id=\"scan-section\">\n\n     <div style=\"    margin-top: 50px;padding: 15px;border-radius: 5px;background: #107a8b08;\" id=\"switches\" *ngIf=\"deviceLength&&!adding&&showSwitches\">\n        <div *ngFor=\"let device of devices | keyvalue ; let ix=index\">\n            <ng-container *ngIf=\"device.value\">\n              <div *ngFor=\"let board of device.value | keyvalue; let ixx = index\">\n\n                <ng-container *ngIf=\"board.value && board.value.switches; \">\n\n\n\n                  <div style=\"margin-bottom:20px;background:white;\" *ngFor=\"let switch of board.value.switches; let i = index\">\n\n\n                    <table style=\"width:100px;height:70px;\">\n                      <tr>\n                        <td style=\"width:50px;padding:24px\">\n                          <button style=\"outline:none;border:none;background:none;\" *ngIf=\"(!selectedSwitches[device.key]||!selectedSwitches[device.key][board.key]||!selectedSwitches[device.key][board.key][i])\" (click)=\"select(device.key,board.key, i)\"><i class=\"far fa-square\"></i></button>\n                         <button style=\"outline:none;border:none;background:none;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" (click)=\"deselect(device.key,board.key, i)\"><i class=\"far fa-check-square\"></i></button>\n                        </td>\n\n                            <td style=\"font-size:25px;\">\n                              <button style=\"outline:none;padding:0px;margin:0px;border:none;background:none;\"  *ngIf=\"devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-on\"></i></button>\n                              <button style=\"outline:none;padding:0px;margin: 0px;border:none;background:none;\"  *ngIf=\"!devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-off\"></i></button>\n                            </td>\n\n                            <td style=\"height:35px;padding-left:25px\">\n                              <input style=\"outline:none;border:none;background:none;  border-bottom: 1px solid #0000001a;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" placeholder=\"label\" [(ngModel)]=\"selectedSwitches[device.key][board.key][i].label\">\n\n                            </td>\n\n\n                      </tr>\n                    </table>\n\n                  </div>\n                </ng-container>\n              </div>\n            </ng-container>\n        </div>\n\n        <div *ngIf=\"!switchCount\">\n          <p style=\"text-align:center\">No free switches available</p>\n        </div>\n     </div>\n     <button style=\"margin: 0 auto;\n        display: block;\n        margin-top: 40px;\n        padding: 10px 35px;\n        background: #3d5af1;\n        border: 1px solid #3d5af1;\n        border-radius: 200px;\n        color: #fff;\"  [disabled]=\"!name||adding||!switchCount\" (click)=\"addLocation()\">Add Location</button>\n     <div *ngIf=\"!deviceLength\">\n       No devices found\n     </div>\n   </div>\n\n\n</div>\n";
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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"step==1\" class=\"step1-root\">\r\n  <div class=\"step1-head\">Setup your hub</div>\r\n  <div class=\"step1-text\">STEP 1</div>\r\n  <div class=\"step1-text\"><img height=\"250px\" src=\"content/images/connect.gif\" /></div>\r\n  <div class=\"step1-txt\">\r\n    Plug the Bluebox hub into the socket and switch it on\r\n  </div>\r\n  <div (click)=\"step=2\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\r\n</div>\r\n\r\n<div *ngIf=\"step==2\" class=\"step2-root\">\r\n  <div class=\"step2-head\">Setup your hub</div>\r\n  <div class=\"step2-text\">STEP 2</div>\r\n  <div class=\"step2-text\"><img height=\"250px\" src=\"content/images/wifi.gif\" /></div>\r\n  <div class=\"step2-txt\">\r\n    Using your browser or phone connect to wireless network called\r\n    AP_BlueBox\r\n  </div>\r\n  <div (click)='step=3' class=\"step2-btn\"><button class=\"step2-btnn\">Next</button></div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"step==3\" class=\"step2-root\">\r\n  <div class=\"step2-head\">Setup your hub</div>\r\n  <div class=\"step2-text\">STEP 3</div>\r\n  <div class=\"step2-text\"><img height=\"250px\" src=\"content/images/wifi.gif\" /></div>\r\n  <div class=\"step2-txt\">\r\n    Select to your home WiFi Network, enter password and click on connect\r\n  </div>\r\n  <div [routerLink]=\"['/devices']\" class=\"step2-btn\"><button class=\"step2-btnn\">Next</button></div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeviceListDeviceListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div style=\"box-shadow: 0px 0px 4px 0px #6d696929;\" class=\"col-12\">\n      <h4 style=\"color: #3d5af1;opacity: 0.8;margin:15px 0px 25px 0px\">Add Boards</h4>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"padding:15px;\" *ngIf=\"onlineDevicesLength\" class=\"col-6 col-md-4 col-lg-3\">\n      <ng-container *ngFor=\"let device of devices|keyvalue\">\n        <div style=\"padding:15px;margin-bottom:15px;    border: 1px solid #00000017;\n        box-shadow: 0px 4px 4px 0px #6d696929;\">\n          <div style=\"margin-bottom:5px;\">\n            <span style=\"font-weight: bold;\">\n              Device Id:\n            </span>\n            <span>{{device.key}}</span>\n          </div>\n          <div style=\"opacity:0.5;margin-bottom:25px;font-size:10px;\">\n            <i  style=\"font-size: 10px;\" class=\"fas fa-microchip\"></i>\n            {{object.keys(device.value).length}}\n          </div>\n          <div (click)=\"launchBoardAdder(device.key)\" style=\"font-size:12px;color:#3d5af1;cursor:pointer;\">\n            <i  style=\"font-size: 10px;\" class=\"fas fa-plus\"></i>\n            Add Board\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <ng-container *ngIf=\"!onlineDevicesLength\">\n      <p>No online devices</p>\n    </ng-container>\n  </div>\n</div>\n\n\n";
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


    __webpack_exports__["default"] = " <pre>\n  {{onlineDevices|json}}\n</pre>\nboards - {{boards.length}}\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div style=\"display: flex;\">\n\n        <span class=\"panel\">\n\n\n          <table style=\"display:inline-block;border-right: 2px solid #ffffff61;\">\n            <tr>\n              <td>\n                <i *ngIf=\"onlineDevicesLength\" style=\"font-size: 18px;\" class=\"far fa-hdd\"></i>\n                <i *ngIf=\"!onlineDevicesLength\" style=\"font-size: 18px;\" class=\"fas fa-exclamation\"></i>\n              </td>\n              <td style=\"line-height: 18px;padding: 0px 18px;\">\n                <tr><td>\n                  <span style=\"display: block;\"><span>{{onlineDevicesLength}}</span><span> Online</span></span>\n\n                </td></tr>\n                <tr><td style=\"opacity: 0.5;\">\n                  <span style=\"display:block\">Hub<span *ngIf=\"onlineDevicesLength>1||!onlineDevicesLength\">s</span></span>\n\n                </td></tr>\n              </td>\n            </tr>\n          </table>\n\n          <table [ngClass]=\"{'disabled': !onlineDevicesLength}\" style=\"padding:6px;display:inline-block\">\n            <tr  (click)=\"launchDeviceAdder()\" style=\"cursor:pointer\">\n              <td>\n                <i  style=\"font-size: 18px; margin-left: 18px;\" class=\"fas fa-plus\"></i>\n              </td>\n              <td style=\"line-height: 18px;padding: 0px 0px 0px 18px;\">\n                <tr><td>\n                  <span style=\"display: block;\">Add Location</span>\n\n                </td></tr>\n\n              </td>\n            </tr>\n          </table>\n\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"padding:45px 0px\"  *ngIf=\"locations\" class=\"row\">\n    <div class=\"col-12\">\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\n        <span *ngIf=\"location.key\" [ngClass]=\"{'selected' : location.key == selectedLocation}\"  (click)=\"selectedLocation = location.key\" style=\"cursor:pointer;padding:0px 15px;padding-bottom:7px;color: #10316b;text-transform: capitalize;\" >\n         {{location.value.name}}\n         <i [ngClass]=\"{'green': location.value.active}\" style=\"font-weight: 900;font-size: 8px;position: relative;\n         top: -2px;margin-left: 5px;color: #8080806e;\" class=\"fas fa-circle\" >\n         </i>\n        </span>\n      </ng-container>\n    </div>\n  </div>\n  <div style=\"padding-bottom:45px\"  *ngIf=\"locations\" class=\"row\">\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\n        <ng-container *ngIf=\"location.value.switches && location.value.switches.length\">\n          <ng-container  *ngFor=\"let switch of location.value.switches\">\n            <div *ngIf=\"onlineDevices&&onlineDevices[switch.deviceId]&&\n            onlineDevices[switch.deviceId][switch.board]&&\n            onlineDevices[switch.deviceId][switch.board].switches&&\n            onlineDevices[switch.deviceId][switch.board].switches.length&&\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=undefined&&\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=null&&\n            switch.locationId == selectedLocation\" class=\"col-6 col-md-4 col-lg-3\">\n\n            <div style=\"text-align:center;height:150px;background:#fff;width: 100%;border-radius: 3px;padding: 15px;box-shadow: 0px 5px 7px 0px #cac9c921;\">\n              <i style=\"margin-top:30px;font-size:34px;opacity:0.5\" class=\"fas fa-tv\"></i>\n              <p style=\"margin-bottom:0px\" *ngIf=\"switch.name\"> {{switch.name}} </p>\n\n                <p style=\"margin-bottom:0px;margin-top:10px;\">\n                <span style=\"cursor:pointer;font-size:12px;font-weight:bold;position: absolute;top:5px;right:27px\" (click)=\"toggle(switch.deviceId,onlineDevices[switch.deviceId][switch.board].switches[switch.switch],switch.board,switch.switch)\">\n                  <span style=\"color:#2cb978\" *ngIf=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">ON</span>\n                  <span style=\"color:#00000040\" *ngIf=\"!onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">OFF</span>\n                </span>\n                </p>\n                <i style=\" position: absolute;\n                bottom: 7px;\n                right: 27px;\n                opacity: 0.5;\" class=\"fas fa-arrow-right\"></i >\n            </div>\n            </div>\n          </ng-container>\n\n        </ng-container>\n      </ng-container>\n\n\n  </div>\n  <div *ngIf=\"onlineDevicesLength&&!locationsLength \"class=\"row\">\n    <div [routerLink]=\"['/device-list']\" *ngIf=\"!boards||!boards.length\" style=\"cursor:pointer;text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-microchip\"></i>\n      <p style=\"opacity:0.4\">No boards found. Click here to add a board.</p>\n    </div>\n    <div *ngIf=\"boards&&boards.length\" style=\"text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-map-marker-alt\"></i>\n      <p style=\"opacity:0.4\">Looks like you haven't added any locations yet. Please add Locations to continue.</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"devices && devices.length&&!onlineDevicesLength\"class=\"row\">\n    <div style=\"text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-wifi\"></i>\n      <p style=\"opacity:0.4\">Please make sure your device is connected to WiFi.</p>\n    </div>\n  </div>\n\n  <div  *ngIf=\"!devices || !devices.length\"class=\"row\">\n    <div [routerLink]=\"['/devices/']\" style=\"text-align:center;cursor:pointer\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"far fa-hdd\"></i>\n      <p style=\"opacity:0.4\">No Devices registered. Click here to register your device</p>\n    </div>\n  </div >\n\n  <div style=\"cursor:pointer;padding:12px;text-align: center;position:fixed;width:100%;height:50px;bottom:0px;left:0px;color:#fff;background:#3d5af1 ;\">\n     <p (click)=\"logout()\" style=\"text-align:center;margin:0px\">Logout</p>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"land-root\">\n  <div class=\"land-help\"><img src=\"content/images/help.png\" class=\"landhelp\"></div>\n  <div class=\"land-top\">\n    <img src=\"content/images/logo.png\" height=\"200px\" class=\"land-logo\" />\n    <div class=\"appname\">BlueBox IoT</div>\n  </div>\n  <div class=\"land-buttons\">\n    <button [routerLink]=\"['/login']\" class=\"land-loginbtn\">Login</button>\n    <button [routerLink]=\"['/signup']\" class=\"land-regbtn\">Signup</button>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "\n\n\n<div class=\"login-root\">\n  <div class=\"login-head\">Login</div>\n  <div class=\"login-body\">\n\n    <div class=\"loginbdy-up1\"></div>\n\n    <div class=\"loginbdy-up\">\n    <div class=\"loginimg\"><img height=\"150px\" src=\"content/images/login.png\"/></div>\n\n    <input [(ngModel)]=\"username\" class=\"logininp\" placeholder=\"Username\" name=\"username\" id=\"username\">\n\n    <input [(ngModel)]=\"password\" class=\"logininp\" placeholder=\"Password\" type=\"password\" name=\"password\" id=\"password\">\n\n\n\n    </div>\n    <div class=\"loginbdy-down\"></div>\n  </div>\n  <div class=\"loginister-buttons\">\n    <button  [disabled]=\"!username||!password\" (click)=\"login()\" class=\"loginister-btn\">Login</button>\n\n  </div>\n\n<p *ngIf=\"error\" class=\"error\">{{error}}</p>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScheduleScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>schedule works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-root\">\n  <div class=\"register-head\">Signup</div>\n  <div class=\"register-body\">\n\n    <div class=\"regbdy-up1\"></div>\n    <div class=\"lheadtext\"><p>Dont have an account yet?</p></div>\n    <div class=\"lheadtext\"><img src=\"content/images/singup.png\" height=\"100px\"></div>\n\n\n    <div class=\"regbdy-up\">\n\n    <input [(ngModel)]=\"username\" class=\"reginp\" placeholder=\"Username\">\n\n    <input [(ngModel)]=\"email\" class=\"reginp\" placeholder=\"Email\">\n\n    <input [(ngModel)]=\"password\" class=\"reginp\" placeholder=\"password\" type=\"password\">\n\n    </div>\n    <div class=regbdy-up2><input [(ngModel)]=\"terms\" type=\"checkbox\"></div>\n    <div class=regbdy-up2> <br/><p> I Agree to terms & conditions</p></div>\n    <div class=\"regbdy-down\"></div>\n  </div>\n  <div class=\"register-buttons\">\n    <button (click)=\"signup()\" [disabled]=\"!username||!email||!password||!terms\" class=\"register-btn\">Register</button>\n  </div>\n  <p class=\"error\" *ngIf=\"error\"> {{error}}</p>\n  <p class=\"message\" *ngIf=\"success\">Sign up success. A verification email has been sent to your email account. <span style=\"cursor:pointer\" [routerLink]=\"['/login']\">Proceed to login</span></p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifiedVerifiedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<div class=\"login-root\">\n  <div class=\"login-head\">Email Verification</div>\n  <div style=\"margin-top:150px\" class=\"login-body\">\n    <p style=\"text-align: center;\">Your email has been verified successfully.</p>\n    <p [routerLink]=\"['/login']\" style=\"cursor:pointer;text-align: center;\">Proceed to login</p>\n\n\n  </div>\n\n\n</div>\n";
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
  "./src/app/add-board/add-board.component.css":
  /*!***************************************************!*\
    !*** ./src/app/add-board/add-board.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddBoardAddBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9hcmQvYWRkLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-board/add-board.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/add-board/add-board.component.ts ***!
    \**************************************************/

  /*! exports provided: AddBoardComponent */

  /***/
  function srcAppAddBoardAddBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBoardComponent", function () {
      return AddBoardComponent;
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


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _sockets_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sockets/connect */
    "./src/app/sockets/connect.ts");

    var AddBoardComponent =
    /*#__PURE__*/
    function () {
      function AddBoardComponent(activeModal, socket, connect) {
        _classCallCheck(this, AddBoardComponent);

        this.activeModal = activeModal;
        this.socket = socket;
        this.connect = connect;
      }

      _createClass(AddBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.socket.on('board_added', function (res) {
            if (!res.error) {
              _this.adding = false;

              if (!_this.adding && res.boardId) {
                _this.connect.getSwitches();

                _this.activeModal.dismiss();
              }
            } else {
              _this.adding = false;
              alert(res.error);
            }
          });
        }
      }, {
        key: "addBoard",
        value: function addBoard() {
          var _this2 = this;

          this.adding = true;
          this.socket.emit('addBoard', {
            boardId: this.boardId,
            deviceId: this.deviceId,
            token: localStorage.getItem('token')
          }, function (res) {
            if (!res || res.error) {
              _this2.adding = false;
              alert(res.error);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socket.removeListener('board_added');
        }
      }]);

      return AddBoardComponent;
    }();

    AddBoardComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
      }, {
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddBoardComponent.prototype, "deviceId", void 0);
    AddBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-board.component.css */
      "./src/app/add-board/add-board.component.css")).default]
    })], AddBoardComponent);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbG9jYXRpb24vYWRkLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
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
          var _this3 = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              _this3.allDevices = JSON.parse(JSON.stringify(res));
            }

            if (_this3.allDevices) {
              _this3.deviceLength = Object.keys(_this3.allDevices).length;
            } else {
              _this3.deviceLength = 0;
            }

            if (!_this3.deviceLength) {
              _this3.activeModal.dismiss();
            }

            _this3.scan(true);
          }));
          this.socket.on('locationAdded', function (res) {
            if (!res.error) {
              if (res.name && res.deviceId) {
                _this3.activeRequests.splice(_this3.activeRequests.indexOf(res.deviceId), 1);
              }

              if (!_this3.activeRequests.length && res.name) {
                _this3.adding = false;

                _this3.connect.getLocations();

                _this3.activeModal.dismiss();
              }
            } else {
              _this3.adding = false;
              _this3.activeRequests = [];
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
          var _this4 = this;

          if (this.allDevices && this.deviceLength) {
            var devices = Object.keys(this.allDevices);
            devices.map(function (d) {
              _this4.socket.emit('getAssignedSwitches', d);

              return d;
            });
            this.activeRequests = devices; //this.adding = true;

            this.socket.on('assignedSwitches', function (res) {
              if (res && res.deviceId) {
                _this4.activeRequests.splice(_this4.activeRequests.indexOf(res.deviceId), 1);

                if (res.switches && res.switches.length) {
                  res.switches.some(function (s) {
                    console.log(_this4.allDevices);

                    if (_this4.allDevices[res.deviceId] && _this4.allDevices[res.deviceId][s.board] && _this4.allDevices[res.deviceId][s.board].switches // tslint:disable-next-line: radix
                    && (_this4.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === true || _this4.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === false)) {
                      // tslint:disable-next-line: radix
                      _this4.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 1);
                    }
                  });
                }
              }

              if (!_this4.activeRequests.length) {
                // this.adding = false;
                if (show) {
                  _this4.showSwitches = true;
                }

                _this4.socket.removeListener('assignedSwitches');
              }

              _this4.devices = _this4.allDevices;
              var dk = Object.keys(_this4.devices);
              dk.map(function (d, ix) {
                var bk = Object.keys(_this4.devices[d]);
                bk.map(function (b, ixx) {
                  _this4.setSwitchCount(ix, ixx, _this4.devices[d][b]);

                  return b;
                });
                return d;
              });
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
          var _this5 = this;

          this.adding = true;
          this.activeRequests = Object.keys(this.selectedSwitches) || [];
          this.socket.emit('addLocation', {
            name: this.name,
            devices: this.selectedSwitches
          }, function (res) {
            if (!res || res.error) {
              _this5.adding = false;
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

          if (board && board.switches) {
            this.switchCount += board.switches.length;
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
    /* harmony import */


    var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule/schedule.component */
    "./src/app/schedule/schedule.component.ts");
    /* harmony import */


    var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./device-list/device-list.component */
    "./src/app/device-list/device-list.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _verified_verified_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./verified/verified.component */
    "./src/app/verified/verified.component.ts");

    var routes = [{
      path: 'verified',
      component: _verified_verified_component__WEBPACK_IMPORTED_MODULE_11__["VerifiedComponent"]
    }, {
      path: 'signup',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'welcome',
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"]
    }, {
      path: 'carousel',
      component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]],
      data: {
        authorities: ['authenticated']
      }
    }, {
      path: 'device-list',
      component: _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__["DeviceListComponent"],
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
      path: 'schedules',
      component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"],
      canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]],
      data: {
        authorities: ['authenticated']
      }
    }, {
      path: '**',
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
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


    var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./schedule/schedule.component */
    "./src/app/schedule/schedule.component.ts");
    /* harmony import */


    var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./device-list/device-list.component */
    "./src/app/device-list/device-list.component.ts");
    /* harmony import */


    var _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./add-board/add-board.component */
    "./src/app/add-board/add-board.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _verified_verified_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./verified/verified.component */
    "./src/app/verified/verified.component.ts");

    var config = {
      url: 'http://shashank.local:3001',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config)],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"], _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleComponent"], _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_15__["DeviceListComponent"], _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__["LandingPageComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _verified_verified_component__WEBPACK_IMPORTED_MODULE_19__["VerifiedComponent"]],
      entryComponents: [_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"], _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"]],
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
          var _this6 = this;

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

                  _this6.router.navigate(['']);
                }
              }

              sessionStorage.setItem('url', '');
              return valid;
            }

            sessionStorage.setItem('url', url);

            _this6.logout();

            return false;
          }, function (error) {
            sessionStorage.setItem('url', url);

            _this6.logout();

            return false;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.fetchData.logout().subscribe(function (r) {});
          localStorage.removeItem('token');
          this.router.navigate(['/welcome']);
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.step1-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n.step1-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.step1-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.step1-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.step1-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.step2-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n.step2-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.step2-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.step2-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.step2-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFLQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJjYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uc3RlcDEtaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdGVwMS10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zdGVwMS10eHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zdGVwMS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwMS1idG5uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiNjAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnN0ZXAyLWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN0ZXAyLXR4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnN0ZXAyLWJ0bm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI2MDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RlcDItYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
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

        this.step = 1;
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
  "./src/app/device-list/device-list.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/device-list/device-list.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeviceListDeviceListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtbGlzdC9kZXZpY2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/device-list/device-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/device-list/device-list.component.ts ***!
    \******************************************************/

  /*! exports provided: DeviceListComponent */

  /***/
  function srcAppDeviceListDeviceListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function () {
      return DeviceListComponent;
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


    var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sockets/connect */
    "./src/app/sockets/connect.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../add-board/add-board.component */
    "./src/app/add-board/add-board.component.ts");

    var DeviceListComponent =
    /*#__PURE__*/
    function () {
      function DeviceListComponent(connect, router, config, modalService) {
        _classCallCheck(this, DeviceListComponent);

        this.connect = connect;
        this.router = router;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.object = Object;
      }

      _createClass(DeviceListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              console.log(res);
              _this7.devices = Object.assign({}, res);
              _this7.onlineDevicesLength = Object.keys(_this7.devices).length;
            }

            if (!_this7.onlineDevicesLength) {
              _this7.router.navigateByUrl('/');
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "launchBoardAdder",
        value: function launchBoardAdder(deviceId) {
          if (deviceId) {
            var modalRef = this.modalService.open(_add_board_add_board_component__WEBPACK_IMPORTED_MODULE_6__["AddBoardComponent"], {
              backdrop: 'static',
              keyboard: false
            });
            modalRef.componentInstance.deviceId = deviceId;
          }
        }
      }]);

      return DeviceListComponent;
    }();

    DeviceListComponent.ctorParameters = function () {
      return [{
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    DeviceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-list.component.css */
      "./src/app/device-list/device-list.component.css")).default]
    })], DeviceListComponent);
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


    __webpack_exports__["default"] = ".panel {\r\n  padding: 12px 30px;\r\n  background: #3d5af1;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #3d5af1;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IscUJBQXFCO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4Qzs7O0FBR0E7RUFDRSxnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7O0FBS0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjM2Q1YWYxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA3cHggMTlweCAwcHggIzZkNjk2OTYxO1xyXG59XHJcblxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNkNWFmMTtcclxufVxyXG5cclxuLmRpc2FibGVke1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiAjMmNiOTc4IWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
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
        this.boards = [];
        config.backdrop = 'static';
        config.keyboard = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.fetchData.registeredDevices().subscribe(function (res) {
            if (res && res.devices && res.devices.length) {
              _this8.subscriptions.add(_this8.connect.locations$.subscribe(function (res) {
                _this8.locations = Object.assign({}, res);
                _this8.locationsLength = Object.keys(_this8.locations).length;

                if (!_this8.selectedLocation && _this8.locations && Object.keys(_this8.locations)[0]) {
                  _this8.selectedLocation = Object.keys(res)[0];
                }
              }));

              _this8.subscriptions.add(_this8.connect.roomsMap.subscribe(function (roomsMap) {
                if (roomsMap) {
                  console.log(roomsMap);
                  _this8.joinedRooms = Object.assign({}, roomsMap);
                  _this8.roomsCount = Object.keys(roomsMap).length;
                }
              }));

              _this8.subscriptions.add(_this8.connect.onlineDevices$.subscribe(function (response) {
                if (response) {
                  _this8.onlineDevices = Object.assign({}, response);
                  _this8.onlineDevicesLength = Object.keys(_this8.onlineDevices).length;
                } else {
                  _this8.onlineDevices = null;
                  _this8.onlineDevicesLength = 0;
                }
              }));

              _this8.subscriptions.add(_this8.connect.boards$.subscribe(function (response) {
                _this8.boards = response;
              }));

              _this8.devices = Object.assign({}, res).devices;

              _this8.devices.map(function (m) {
                _this8.connect.join(m.deviceId, m);

                return m;
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe(); // this.connect.leaveAll(Object.keys(this.joinedRooms));
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
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingPageLandingPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".land-root {\r\n  display: grid;\r\n  grid-template-rows: 10% 60% 30%;\r\n  height: 100vh;\r\n  width: 600px;\r\n    max-width: 100vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.land-buttons {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.land-loginbtn {\r\n  background-color: #282c34;\r\n  border-radius: 8px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-regbtn {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  border: 2px solid #282c34;\r\n  outline: none;\r\n  color: #282c34;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-top {\r\n  margin: auto auto;\r\n}\r\n\r\n.land-logo {\r\n  display: block;\r\n  -webkit-animation: rotate 3s infinite;\r\n          animation: rotate 3s infinite;\r\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n          animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.appname {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n}\r\n\r\n.landhelp {\r\n  padding: 1rem;\r\n}\r\n\r\n.land-help {\r\n  display: grid;\r\n  justify-content: end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFlBQVk7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsNkRBQXFEO1VBQXJELHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImxhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kLXJvb3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgNjAlIDMwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxhbmQtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5sYW5kLWxvZ2luYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5sYW5kLXJlZ2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyODJjMzQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5sYW5kLXRvcCB7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5sYW5kLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLCAwLCAwLjUsIDEpO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5hcHBuYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMjgyYzM0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGFuZGhlbHAge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5sYW5kLWhlbHAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
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

    var LandingPageComponent =
    /*#__PURE__*/
    function () {
      function LandingPageComponent(router) {
        _classCallCheck(this, LandingPageComponent);

        this.router = router;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.css */
      "./src/app/landing-page/landing-page.component.css")).default]
    })], LandingPageComponent);
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n\r\n.login-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n\r\n.login-head {\r\n  display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.logininp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  margin: 1rem auto;\r\n  border:none;\r\n}\r\n\r\n\r\n.loginbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 4rem;\r\n}\r\n\r\n\r\n.loginister-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.loginister-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n\r\n.loginimg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\n.fpasssi {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOzs7QUFHcEY7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7O0FBRUE7RUFDRSxhQUFhO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5cclxuLmxvZ2luLXJvb3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvIGF1dG8gYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbmlucCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMThyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4ubG9naW5iZHktdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbn1cclxuXHJcbi5sb2dpbmlzdGVyLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dpbmlzdGVyLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLmxvZ2luaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mcGFzc3NpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */";
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
          var _this9 = this;

          this.error = null;
          this.fetchData.login({
            username: this.username,
            password: this.password
          }).subscribe(function (res) {
            if (res.id && res.userId) {
              localStorage.setItem('token', res.id);

              _this9.fetchData.account().subscribe(function (res) {
                if (!res.emailVerified) {
                  _this9.error = "Email not verified, please check your email";
                } else {
                  _this9.fetchData.registeredDevices().subscribe(function (res) {
                    console.log(res);

                    if (res.devices && res.devices.length) {
                      _this9.dataService.setDevices(res.devices);

                      if (!sessionStorage.getItem('url')) {
                        _this9.router.navigate(['']);
                      } else {
                        _this9.router.navigate([sessionStorage.getItem('url')]);
                      }
                    } else {
                      _this9.dataService.setDevices([]);

                      _this9.router.navigate(['carousel']);
                    }
                  }, function (err) {
                    console.log(err);
                  });
                }
              }, function (err) {
                _this9.error = "Account not found";
              });
            }
          }, function (err) {
            console.log(err);
            console.log(err.error);

            if (err && err.error && err.error && err.error.error.message) {
              _this9.error = err.error.error.message;
            }
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
  "./src/app/schedule/schedule.component.css":
  /*!*************************************************!*\
    !*** ./src/app/schedule/schedule.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScheduleScheduleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/schedule/schedule.component.ts":
  /*!************************************************!*\
    !*** ./src/app/schedule/schedule.component.ts ***!
    \************************************************/

  /*! exports provided: ScheduleComponent */

  /***/
  function srcAppScheduleScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () {
      return ScheduleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScheduleComponent =
    /*#__PURE__*/
    function () {
      function ScheduleComponent() {
        _classCallCheck(this, ScheduleComponent);
      }

      _createClass(ScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScheduleComponent;
    }();

    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.component.css */
      "./src/app/schedule/schedule.component.css")).default]
    })], ScheduleComponent);
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
        name: 'signup',
        url: '/api/Customers',
        method: 'post'
      }, {
        name: 'login',
        url: '/api/Customers/login',
        method: 'post'
      }, {
        name: 'logout',
        url: '/api/Customers/logout',
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
        key: "signup",
        value: function signup(payload) {
          return this.serviceEndpoints.init().signup.makeRequest(payload);
        }
      }, {
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
  "./src/app/sign-up/sign-up.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.register-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n.register-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.reginp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem auto;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  border:none;\r\n}\r\n\r\n.regbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.register-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.register-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.regbdy-up2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.lheadtext {\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.message{\r\n  color:green;\r\n  text-align:center;\r\n  font-weight: 14px;\r\n}\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjs7QUFFcEY7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLDJDQUEyQztBQUM3Qzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4ucmVnaXN0ZXItcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJlZ2lucCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMThyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4ucmVnYmR5LXVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiNjAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnYmR5LXVwMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5saGVhZHRleHQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjgyYzM0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5tZXNzYWdle1xyXG4gIGNvbG9yOmdyZWVuO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(fetchData) {
        _classCallCheck(this, SignUpComponent);

        this.fetchData = fetchData;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup() {
          var _this10 = this;

          this.success = false;
          this.error = null;
          var payload = {
            username: this.username,
            email: this.email,
            password: this.password,
            emailVerified: false
          };
          this.fetchData.signup(payload).subscribe(function (res) {
            console.log(res);
            _this10.username = null;
            _this10.email = null;
            _this10.password = null;
            _this10.terms = true;
            _this10.success = true;
          }, function (err) {
            var e = null;

            if (err.error && err.error.error) {
              e = err.error.error;
            }

            if (e && e.details && e.details.messages && Object.keys(e.details.messages)) {
              var m = Object.keys(e.details.messages);

              if (m.length) {
                return _this10.error = e.details.messages[m[0]];
              }
            }

            console.log(err);
            return _this10.error = 'signup failed';
          });
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
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
        this.boards = [];
        this.boards$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.boards);
        this.getSwitches();
        this.onDeviceDisconnect();
        this.initLocations();
      }

      _createClass(ConnectSocket, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.leaveAll(Object.keys(this.rooms));
        }
      }, {
        key: "initLocations",
        value: function initLocations() {
          var _this11 = this;

          this.socket.on('locations', function (res) {
            console.log(res);

            if (!res.error) {
              if (res.deviceId && res.switches && res.switches.length) {
                _this11.locations = {};
                res.switches.some(function (s) {
                  if (!_this11.locations[s.locationId]) {
                    _this11.locations[s.locationId] = {};
                  }

                  _this11.locations[s.locationId].name = s.locationName;

                  if (!_this11.locations[s.locationId].switches) {
                    _this11.locations[s.locationId].switches = [];
                  }

                  s.deviceId = res.deviceId;

                  _this11.locations[s.locationId].switches.push(s);
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

                _this11.calculateActiveLocations();

                _this11.locations$.next(_this11.locations);
              }
            }
          });
        }
      }, {
        key: "calculateActiveLocations",
        value: function calculateActiveLocations() {
          var _this12 = this;

          if (this.locations) {
            var locations = Object.keys(this.locations);

            if (locations.length) {
              locations.some(function (l) {
                _this12.locations[l].active = false;

                if (_this12.locations[l].switches) {
                  _this12.locations[l].switches.some(function (s) {
                    if (_this12.onlineDevices && _this12.onlineDevices[s.deviceId] && _this12.onlineDevices[s.deviceId][s.board] && _this12.onlineDevices[s.deviceId][s.board].switches && _this12.onlineDevices[s.deviceId][s.board].switches.length && _this12.onlineDevices[s.deviceId][s.board].switches[s.switch]) {
                      _this12.locations[l].active = true;
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
          var _this13 = this;

          this.socket.on('deviceDisconnected', function (id) {
            if (id) {
              if (_this13.onlineDevices && _this13.onlineDevices[id]) {
                delete _this13.onlineDevices[id];

                if (Object.keys(_this13.onlineDevices).length) {
                  _this13.onlineDevices = null;
                }

                _this13.getLocations();

                _this13.onlineDevices$.next(_this13.onlineDevices);
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
          var _this14 = this;

          return this.socket.fromEvent('joined').subscribe(function (m) {
            if (m != null && typeof m === 'string') {
              _this14.rooms[m] = device;

              _this14.roomsMap.next(_this14.rooms);

              _this14.socket.emit('getBoards', m);
            }
          });
        }
      }, {
        key: "leaveAll",
        value: function leaveAll(ids) {
          var _this15 = this;

          if (ids && ids.length) {
            ids.map(function (id) {
              _this15.socket.emit('leave', id);

              return id;
            });
          }
        }
      }, {
        key: "getSwitches",
        value: function getSwitches() {
          var _this16 = this;

          this.socket.on('boards', function (response) {
            if (_this16.rooms && response && response.deviceId && response.boards) {
              if (!_this16.onlineDevices) {
                _this16.onlineDevices = {};
              }

              _this16.onlineDevices[response.deviceId] = response.boards;

              _this16.getLocations();

              _this16.onlineDevices$.next(_this16.onlineDevices);

              _this16.calculateBoards();
            }
          });
        }
      }, {
        key: "calculateBoards",
        value: function calculateBoards() {
          var _this17 = this;

          var boards = [];
          var dk = Object.keys(this.onlineDevices);
          dk.some(function (d) {
            var bk = Object.keys(_this17.onlineDevices[d]);
            bk.some(function (b) {
              boards.push(_this17.onlineDevices[d][b]);
            });
          });
          this.boards = boards;
          this.boards$.next(this.boards);
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

    ConnectSocket = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConnectSocket);
    /***/
  },

  /***/
  "./src/app/verified/verified.component.css":
  /*!*************************************************!*\
    !*** ./src/app/verified/verified.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifiedVerifiedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n\r\n.login-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n\r\n.login-head {\r\n  display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.logininp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  margin: 1rem auto;\r\n  border:none;\r\n}\r\n\r\n\r\n.loginbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 4rem;\r\n}\r\n\r\n\r\n.loginister-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.loginister-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n\r\n.loginimg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\n.fpasssi {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWVkL3ZlcmlmaWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOzs7QUFHcEY7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7O0FBRUE7RUFDRSxhQUFhO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJ2ZXJpZmllZC92ZXJpZmllZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5cclxuLmxvZ2luLXJvb3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvIGF1dG8gYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbmlucCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMThyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4ubG9naW5iZHktdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbn1cclxuXHJcbi5sb2dpbmlzdGVyLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dpbmlzdGVyLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLmxvZ2luaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mcGFzc3NpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/verified/verified.component.ts":
  /*!************************************************!*\
    !*** ./src/app/verified/verified.component.ts ***!
    \************************************************/

  /*! exports provided: VerifiedComponent */

  /***/
  function srcAppVerifiedVerifiedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifiedComponent", function () {
      return VerifiedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerifiedComponent =
    /*#__PURE__*/
    function () {
      function VerifiedComponent() {
        _classCallCheck(this, VerifiedComponent);
      }

      _createClass(VerifiedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifiedComponent;
    }();

    VerifiedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verified',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verified.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verified.component.css */
      "./src/app/verified/verified.component.css")).default]
    })], VerifiedComponent);
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
    /*! C:\Users\shashank\Desktop\iot-loopback-server\client\src\main.ts */
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