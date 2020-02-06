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


    __webpack_exports__["default"] = "<div style=\"padding:25px;\">\r\n  <h3>Add Board - {{deviceId}}</h3>\r\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\r\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\r\n    <input style=\"width: 100%;height: 36px;font-size: 100%;border: none;border-bottom: 1px solid #0000001a;outline:none;\"\r\n    [disabled]=\"adding\" [(ngModel)]=\"boardId\" type=\"text\" placeholder=\"Enter Board ID\"/>\r\n  </div>\r\n\r\n   <div id=\"scan-section\">\r\n     <button style=\"margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\"  [disabled]=\"adding||!deviceId||!boardId\" (click)=\"addBoard()\">Add Board</button>\r\n\r\n   </div>\r\n\r\n\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div style=\"padding:25px;\">\r\n\r\n\r\n  <h3>Add Location</h3>\r\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\r\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\r\n    <input style=\"width: 100%;\r\n    height: 36px;\r\n    font-size: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #0000001a;outline:none;\" [disabled]=\"adding\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Location Name\"/>\r\n  </div>\r\n  <button style=\"border:none;background:none;position: absolute;\r\n  right: 29px;\r\n  opacity: 0.5;margin-top:20px\"  id=\"scan-btn\" (click)=\"scan(true)\"><i class=\"fas fa-sync-alt\"></i></button>\r\n   <div id=\"scan-section\">\r\n\r\n     <div style=\"    margin-top: 50px;padding: 15px;border-radius: 5px;background: #107a8b08;\" id=\"switches\" *ngIf=\"deviceLength&&!adding&&showSwitches\">\r\n        <div *ngFor=\"let device of devices | keyvalue ; let ix=index\">\r\n            <ng-container *ngIf=\"device.value\">\r\n              <div *ngFor=\"let board of device.value | keyvalue; let ixx = index\">\r\n\r\n                <ng-container *ngIf=\"board.value && board.value.switches; \">\r\n\r\n\r\n\r\n                  <div style=\"margin-bottom:20px;background:white;\" *ngFor=\"let switch of board.value.switches; let i = index\">\r\n\r\n\r\n                    <table style=\"width:100px;height:70px;\">\r\n                      <tr>\r\n                        <td style=\"width:50px;padding:24px\">\r\n                          <button style=\"outline:none;border:none;background:none;\" *ngIf=\"(!selectedSwitches[device.key]||!selectedSwitches[device.key][board.key]||!selectedSwitches[device.key][board.key][i])\" (click)=\"select(device.key,board.key, i)\"><i class=\"far fa-square\"></i></button>\r\n                         <button style=\"outline:none;border:none;background:none;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" (click)=\"deselect(device.key,board.key, i)\"><i class=\"far fa-check-square\"></i></button>\r\n                        </td>\r\n\r\n                            <td style=\"font-size:25px;\">\r\n                              <button style=\"outline:none;padding:0px;margin:0px;border:none;background:none;\"  *ngIf=\"devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-on\"></i></button>\r\n                              <button style=\"outline:none;padding:0px;margin: 0px;border:none;background:none;\"  *ngIf=\"!devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-off\"></i></button>\r\n                            </td>\r\n\r\n                            <td style=\"height:35px;padding-left:25px\">\r\n                              <input style=\"outline:none;border:none;background:none;  border-bottom: 1px solid #0000001a;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" placeholder=\"label\" [(ngModel)]=\"selectedSwitches[device.key][board.key][i].label\">\r\n\r\n                            </td>\r\n\r\n\r\n                      </tr>\r\n                    </table>\r\n\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div *ngIf=\"!switchCount\">\r\n          <p style=\"text-align:center\">No free switches available</p>\r\n        </div>\r\n     </div>\r\n     <button style=\"margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\"  [disabled]=\"!name||adding||!switchCount\" (click)=\"addLocation()\">Add Location</button>\r\n     <div *ngIf=\"!deviceLength\">\r\n       No devices found\r\n     </div>\r\n   </div>\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddScheduleAddScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"auto-head\">\r\n  <div class=\"auto-header\">Create Automation</div>\r\n  <div (click)=\"activeModal.dismiss()\" style=\"display: inline-block;    position: absolute;right: 27px;top: 8px;\"><img class=\"auto-back\" src=\"content/images/back.svg\" /></div>\r\n</div>\r\n<div *ngIf=\"!showLocations\" class=\"auto-spacer\"></div>\r\n\r\n<ng-container *ngIf=\"!showLocations\">\r\n\r\n  <div class=\"auto-inp\">\r\n    <label class=\"auto-lbl\">Scene Name</label\r\n    ><input [(ngModel)]=\"name\" value=\"Bedroom Light 1\" class=\"auto-inpp\" />\r\n  </div>\r\n  <div class=\"auto-help\">\r\n    <label class=\"auto-helpp\">\r\n      Automate your switch by selecting an appropriate start time, stop time &\r\n      days of the week</label\r\n    >\r\n  </div>\r\n  <div class=\"auto-times\">\r\n    <label [(ngModel)]=\"start\" class=\"auto-startt\">Start Time</label>\r\n    <ngb-timepicker [(ngModel)]=\"start\" [seconds]=\"true\"></ngb-timepicker>\r\n    <label class=\"auto-startt\">Stop Time</label>\r\n    <ngb-timepicker [(ngModel)]=\"stop\" [seconds]=\"true\"></ngb-timepicker>\r\n  </div>\r\n  <div style=\"display:flex;justify-content: center;\">\r\n    <div  *ngFor=\"let day of days\" class=\"auto-days\">\r\n      <div (click)=\"selectDay(day)\" [ngClass]=\"{'selected-day' : day.selected}\" class=\"auto-day\">{{day.v}}</div>\r\n\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"showLocations\">\r\n  <app-location-list (valueChange)='displayCounter($event)' [selectedSwitches]=\"selectedForSchedule\"></app-location-list>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n<div class=\"auto-savebtn\" style=\"margin-bottom:65px;\">\r\n  <button style=\"margin-right:15px;\" *ngIf=\"!showLocations\"  (click)=\"showLocations=true\" class=\"auto-savebtnn\">Select Switches</button>\r\n  <button *ngIf=\"showLocations\"  (click)=\"showLocations=false\" class=\"auto-savebtnn\">Done</button>\r\n\r\n  <button  *ngIf=\"!showLocations\" (click)=\"addSchedule()\" [disabled]=\"!name||!selectedDaysLength\" class=\"auto-savebtnn\">Create</button>\r\n</div>\r\n\r\n<!--\r\n<pre>\r\n  {{selectedForSchedule|json}}\r\n</pre> -->\r\n{{name}}\r\n{{selectedDaysLength}}\r\n{{activeRequests|json}}\r\n";
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


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div style=\"box-shadow: 0px 0px 4px 0px #6d696929;\" class=\"col-12\">\r\n      <h4 style=\"color: #3d5af1;opacity: 0.8;margin:15px 0px 25px 0px\">Add Boards</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div style=\"padding:15px;\" *ngIf=\"onlineDevicesLength\" class=\"col-6 col-md-4 col-lg-3\">\r\n      <ng-container *ngFor=\"let device of devices|keyvalue\">\r\n        <div style=\"padding:15px;margin-bottom:15px;    border: 1px solid #00000017;\r\n        box-shadow: 0px 4px 4px 0px #6d696929;\">\r\n          <div style=\"margin-bottom:5px;\">\r\n            <span style=\"font-weight: bold;\">\r\n              Device Id:\r\n            </span>\r\n            <span>{{device.key}}</span>\r\n          </div>\r\n          <div style=\"opacity:0.5;margin-bottom:25px;font-size:10px;\">\r\n            <i  style=\"font-size: 10px;\" class=\"fas fa-microchip\"></i>\r\n            {{object.keys(device.value).length}}\r\n          </div>\r\n          <div (click)=\"launchBoardAdder(device.key)\" style=\"font-size:12px;color:#3d5af1;cursor:pointer;\">\r\n            <i  style=\"font-size: 10px;\" class=\"fas fa-plus\"></i>\r\n            Add Board\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <ng-container *ngIf=\"!onlineDevicesLength\">\r\n      <p>No online devices</p>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeToolbarHomeToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>home-toolbar works!</p>\r\n";
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


    __webpack_exports__["default"] = "<!--  <pre>\r\n  {{onlineDevices|json}}\r\n</pre>\r\nboards - {{boards.length}} -->\r\n<div class=\"h-head\">\r\n  <div class=\"h-header\">Home</div>\r\n\r\n  <div ngbDropdown #myDrop=\"ngbDropdown\">\r\n    <img id=\"dropdownManual\" ngbDropdownAnchor (click)=\"myDrop.open()\" class=\"h-back\" src=\"content/images/add.png\" />\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\r\n      <button ngbDropdownItem  [routerLink]=\"['/devices/']\">Add Device</button>\r\n      <button ngbDropdownItem [routerLink]=\"['/device-list']\">Add Board</button>\r\n      <button (click)=\"launchDeviceAdder()\" ngbDropdownItem>Add Location</button>\r\n      <button [routerLink]=\"['/schedules']\" ngbDropdownItem>Add Schedule</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div style=\"margin-top: 90px;\" class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12\">\r\n      <div style=\"display: flex;\">\r\n\r\n        <span class=\"panel\">\r\n\r\n\r\n          <table style=\"display:inline-block;border-right: 2px solid #ffffff61;\">\r\n            <tr>\r\n              <td>\r\n                <i *ngIf=\"onlineDevicesLength\" style=\"font-size: 18px;\" class=\"far fa-hdd\"></i>\r\n                <i *ngIf=\"!onlineDevicesLength\" style=\"font-size: 18px;\" class=\"fas fa-exclamation\"></i>\r\n              </td>\r\n              <td style=\"line-height: 18px;padding: 0px 18px;\">\r\n                <tr><td>\r\n                  <span style=\"display: block;\"><span>{{onlineDevicesLength}}</span><span> Online</span></span>\r\n\r\n                </td></tr>\r\n                <tr><td style=\"opacity: 0.5;\">\r\n                  <span style=\"display:block\">Hub<span *ngIf=\"onlineDevicesLength>1||!onlineDevicesLength\">s</span></span>\r\n\r\n                </td></tr>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <table [ngClass]=\"{'disabled': !onlineDevicesLength}\" style=\"padding:6px;display:inline-block\">\r\n            <tr  (click)=\"launchDeviceAdder()\" style=\"cursor:pointer\">\r\n              <td>\r\n                <i  style=\"font-size: 18px; margin-left: 18px;\" class=\"fas fa-plus\"></i>\r\n              </td>\r\n              <td style=\"line-height: 18px;padding: 0px 0px 0px 18px;\">\r\n                <tr><td>\r\n                  <span style=\"display: block;\">Add Location</span>\r\n\r\n                </td></tr>\r\n\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<app-location-list></app-location-list>\r\n\r\n\r\n</div>\r\n\r\n<div style=\"cursor:pointer;padding:12px;text-align: center;position:fixed;width:100%;height:50px;bottom:0px;left:0px;color:#fff;background:#282c34 ;\">\r\n  <p (click)=\"logout()\" style=\"text-align:center;margin:0px\">Logout</p>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"land-root\">\r\n  <div class=\"land-help\"><img src=\"content/images/help.png\" class=\"landhelp\"></div>\r\n  <div class=\"land-top\">\r\n    <img src=\"content/images/logo.png\" height=\"200px\" class=\"land-logo\" />\r\n    <div class=\"appname\">BlueBox IoT</div>\r\n  </div>\r\n  <div class=\"land-buttons\">\r\n    <button [routerLink]=\"['/login']\" class=\"land-loginbtn\">Login</button>\r\n    <button [routerLink]=\"['/signup']\" class=\"land-regbtn\">Signup</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationListLocationListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--  <pre>\r\n  {{onlineDevices|json}}\r\n</pre>\r\nboards - {{boards.length}} -->\r\n<div class=\"container\">\r\n\r\n\r\n  <div style=\"padding:45px 0px\"  *ngIf=\"locations\" class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\r\n        <span *ngIf=\"location.key\" [ngClass]=\"{'selected' : location.key == selectedLocation}\"  (click)=\"selectedLocation = location.key\" style=\"cursor:pointer;padding:0px 15px;padding-bottom:7px;color: #10316b;text-transform: capitalize;\" >\r\n         {{location.value.name}}\r\n         <i [ngClass]=\"{'green': location.value.active}\" style=\"font-weight: 900;font-size: 8px;position: relative;\r\n         top: -2px;margin-left: 5px;color: #8080806e;\" class=\"fas fa-circle\" >\r\n         </i>\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div style=\"padding-bottom:45px\"  *ngIf=\"locations\" class=\"row\">\r\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\r\n        <ng-container *ngIf=\"location.value.switches && location.value.switches.length\">\r\n          <ng-container  *ngFor=\"let switch of location.value.switches\">\r\n            <div *ngIf=\"onlineDevices&&onlineDevices[switch.deviceId]&&\r\n            onlineDevices[switch.deviceId][switch.board]&&\r\n            onlineDevices[switch.deviceId][switch.board].switches&&\r\n            onlineDevices[switch.deviceId][switch.board].switches.length&&\r\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=undefined&&\r\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=null&&\r\n            switch.locationId == selectedLocation\" class=\"col-6 col-md-4 col-lg-3\">\r\n\r\n            <div style=\"text-align:center;height:150px;background:#fff;width: 100%;border-radius: 3px;padding: 15px;box-shadow: 0px 5px 7px 0px #cac9c921;\">\r\n              <i style=\"margin-top:30px;font-size:34px;opacity:0.5\" class=\"fas fa-tv\"></i>\r\n              <p style=\"margin-bottom:0px\" *ngIf=\"switch.name\"> {{switch.name}} </p>\r\n\r\n                <p style=\"margin-bottom:0px;margin-top:10px;\">\r\n                <span style=\"cursor:pointer;font-size:12px;font-weight:bold;position: absolute;top:5px;right:27px\" (click)=\"toggle(switch.deviceId,onlineDevices[switch.deviceId][switch.board].switches[switch.switch],switch.board,switch.switch)\">\r\n                  <span style=\"color:#2cb978\" *ngIf=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">ON</span>\r\n                  <span style=\"color:#00000040\" *ngIf=\"!onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">OFF</span>\r\n                </span>\r\n                </p>\r\n              <!--   <i style=\" position: absolute;\r\n                bottom: 7px;\r\n                right: 27px;\r\n                opacity: 0.5;\" class=\"fas fa-arrow-right\"></i > -->\r\n                <ng-container *ngIf=\"selectedSwitches\">\r\n                  <button  *ngIf=\"!selectedForSchedule!||!selectedForSchedule[switch.deviceId]||\r\n                  !selectedForSchedule[switch.deviceId][switch.board]||\r\n                  !selectedForSchedule[switch.deviceId][switch.board][switch.switch]\"  (click)=\"addSchedule(switch)\" style=\"outline:none;border:none;background:none;\"><i class=\"far fa-square\"></i></button>\r\n                  <button *ngIf=\"selectedForSchedule[switch.deviceId]&&\r\n                  selectedForSchedule[switch.deviceId][switch.board]&&\r\n                  selectedForSchedule[switch.deviceId][switch.board][switch.switch]\" (click)=\"removeSchedule(switch)\" style=\"outline:none;border:none;background:none;\" ><i class=\"far fa-check-square\"></i></button>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n  </div>\r\n  <div *ngIf=\"onlineDevicesLength&&!locationsLength \"class=\"row\">\r\n    <div [routerLink]=\"['/device-list']\" *ngIf=\"!boards||!boards.length\" style=\"cursor:pointer;text-align:center\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-microchip\"></i>\r\n      <p style=\"opacity:0.4\">No boards found. Click here to add a board.</p>\r\n    </div>\r\n    <div *ngIf=\"boards&&boards.length\" style=\"text-align:center\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-map-marker-alt\"></i>\r\n      <p style=\"opacity:0.4\">Looks like you haven't added any locations yet. Please add Locations to continue.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"devices && devices.length&&!onlineDevicesLength\"class=\"row\">\r\n    <div style=\"text-align:center\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-wifi\"></i>\r\n      <p style=\"opacity:0.4\">Please make sure your device is connected to WiFi.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div  *ngIf=\"!devices || !devices.length\"class=\"row\">\r\n    <div [routerLink]=\"['/devices/']\" style=\"text-align:center;cursor:pointer\" class=\"col-12\">\r\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"far fa-hdd\"></i>\r\n      <p style=\"opacity:0.4\">No Devices registered. Click here to register your device</p>\r\n    </div>\r\n  </div >\r\n\r\n\r\n</div>\r\n\r\n<!-- <pre>\r\n  {{selectedForSchedule | json}}\r\n</pre>\r\n -->\r\n";
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


    __webpack_exports__["default"] = "\r\n\r\n\r\n<div class=\"login-root\">\r\n  <div class=\"login-head\">Login</div>\r\n  <div class=\"login-body\">\r\n\r\n    <div class=\"loginbdy-up1\"></div>\r\n\r\n    <div class=\"loginbdy-up\">\r\n    <div class=\"loginimg\"><img height=\"150px\" src=\"content/images/login.png\"/></div>\r\n\r\n    <input [(ngModel)]=\"username\" class=\"logininp\" placeholder=\"Username\" name=\"username\" id=\"username\">\r\n\r\n    <input [(ngModel)]=\"password\" class=\"logininp\" placeholder=\"Password\" type=\"password\" name=\"password\" id=\"password\">\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"loginbdy-down\"></div>\r\n  </div>\r\n  <div class=\"loginister-buttons\">\r\n    <button  [disabled]=\"!username||!password\" (click)=\"login()\" class=\"loginister-btn\">Login</button>\r\n\r\n  </div>\r\n\r\n<p *ngIf=\"error\" class=\"error\">{{error}}</p>\r\n\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<!-- <p>schedule works!</p>\r\n{{deviceLength}}\r\n<pre>\r\n  {{allDevices|json}}\r\n</pre> -->\r\n<div [routerLink]=\"['/']\" style=\"position: relative;\" class=\"auto-head\">\r\n  <div class=\"auto-header\">Automation</div>\r\n  <div style=\"position: absolute;\r\n  right: 25px;\r\n  top: 10px;\"><img class=\"auto-back\" src=\"content/images/back.svg\" /></div>\r\n</div>\r\n<div class=\"auto-spacer\"></div>\r\n<div style=\"background:beige;\" class=\"auto0-bodyhead\">\r\n  Easily Automate your smart switches\r\n</div>\r\n<div style=\"background-color: beige;\" class=\"auto0-bodyhead1\">\r\n  <button style=\"background:transparent;\"  (click)=\"launch()\" class=\"addautobtn\">ADD</button>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <ng-container *ngFor=\"let schedule of schedules | keyvalue\">\r\n        <div style=\"padding:10px;margin:15px 0px;\" class=\"col-lg-3 col-md-4 col-6\">\r\n          <div style=\"border: 1px solid beige;\" *ngIf=\"schedule.value&&schedule.value.schedule\">\r\n           <div style=\"color:#fff;padding:5px 10px;background:#282c34\">\r\n             <p style=\"margin: 0px;\" *ngIf=\"schedule.value.schedule.name\">{{schedule.value.schedule.name}}</p>\r\n           </div>\r\n           <div style=\"padding:10px\">\r\n            <table>\r\n              <tr *ngIf=\"schedule.value.switchSize\">\r\n                <td><p style=\"font-weight:bold\">Switches: </p></td>\r\n                <td><p>{{schedule.value.switchSize}}</p></td>\r\n              </tr>\r\n              <tr *ngIf=\"schedule.value.schedule.start\">\r\n                <td><p style=\"font-weight:bold\">Start: </p></td>\r\n                <td><p >{{schedule.value.schedule.start}}</p></td>\r\n              </tr>\r\n              <tr  *ngIf=\"schedule.value.schedule.end\">\r\n                <td>   <p style=\"font-weight:bold\">Stop: </p>\r\n                </td>\r\n                <td>\r\n                  <p>{{schedule.value.schedule.end}}</p>\r\n\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n\r\n             <div *ngIf=\"schedule.value.daysList\" style=\"width: 100%;display: flex;justify-content: center;\">\r\n\r\n                <span style=\"flex-grow:1;flex-basis:0;opacity: 0.8;\" [ngClass]=\"{'bold':schedule.value.daysList.indexOf(day.i.toString())>=0}\" *ngFor=\"let day of days\">\r\n                  {{day.v}}\r\n                </span>\r\n            </div>\r\n            <div style=\"padding-top:10px;margin-top:10px;display: flex; border-top: 1px solid beige\">\r\n              <i (click)=\"toggleActive(schedule.value.schedule,schedule.value.devices)\" [ngClass]=\"{'active':schedule.value.schedule.active}\" style=\"cursor:pointer;text-align:center;flex-grow:1;flex-basis:0\" class=\"fas fa-power-off\"></i>\r\n              <i (click)=\"deleteSchedule(schedule.value.schedule,schedule.value.devices)\" style=\"cursor:pointer;text-align:center;flex-grow:1;flex-basis:0\" class=\"far fa-trash-alt\"></i>\r\n            </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<!-- <pre>\r\n  {{schedules|json}}\r\n</pre> -->\r\n";
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


    __webpack_exports__["default"] = "<div class=\"register-root\">\r\n  <div class=\"register-head\">Signup</div>\r\n  <div class=\"register-body\">\r\n\r\n    <div class=\"regbdy-up1\"></div>\r\n    <div class=\"lheadtext\"><p>Dont have an account yet?</p></div>\r\n    <div class=\"lheadtext\"><img src=\"content/images/singup.png\" height=\"100px\"></div>\r\n\r\n\r\n    <div class=\"regbdy-up\">\r\n\r\n    <input [(ngModel)]=\"username\" class=\"reginp\" placeholder=\"Username\">\r\n\r\n    <input [(ngModel)]=\"email\" class=\"reginp\" placeholder=\"Email\">\r\n\r\n    <input [(ngModel)]=\"password\" class=\"reginp\" placeholder=\"password\" type=\"password\">\r\n\r\n    </div>\r\n    <div class=regbdy-up2><input [(ngModel)]=\"terms\" type=\"checkbox\"></div>\r\n    <div class=regbdy-up2> <br/><p> I Agree to terms & conditions</p></div>\r\n    <div class=\"regbdy-down\"></div>\r\n  </div>\r\n  <div class=\"register-buttons\">\r\n    <button (click)=\"signup()\" [disabled]=\"!username||!email||!password||!terms\" class=\"register-btn\">Register</button>\r\n  </div>\r\n  <p class=\"error\" *ngIf=\"error\"> {{error}}</p>\r\n  <p class=\"message\" *ngIf=\"success\">Sign up success. A verification email has been sent to your email account. <span style=\"cursor:pointer\" [routerLink]=\"['/login']\">Proceed to login</span></p>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "\r\n\r\n\r\n<div class=\"login-root\">\r\n  <div class=\"login-head\">Email Verification</div>\r\n  <div style=\"margin-top:150px\" class=\"login-body\">\r\n    <p style=\"text-align: center;\">Your email has been verified successfully.</p>\r\n    <p [routerLink]=\"['/login']\" style=\"cursor:pointer;text-align: center;\">Proceed to login</p>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib2FyZC9hZGQtYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
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
              console.log("add-board-error");
              console.log(res.error);
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
  "./src/app/add-schedule/add-schedule.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/add-schedule/add-schedule.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddScheduleAddScheduleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\r\n\r\n.auto-head {\r\n  background-color: #282c34;\r\n  color: white;\r\n  font-size: 2rem;\r\n  padding: 0.8rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n\r\n  width: 100%;\r\n\r\n}\r\n\r\n.auto-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n.auto-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n.auto-spacer {\r\n  padding-top: 4rem;\r\n}\r\n\r\n.auto-footer {\r\n  background-color: #282c34;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n.auto-homeico {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.auto-homeico2 {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 3rem;\r\n}\r\n\r\n.auto-inp {\r\n  display: grid;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-inpp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  border-radius: 8px;\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n  width: 15rem;\r\n  outline: none;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-lbl {\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-help {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #282c34;\r\n}\r\n\r\n.auto-times {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-gap: 2rem;\r\n  padding-top: 2rem;\r\n  padding-left: 4rem;\r\n}\r\n\r\n.auto-startt {\r\n  display: grid;\r\n  font-size: 1.5rem;\r\n  justify-content: end;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.auto-timei {\r\n  border-radius: 8px;\r\n  width: 30%;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.auto-day {\r\n  border: 1px solid #282c34;\r\n  border-radius: 50%;\r\n  width: 42px;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-days {\r\n  padding: 0.5rem;\r\n  padding-top: 3rem;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  cursor: pointer;\r\n}\r\n\r\n.auto-savebtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 3rem;\r\n}\r\n\r\n.auto-savebtnn {\r\n  background-color: white;\r\n  width: 150px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n  border: 2px solid #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.selected-day{\r\n  background: black!important;\r\n  color:#fff!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXNjaGVkdWxlL2FkZC1zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTs7QUFFMUU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDOztFQUVqQyxXQUFXOztBQUViOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zY2hlZHVsZS9hZGQtc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uYXV0by1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5hdXRvLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdXRvLWJhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uYXV0by1zcGFjZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG59XHJcblxyXG4uYXV0by1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRvLWhvbWVpY28ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5hdXRvLWhvbWVpY28yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG59XHJcblxyXG4uYXV0by1pbnAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvLWlucHAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXV0by1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dG8taGVscCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI4MmMzNDtcclxufVxyXG5cclxuLmF1dG8tdGltZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcclxufVxyXG5cclxuLmF1dG8tc3RhcnR0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXV0by10aW1laSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hdXRvLWRheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmMzNDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgY29sb3I6ICMyODJjMzQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvLWRheXMge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmF1dG8tc2F2ZWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxufVxyXG5cclxuLmF1dG8tc2F2ZWJ0bm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMjgyYzM0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyODJjMzQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtZGF5e1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrIWltcG9ydGFudDtcclxuICBjb2xvcjojZmZmIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-schedule/add-schedule.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/add-schedule/add-schedule.component.ts ***!
    \********************************************************/

  /*! exports provided: AddScheduleComponent */

  /***/
  function srcAppAddScheduleAddScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function () {
      return AddScheduleComponent;
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
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");

    var AddScheduleComponent =
    /*#__PURE__*/
    function () {
      function AddScheduleComponent(activeModal, connect, socket) {
        _classCallCheck(this, AddScheduleComponent);

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
        this.switchCount = 0;
        this.selectedSwitchCount = 0;
        this.start = {
          hour: 0,
          minute: 0,
          second: 0
        };
        this.stop = {
          hour: 0,
          minute: 0,
          second: 0
        };
        this.selectedDaysLength = 0;
        this.selectedForSchedule = {};
        this.days = [{
          i: 0,
          v: 'S',
          selected: false
        }, {
          i: 1,
          v: 'M',
          selected: false
        }, {
          i: 2,
          v: 'T',
          selected: false
        }, {
          i: 3,
          v: 'W',
          selected: false
        }, {
          i: 4,
          v: 'T',
          selected: false
        }, {
          i: 5,
          v: 'F',
          selected: false
        }, {
          i: 6,
          v: 'S',
          selected: false
        }];
      }

      _createClass(AddScheduleComponent, [{
        key: "displayCounter",
        value: function displayCounter(selected) {
          this.selectedForSchedule = selected;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              _this6.allDevices = JSON.parse(JSON.stringify(res));
            }

            if (_this6.allDevices) {
              _this6.deviceLength = Object.keys(_this6.allDevices).length;
            } else {
              _this6.deviceLength = 0;
            }

            if (!_this6.deviceLength) {
              _this6.activeModal.dismiss();
            }
          }));
          this.socket.on('scheduleAdded', function (res) {
            console.log(res);

            if (!res.error) {
              if (res.name && res.deviceId) {
                _this6.activeRequests.splice(_this6.activeRequests.indexOf(res.deviceId), 1);
              }

              if (!_this6.activeRequests.length && res.name) {
                _this6.adding = false;

                _this6.connect.getSchedules();

                _this6.activeModal.dismiss();
              }
            } else {
              _this6.adding = false;
              _this6.activeRequests = [];
              alert(res.error);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.socket.removeListener('scheduleAdded');
        }
      }, {
        key: "addSchedule",
        value: function addSchedule() {
          var _this7 = this;

          var payload = {};

          if (this.name && this.start && this.stop) {
            var schedule = {};
            var start = [this.start.hour < 10 ? String('0' + this.start.hour).slice(-2) : this.start.hour, this.start.minute < 10 ? String('0' + this.start.minute).slice(-2) : this.start.minute, this.start.second < 10 ? String('0' + this.start.second).slice(-2) : this.start.second].join(':').toString();
            var stop = [this.stop.hour < 10 ? String('0' + this.stop.hour).slice(-2) : this.stop.hour, this.stop.minute < 10 ? String('0' + this.stop.minute).slice(-2) : this.stop.minute, this.stop.second < 10 ? String('0' + this.stop.second).slice(-2) : this.stop.second].join(':').toString();
            payload.name = this.name;
            schedule.start = start;
            schedule.end = stop;
            schedule.days = this.days.filter(function (f) {
              return f.selected;
            }).map(function (m) {
              return m.i;
            });
            payload.devices = this.selectedForSchedule;
            payload.schedule = schedule;
            this.adding = true;
            this.activeRequests = Object.keys(this.selectedForSchedule) || [];
            this.socket.emit('addSchedule', payload, function (res) {
              if (!res || res.error) {
                _this7.adding = false;
                alert(res.error);
              }
            });
          }
        }
      }, {
        key: "selectDay",
        value: function selectDay(day) {
          day.selected = !day.selected;
          this.selectedDaysLength = this.days.filter(function (f) {
            return f.selected;
          }).length;
        }
      }]);

      return AddScheduleComponent;
    }();

    AddScheduleComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_3__["ConnectSocket"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]
      }];
    };

    AddScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-schedule.component.css */
      "./src/app/add-schedule/add-schedule.component.css")).default]
    })], AddScheduleComponent);
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
    /* harmony import */


    var _app_config_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.config.js */
    "./src/app/app.config.js");
    /* harmony import */


    var _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./location-list/location-list.component */
    "./src/app/location-list/location-list.component.ts");
    /* harmony import */


    var _home_toolbar_home_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home-toolbar/home-toolbar.component */
    "./src/app/home-toolbar/home-toolbar.component.ts");
    /* harmony import */


    var _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./add-schedule/add-schedule.component */
    "./src/app/add-schedule/add-schedule.component.ts");

    var config = {
      url: _app_config_js__WEBPACK_IMPORTED_MODULE_20__["Config"].server,
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config)],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"], _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleComponent"], _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_15__["DeviceListComponent"], _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__["LandingPageComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _verified_verified_component__WEBPACK_IMPORTED_MODULE_19__["VerifiedComponent"], _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_21__["LocationListComponent"], _home_toolbar_home_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["HomeToolbarComponent"], _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__["AddScheduleComponent"]],
      entryComponents: [_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"], _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"], _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__["AddScheduleComponent"]],
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
          var _this8 = this;

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

                  _this8.router.navigate(['']);
                }
              }

              sessionStorage.setItem('url', '');
              return valid;
            }

            sessionStorage.setItem('url', url);

            _this8.logout();

            return false;
          }, function (error) {
            sessionStorage.setItem('url', url);

            _this8.logout();

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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.step1-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n.step1-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.step1-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.step1-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.step1-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.step2-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n.step2-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.step2-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.step2-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.step2-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7O0FBRXBGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUtBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLnN0ZXAxLWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uc3RlcDEtdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3RlcDEtdHh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc3RlcDEtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcDEtYnRubiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zdGVwMi1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwMi10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zdGVwMi10eHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zdGVwMi1idG5uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiNjAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0ZXAyLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1saXN0L2RldmljZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
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
          var _this9 = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              console.log(res);
              _this9.devices = Object.assign({}, res);
              _this9.onlineDevicesLength = Object.keys(_this9.devices).length;
            }

            if (!_this9.onlineDevicesLength) {
              _this9.router.navigateByUrl('/');
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
  "./src/app/home-toolbar/home-toolbar.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/home-toolbar/home-toolbar.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeToolbarHomeToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdG9vbGJhci9ob21lLXRvb2xiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home-toolbar/home-toolbar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home-toolbar/home-toolbar.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeToolbarComponent */

  /***/
  function srcAppHomeToolbarHomeToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeToolbarComponent", function () {
      return HomeToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeToolbarComponent =
    /*#__PURE__*/
    function () {
      function HomeToolbarComponent() {
        _classCallCheck(this, HomeToolbarComponent);
      }

      _createClass(HomeToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeToolbarComponent;
    }();

    HomeToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-toolbar.component.css */
      "./src/app/home-toolbar/home-toolbar.component.css")).default]
    })], HomeToolbarComponent);
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


    __webpack_exports__["default"] = ".panel {\r\n  padding: 12px 30px;\r\n  background: #282c34;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #3d5af1;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n\r\n.h-head {\r\n  background-color: #282c34;\r\n  color: white;\r\n  font-size: 2rem;\r\n  padding: 0.8rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 999;\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.h-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n\r\n.h-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYixxQkFBcUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFLQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI4MmMzNDtcclxuICBjb2xvcjogI2ZmZjtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDE5cHggMHB4ICM2ZDY5Njk2MTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZDVhZjE7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogIzJjYjk3OCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaC1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oLWJhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uaC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG59XHJcbiJdfQ== */";
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
      /*   locationsLength = 0;
        boards = []; */
      function HomeComponent(fetchData, chowkidaar, connect, dataservice, config, modalService) {
        _classCallCheck(this, HomeComponent);

        this.fetchData = fetchData;
        this.chowkidaar = chowkidaar;
        this.connect = connect;
        this.dataservice = dataservice;
        this.modalService = modalService;
        /*   selectedLocation: any;
          devices: any[];
          joinedRooms: any = {};
          locations: any = {};
          roomsCount = 0; */

        this.onlineDevices = null;
        this.onlineDevicesLength = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        config.backdrop = 'static';
        config.keyboard = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.fetchData.registeredDevices().subscribe(function (res) {
            if (res && res.devices && res.devices.length) {
              /*  this.subscriptions.add(this.connect.locations$.subscribe(res => {
                 this.locations = {...res};
                 this.locationsLength = Object.keys(this.locations).length;
                 if (!this.selectedLocation && this.locations &&  Object.keys(this.locations)[0]) {
                   this.selectedLocation = Object.keys(res)[0];
                 }
                          })); */

              /*  this.subscriptions.add(this.connect.roomsMap.subscribe((roomsMap) => {
                 if (roomsMap) {
                   console.log(roomsMap);
                   this.joinedRooms = {...roomsMap};
                   this.roomsCount = Object.keys(roomsMap).length;
                 }
               })); */
              _this10.subscriptions.add(_this10.connect.onlineDevices$.subscribe(function (response) {
                if (response) {
                  _this10.onlineDevices = Object.assign({}, response);
                  _this10.onlineDevicesLength = Object.keys(_this10.onlineDevices).length;
                } else {
                  _this10.onlineDevices = null;
                  _this10.onlineDevicesLength = 0;
                }
              }));
              /*   this.subscriptions.add(this.connect.boards$.subscribe((response) => {
                 this.boards = response;
                })); */

              /*   this.devices = {...res}.devices;
                            this.devices.map(m => {
                  this.connect.join(m.deviceId, m);
                  return m;
                }); */

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
        /*  inRoom(deviceId: string) {
           if (this.roomsCount && this.joinedRooms[deviceId]) {
             return true;
           }
           return false;
         } */

        /*   toggle(device: any, value: any, board: any, swtch: any) {
            if (board && swtch != null && swtch !== undefined && device &&
              this.inRoom(device) &&
              this.onlineDevices &&
              this.onlineDevices[device] &&
              this.onlineDevices[device][board] &&
              this.onlineDevices[device][board].switches &&
              this.onlineDevices[device][board].switches[swtch] != null &&
              this.onlineDevices[device][board].switches[swtch] !== undefined) {
                this.connect.toggle(device, !value, board, swtch);
            }
          }
         */

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


    __webpack_exports__["default"] = ".land-root {\r\n  display: grid;\r\n  grid-template-rows: 10% 60% 30%;\r\n  height: 100vh;\r\n  width: 600px;\r\n    max-width: 100vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.land-buttons {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.land-loginbtn {\r\n  background-color: #282c34;\r\n  border-radius: 8px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-regbtn {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  border: 2px solid #282c34;\r\n  outline: none;\r\n  color: #282c34;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-top {\r\n  margin: auto auto;\r\n}\r\n\r\n.land-logo {\r\n  display: block;\r\n  -webkit-animation: rotate 3s infinite;\r\n          animation: rotate 3s infinite;\r\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n          animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.appname {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n}\r\n\r\n.landhelp {\r\n  padding: 1rem;\r\n}\r\n\r\n.land-help {\r\n  display: grid;\r\n  justify-content: end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsWUFBWTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qiw2REFBcUQ7VUFBckQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZC1yb290IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDYwJSAzMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sYW5kLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG59XHJcblxyXG4ubGFuZC1sb2dpbmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4ubGFuZC1yZWdidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjgyYzM0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICMyODJjMzQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4ubGFuZC10b3Age1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubGFuZC1sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBhbmltYXRpb246IHJvdGF0ZSAzcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMSwgMCwgMC41LCAxKTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxhbmRoZWxwIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubGFuZC1oZWxwIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbiJdfQ== */";
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
  "./src/app/location-list/location-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/location-list/location-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationListLocationListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel {\r\n  padding: 12px 30px;\r\n  background: #3d5af1;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #3d5af1;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24tbGlzdC9sb2NhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYixxQkFBcUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFLQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWxpc3QvbG9jYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzNkNWFmMTtcclxuICBjb2xvcjogI2ZmZjtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDE5cHggMHB4ICM2ZDY5Njk2MTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZDVhZjE7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogIzJjYjk3OCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/location-list/location-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/location-list/location-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: LocationListComponent */

  /***/
  function srcAppLocationListLocationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationListComponent", function () {
      return LocationListComponent;
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

    var LocationListComponent =
    /*#__PURE__*/
    function () {
      function LocationListComponent(fetchData, chowkidaar, connect, dataservice, config, modalService) {
        _classCallCheck(this, LocationListComponent);

        this.fetchData = fetchData;
        this.chowkidaar = chowkidaar;
        this.connect = connect;
        this.dataservice = dataservice;
        this.modalService = modalService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.joinedRooms = {};
        this.locations = {};
        this.roomsCount = 0;
        this.onlineDevices = null;
        this.onlineDevicesLength = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.locationsLength = 0;
        this.boards = [];
        this.selectedForSchedule = null;
        config.backdrop = 'static';
        config.keyboard = false;
      }

      _createClass(LocationListComponent, [{
        key: "addSchedule",
        value: function addSchedule(s) {
          if (!this.selectedForSchedule[s.deviceId]) {
            this.selectedForSchedule[s.deviceId] = {};
          }

          if (!this.selectedForSchedule[s.deviceId][s.board]) {
            this.selectedForSchedule[s.deviceId][s.board] = {};
          }

          if (!this.selectedForSchedule[s.deviceId][s.board][s.switch]) {
            this.selectedForSchedule[s.deviceId][s.board][s.switch] = s;
          }

          this.valueChange.emit(this.selectedForSchedule);
        }
      }, {
        key: "removeSchedule",
        value: function removeSchedule(s) {
          if (this.selectedForSchedule[s.deviceId] && this.selectedForSchedule[s.deviceId][s.board] && this.selectedForSchedule[s.deviceId][s.board][s.switch]) {
            delete this.selectedForSchedule[s.deviceId][s.board][s.switch];
          }

          this.valueChange.emit(this.selectedForSchedule);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.selectedSwitches) {
            this.selectedForSchedule = this.selectedSwitches;
          }

          this.fetchData.registeredDevices().subscribe(function (res) {
            if (res && res.devices && res.devices.length) {
              _this11.subscriptions.add(_this11.connect.locations$.subscribe(function (res) {
                _this11.locations = Object.assign({}, res);
                _this11.locationsLength = Object.keys(_this11.locations).length;

                if (!_this11.selectedLocation && _this11.locations && Object.keys(_this11.locations)[0]) {
                  _this11.selectedLocation = Object.keys(res)[0];
                }
              }));

              _this11.subscriptions.add(_this11.connect.roomsMap.subscribe(function (roomsMap) {
                if (roomsMap) {
                  console.log(roomsMap);
                  _this11.joinedRooms = Object.assign({}, roomsMap);
                  _this11.roomsCount = Object.keys(roomsMap).length;
                }
              }));

              _this11.subscriptions.add(_this11.connect.onlineDevices$.subscribe(function (response) {
                if (response) {
                  _this11.onlineDevices = Object.assign({}, response);
                  _this11.onlineDevicesLength = Object.keys(_this11.onlineDevices).length;
                } else {
                  _this11.onlineDevices = null;
                  _this11.onlineDevicesLength = 0;
                }
              }));

              _this11.subscriptions.add(_this11.connect.boards$.subscribe(function (response) {
                _this11.boards = response;
              }));

              _this11.devices = Object.assign({}, res).devices;

              _this11.devices.map(function (m) {
                _this11.connect.join(m.deviceId, m);

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

      return LocationListComponent;
    }();

    LocationListComponent.ctorParameters = function () {
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LocationListComponent.prototype, "selectedSwitches", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LocationListComponent.prototype, "valueChange", void 0);
    LocationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location-list.component.css */
      "./src/app/location-list/location-list.component.css")).default]
    })], LocationListComponent);
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n\r\n.login-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n\r\n.login-head {\r\n  display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.logininp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  margin: 1rem auto;\r\n  border:none;\r\n}\r\n\r\n\r\n.loginbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 4rem;\r\n}\r\n\r\n\r\n.loginister-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.loginister-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n\r\n.loginimg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\n.fpasssi {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7OztBQUdwRjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLGFBQWE7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbi5sb2dpbi1yb290IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubG9naW5pbnAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLmxvZ2luYmR5LXVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI2MDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbmltZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZnBhc3NzaSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */";
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
          var _this12 = this;

          this.error = null;
          this.fetchData.login({
            username: this.username,
            password: this.password
          }).subscribe(function (res) {
            if (res.id && res.userId) {
              localStorage.setItem('token', res.id);

              _this12.fetchData.account().subscribe(function (res) {
                if (!res.emailVerified) {
                  _this12.error = "Email not verified, please check your email";
                } else {
                  _this12.fetchData.registeredDevices().subscribe(function (res) {
                    console.log(res);

                    if (res.devices && res.devices.length) {
                      _this12.dataService.setDevices(res.devices);

                      if (!sessionStorage.getItem('url')) {
                        _this12.router.navigate(['']);
                      } else {
                        _this12.router.navigate([sessionStorage.getItem('url')]);
                      }
                    } else {
                      _this12.dataService.setDevices([]);

                      _this12.router.navigate(['carousel']);
                    }
                  }, function (err) {
                    console.log(err);
                  });
                }
              }, function (err) {
                _this12.error = "Account not found";
              });
            }
          }, function (err) {
            console.log(err);
            console.log(err.error);

            if (err && err.error && err.error && err.error.error.message) {
              _this12.error = err.error.error.message;
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


    __webpack_exports__["default"] = ".auto-head {\r\n  background-color: #282c34;\r\n  color: white;\r\n  font-size: 2rem;\r\n  padding: 0.8rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  width: 100%;;\r\n}\r\n\r\n\r\n.auto-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n\r\n.auto-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n\r\n.auto-spacer {\r\n  padding-top: 0px;\r\n}\r\n\r\n\r\n.auto-footer {\r\n  background-color: #282c34;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.auto-homeico {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 1rem;\r\n}\r\n\r\n\r\n.auto-homeico2 {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 3rem;\r\n}\r\n\r\n\r\n.auto0-bodyhead {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.auto0-bodyhead1 {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.addautobtn {\r\n  background-color: white;\r\n  width: 150px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n  border: 2px solid #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n.bold{\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.active{\r\n  color:green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDJDQUEyQztBQUM3Qzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0by1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlOztcclxufVxyXG5cclxuXHJcbi5hdXRvLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdXRvLWJhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uYXV0by1zcGFjZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5hdXRvLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF1dG8taG9tZWljbyB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmF1dG8taG9tZWljbzIge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbn1cclxuXHJcbi5hdXRvMC1ib2R5aGVhZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dG8wLWJvZHloZWFkMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZGF1dG9idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMjgyYzM0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyODJjMzQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYm9sZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOmdyZWVuO1xyXG59XHJcbiJdfQ== */";
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
    /* harmony import */


    var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sockets/connect */
    "./src/app/sockets/connect.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../add-schedule/add-schedule.component */
    "./src/app/add-schedule/add-schedule.component.ts");

    var ScheduleComponent =
    /*#__PURE__*/
    function () {
      function ScheduleComponent(router, connect, socket, config, modalService) {
        _classCallCheck(this, ScheduleComponent);

        this.router = router;
        this.connect = connect;
        this.socket = socket;
        this.modalService = modalService;
        this.activeRequests = {};
        this.deleteRequests = {};
        this.deviceLength = null;
        this.onlineDevices = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.schedules = {};
        this.object = Object;
        this.days = [{
          i: 0,
          v: 'S',
          selected: false
        }, {
          i: 1,
          v: 'M',
          selected: false
        }, {
          i: 2,
          v: 'T',
          selected: false
        }, {
          i: 3,
          v: 'W',
          selected: false
        }, {
          i: 4,
          v: 'T',
          selected: false
        }, {
          i: 5,
          v: 'F',
          selected: false
        }, {
          i: 6,
          v: 'S',
          selected: false
        }];
        config.backdrop = 'static';
        config.keyboard = false;
        config.size = 'lg';
      }

      _createClass(ScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.subscriptions.add(this.connect.onlineDevices$.subscribe(function (res) {
            if (res) {
              _this13.onlineDevices = JSON.parse(JSON.stringify(res));
            }

            if (_this13.onlineDevices) {
              _this13.deviceLength = Object.keys(_this13.onlineDevices).length;
            } else {
              _this13.deviceLength = 0;
            }

            if (!_this13.deviceLength) {
              _this13.router.navigate(['/']);
            } else {
              var devices = Object.keys(_this13.onlineDevices);
              devices.map(function (m) {
                _this13.socket.emit('getSchedules', m);

                return m;
              });
            }
          }));
          this.socket.on('scheduleToggled', function (msg) {
            if (msg.err && !msg.deviceId) {
              _this13.activeRequests[msg.scheduleId] = null;
            }

            if (msg.deviceId && _this13.activeRequests[msg.scheduleId] && _this13.activeRequests[msg.scheduleId].length && _this13.activeRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
              _this13.activeRequests[msg.scheduleId].splice(_this13.activeRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
            }

            if (_this13.activeRequests[msg.scheduleId] && !_this13.activeRequests[msg.scheduleId].length) {
              _this13.activeRequests[msg.scheduleId] = null;
            }

            var d = Object.keys(_this13.onlineDevices);
            d.map(function (m) {
              _this13.socket.emit('getSchedules', m);

              return m;
            });
          });
          this.socket.on('scheduleDeleted', function (msg) {
            if (msg.err && !msg.deviceId) {
              _this13.deleteRequests[msg.scheduleId] = null;
            }

            if (msg.deviceId && _this13.deleteRequests[msg.scheduleId] && _this13.deleteRequests[msg.scheduleId].length && _this13.deleteRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
              _this13.deleteRequests[msg.scheduleId].splice(_this13.deleteRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
            }

            if (_this13.deleteRequests[msg.scheduleId] && !_this13.deleteRequests[msg.scheduleId].length) {
              _this13.deleteRequests[msg.scheduleId] = null;
            }

            var d = Object.keys(_this13.onlineDevices);
            d.map(function (m) {
              _this13.socket.emit('getSchedules', m);

              return m;
            });
          });
          this.getSchedules();
        }
      }, {
        key: "getSchedules",
        value: function getSchedules() {
          var _this14 = this;

          this.socket.on('schedules', function (msg) {
            if (!msg.error) {
              // this.schedules = msg;
              if (msg.schedules && msg.schedules.length) {
                msg.schedules.map(function (m) {
                  if (!_this14.schedules[m.scheduleId]) {
                    _this14.schedules[m.scheduleId] = {};
                  }

                  _this14.schedules[m.scheduleId].schedule = m;

                  if (_this14.schedules[m.scheduleId].schedule && _this14.schedules[m.scheduleId].schedule.days) {
                    _this14.schedules[m.scheduleId].daysList = _this14.schedules[m.scheduleId].schedule.days.split(',');
                  }

                  if (!_this14.schedules[m.scheduleId].devices) {
                    _this14.schedules[m.scheduleId].devices = {};
                  }

                  if (!_this14.schedules[m.scheduleId].devices[msg.deviceId]) {
                    _this14.schedules[m.scheduleId].devices[msg.deviceId] = {};
                  }

                  if (!_this14.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id]) {
                    _this14.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id] = m;

                    if (!_this14.schedules[m.scheduleId].switchSize) {
                      _this14.schedules[m.scheduleId].switchSize = 0;
                    }

                    _this14.schedules[m.scheduleId].switchSize += 1;
                  }

                  return m;
                });
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.socket.removeListener('schedules');
        }
      }, {
        key: "launch",
        value: function launch() {
          var _this15 = this;

          if (this.deviceLength) {
            var modalRef = this.modalService.open(_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_7__["AddScheduleComponent"]);
            modalRef.result.then(function (res) {
              var devices = Object.keys(_this15.onlineDevices);
              devices.map(function (m) {
                _this15.socket.emit('getSchedules', m);

                return m;
              });
            }, function (err) {
              var devices = Object.keys(_this15.onlineDevices);
              devices.map(function (m) {
                _this15.socket.emit('getSchedules', m);

                return m;
              });
            });
          }
        }
      }, {
        key: "toggleActive",
        value: function toggleActive(schedule, devices) {
          var _this16 = this;

          if (!this.activeRequests[schedule.scheduleId]) {
            this.activeRequests[schedule.scheduleId] = [];
          }

          var deviceKeys = Object.keys(devices);

          if (deviceKeys && deviceKeys.length) {
            deviceKeys.map(function (device) {
              _this16.activeRequests[schedule.scheduleId].push(device);

              var payload = {};
              payload.scheduleId = schedule.scheduleId;
              payload.deviceId = device;
              payload.active = schedule.active;

              _this16.socket.emit('toggleSchedule', payload);

              return device;
            });
          }
        }
      }, {
        key: "deleteSchedule",
        value: function deleteSchedule(schedule, devices) {
          var _this17 = this;

          if (!this.deleteRequests[schedule.scheduleId]) {
            this.deleteRequests[schedule.scheduleId] = [];
          }

          var deviceKeys = Object.keys(devices);

          if (deviceKeys && deviceKeys.length) {
            this.schedules = {};
            deviceKeys.map(function (device) {
              _this17.deleteRequests[schedule.scheduleId].push(device);

              var payload = {};
              payload.scheduleId = schedule.scheduleId;
              payload.deviceId = device;

              _this17.socket.emit('deleteSchedule', payload);

              return device;
            });
          }
        }
      }]);

      return ScheduleComponent;
    }();

    ScheduleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }];
    };

    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]],
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.register-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n.register-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.reginp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem auto;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  border:none;\r\n}\r\n\r\n.regbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.register-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.register-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.regbdy-up2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.lheadtext {\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.message{\r\n  color:green;\r\n  text-align:center;\r\n  font-weight: 14px;\r\n}\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOztBQUdBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLnJlZ2lzdGVyLXJvb3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvIGF1dG8gYXV0bztcclxufVxyXG5cclxuLnJlZ2lzdGVyLWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5yZWdpbnAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLnJlZ2JkeS11cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2JkeS11cDIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyODJjMzQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubGhlYWR0ZXh0IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4ubWVzc2FnZXtcclxuICBjb2xvcjpncmVlbjtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXdlaWdodDogMTRweDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gIGNvbG9yOnJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */";
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
          var _this18 = this;

          this.success = false;
          this.error = null;
          var payload = {
            username: this.username,
            email: this.email,
            password: this.password,
            emailVerified: true
          };
          this.fetchData.signup(payload).subscribe(function (res) {
            console.log(res);
            _this18.username = null;
            _this18.email = null;
            _this18.password = null;
            _this18.terms = true;
            _this18.success = true;
          }, function (err) {
            var e = null;

            if (err.error && err.error.error) {
              e = err.error.error;
            }

            if (e && e.details && e.details.messages && Object.keys(e.details.messages)) {
              var m = Object.keys(e.details.messages);

              if (m.length) {
                return _this18.error = e.details.messages[m[0]];
              }
            }

            console.log(err);
            return _this18.error = 'signup failed';
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
          var _this19 = this;

          this.socket.on('locations', function (res) {
            console.log(res);

            if (!res.error) {
              if (res.deviceId && res.switches && res.switches.length) {
                _this19.locations = {};
                res.switches.some(function (s) {
                  if (!_this19.locations[s.locationId]) {
                    _this19.locations[s.locationId] = {};
                  }

                  _this19.locations[s.locationId].name = s.locationName;

                  if (!_this19.locations[s.locationId].switches) {
                    _this19.locations[s.locationId].switches = [];
                  }

                  s.deviceId = res.deviceId;

                  _this19.locations[s.locationId].switches.push(s);
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

                _this19.calculateActiveLocations();

                _this19.locations$.next(_this19.locations);
              }
            }
          });
        }
      }, {
        key: "calculateActiveLocations",
        value: function calculateActiveLocations() {
          var _this20 = this;

          if (this.locations) {
            var locations = Object.keys(this.locations);

            if (locations.length) {
              locations.some(function (l) {
                _this20.locations[l].active = false;

                if (_this20.locations[l].switches) {
                  _this20.locations[l].switches.some(function (s) {
                    if (_this20.onlineDevices && _this20.onlineDevices[s.deviceId] && _this20.onlineDevices[s.deviceId][s.board] && _this20.onlineDevices[s.deviceId][s.board].switches && _this20.onlineDevices[s.deviceId][s.board].switches.length && _this20.onlineDevices[s.deviceId][s.board].switches[s.switch]) {
                      _this20.locations[l].active = true;
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
          var _this21 = this;

          this.socket.on('deviceDisconnected', function (id) {
            if (id) {
              if (_this21.onlineDevices && _this21.onlineDevices[id]) {
                delete _this21.onlineDevices[id];

                if (!Object.keys(_this21.onlineDevices).length) {
                  _this21.onlineDevices = null;
                }

                _this21.getLocations();

                _this21.onlineDevices$.next(_this21.onlineDevices);
              }
            }
          });
        }
      }, {
        key: "join",
        value: function join(msg, device) {
          if (!this.rooms[msg]) {
            this.joined(device);
            this.socket.emit('join', msg);
          }
        }
      }, {
        key: "joined",
        value: function joined(device) {
          var _this22 = this;

          return this.socket.fromEvent('joined').subscribe(function (m) {
            if (m != null && typeof m === 'string') {
              _this22.rooms[m] = device;

              _this22.roomsMap.next(_this22.rooms);

              _this22.socket.emit('getBoards', m);
            }
          });
        }
      }, {
        key: "leaveAll",
        value: function leaveAll(ids) {
          var _this23 = this;

          if (ids && ids.length) {
            ids.map(function (id) {
              _this23.socket.emit('leave', id);

              return id;
            });
          }
        }
      }, {
        key: "getSwitches",
        value: function getSwitches() {
          var _this24 = this;

          this.socket.on('boards', function (response) {
            if (_this24.rooms && response && response.deviceId && response.boards) {
              if (!_this24.onlineDevices) {
                _this24.onlineDevices = {};
              }

              _this24.onlineDevices[response.deviceId] = response.boards;

              _this24.getLocations();

              _this24.onlineDevices$.next(_this24.onlineDevices);

              _this24.calculateBoards();
            }
          });
        }
      }, {
        key: "calculateBoards",
        value: function calculateBoards() {
          var _this25 = this;

          var boards = [];
          var dk = Object.keys(this.onlineDevices);
          dk.some(function (d) {
            var bk = Object.keys(_this25.onlineDevices[d]);
            bk.some(function (b) {
              boards.push(_this25.onlineDevices[d][b]);
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
      }, {
        key: "getSchedules",
        value: function getSchedules() {}
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n\r\n.login-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n\r\n.login-head {\r\n  display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.logininp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  margin: 1rem auto;\r\n  border:none;\r\n}\r\n\r\n\r\n.loginbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 4rem;\r\n}\r\n\r\n\r\n.loginister-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.loginister-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n\r\n.loginimg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\n.fpasssi {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7OztBQUdwRjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLGFBQWE7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbi5sb2dpbi1yb290IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubG9naW5pbnAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLmxvZ2luYmR5LXVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI2MDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbmltZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZnBhc3NzaSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */";
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
    /*! C:\Users\bgh45159\Desktop\iot-loopback-server\client\src\main.ts */
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