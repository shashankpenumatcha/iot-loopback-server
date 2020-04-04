(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:50px 15px\" class=\"container\">\n  <img style=\"width: 700px;\n  height: auto;\n  max-width: 100%;\n  margin: 0 auto;\n  display: block;\" src=\"content/pages/refer.png\"  alt=\"\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:25px;\">\n  <h3>Add Board - {{deviceId}}</h3>\n  <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\n  <div style=\"margin-top:20px\" id=\"add-location-form\">\n    <input style=\"width: 100%;height: 36px;font-size: 100%;border: none;border-bottom: 1px solid #0000001a;outline:none;\"\n    [disabled]=\"adding\" [(ngModel)]=\"boardId\" type=\"text\" placeholder=\"Enter Board ID\"/>\n  </div>\n\n<p *ngIf=\"error\" style=\"color: red;\nfont-size: 12px;\ntext-align: center;\nposition: relative;\ntop: 22px;\n\">\n<span>Something went wrong. Please try agian.</span>\n<br>\n{{error}}\n</p>\n   <div id=\"scan-section\">\n     <button style=\"margin: 0 auto;\n        display: block;\n        margin-top: 40px;\n        padding: 10px 35px;\n        background: #ff5722;\n        border: 1px solid #ff5722;\n        border-radius: 4px;\n        color: #fff;\"  [disabled]=\"adding||!deviceId||!boardId\" (click)=\"addBoard()\">\n        <div *ngIf=\"!adding\">\n          Add Board\n\n        </div>\n        <div *ngIf=\"adding\" class=\"spinner-border text-light\" role=\"status\">\n          <span class=\"sr-only\">Adding...</span>\n        </div>\n      </button>\n\n   </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <pre>\n  {{allDevices|json}}\n</pre> -->\n<!-- <pre>\n  {{selectedSwitches|json}}\n</pre>\n{{name}}\n<pre>\n  {{location|json}}\n</pre> -->\n<div [ngClass]=\"{'padding':addSwitch}\" style=\"border: none;\nbackground: none;\nposition: relative;\nright: 0px;\nopacity: 1;\nmargin-top: 20px;\nwidth: 500px;\nmax-width: 90vw;\nmargin: 30px auto;\">\n<h3 *ngIf=\"addSwitch\">Add Switches</h3>\n<i (click)=\"activeModal.close()\" *ngIf=\"addSwitch\" style=\"position: absolute;right: 15px;top: -15px;\" class=\"fas fa-times\"></i>\n<!--   <i *ngIf=\"!adding\" (click)=\"activeModal.dismiss()\" style=\"cursor:pointer;position: absolute;right:27px;top:20px\" class=\"fas fa-times\"></i>\n -->  <div *ngIf=\"!addSwitch\" style=\"margin-top:20px\" id=\"add-location-form\">\n    <input  style=\"width: 100%;\n    height: 45px;\n    font-size: 100%;\n    border: none;\n    border-bottom: 1px solid #0000001a;\n    outline: none;\n    padding-left: 10px;\n    border: 1px solid #ff5722;\n    border-radius: 4px;\" [disabled]=\"adding\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Location Name\"/>\n  </div>\n  <button *ngIf=\"!addSwitch\" style=\"border:none;background:none;position: absolute;\n  right: 29px;\n  opacity: 0.5;margin-top:20px\"  id=\"scan-btn\" (click)=\"scan(true)\"><i class=\"fas fa-sync-alt\"></i></button>\n   <div id=\"scan-section\">\n\n     <div style=\"     margin-top: 50px;\n     padding: 15px;\n     border-radius: 5px;\n     background: #222831;\n     color: #eeeeee;\" id=\"switches\" *ngIf=\"deviceLength&&!adding&&showSwitches\">\n        <div *ngFor=\"let device of devices | keyvalue ; let ix=index\">\n            <ng-container *ngIf=\"device.value\">\n              <div *ngFor=\"let board of device.value | keyvalue; let ixx = index\">\n\n                <ng-container *ngIf=\"board.value && board.value.switches; \">\n\n\n\n                  <div style=\"margin-bottom:20px;background:white;position: relative;\" *ngFor=\"let switch of board.value.switches; let i = index\">\n\n                    <ng-container *ngIf=\"switch!=null\">\n                      <table style=\"width:100px;height:70px;\">\n                        <tr>\n                          <td style=\"width:50px;padding:24px\">\n                            <button style=\"outline:none;border:none;background:none;color:#ff5722;\" *ngIf=\"(!selectedSwitches[device.key]||!selectedSwitches[device.key][board.key]||!selectedSwitches[device.key][board.key][i])\" (click)=\"select(device.key,board.key, i)\"><i class=\"far fa-square\"></i></button>\n                           <button style=\"outline:none;border:none;background:none;color:#ff5722;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" (click)=\"deselect(device.key,board.key, i)\"><i class=\"far fa-check-square\"></i></button>\n                          </td>\n\n                              <td style=\"font-size:25px;\">\n                              <!--   <button style=\"outline:none;padding:0px;margin:0px;border:none;background:none;\"  *ngIf=\"devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-on\"></i></button>\n                                <button style=\"outline:none;padding:0px;margin: 0px;border:none;background:none;\"  *ngIf=\"!devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\"><i class=\"fas fa-toggle-off\"></i></button>\n                              -->\n                              <label style=\"right: 23px;bottom:13px\" class=\"switch\">\n                                <input [(ngModel)]=\"devices[device.key][board.key].switches[i]\" (click)=\"toggle(device.key,switch,board.key,i)\" type=\"checkbox\">\n                                <span class=\"slider round\"></span>\n                              </label>\n                              </td>\n\n                              <td style=\"height:35px;padding-left:25px\">\n                                <input style=\"outline:none;border:none;background:none;  border-bottom: 1px solid #0000001a;\"  *ngIf=\"selectedSwitches[device.key]&&selectedSwitches[device.key][board.key]&&selectedSwitches[device.key][board.key][i]\" placeholder=\"label\" [(ngModel)]=\"selectedSwitches[device.key][board.key][i].label\">\n\n                              </td>\n\n\n                        </tr>\n                      </table>\n                    </ng-container>\n\n\n                  </div>\n                </ng-container>\n              </div>\n            </ng-container>\n        </div>\n\n        <div *ngIf=\"!switchCount\">\n          <p style=\"text-align:center\">No free switches available</p>\n        </div>\n     </div>\n     <button *ngIf=\"!addSwitch\" style=\"margin: 0 auto;\n        display: block;\n        margin-top: 40px;\n        padding: 10px 35px;\n        background: #ff5722;\n        border: 1px solid #ff5722;\n        border-radius: 4px;\n        color: #fff;\"  [disabled]=\"!name||adding||!switchCount\" (click)=\"addLocation()\">Add Location</button>\n\n            <button *ngIf=\"addSwitch\" style=\"margin: 0 auto;\n             display: block;\n             margin-top: 40px;\n             padding: 10px 35px;\n             background: #ff5722;\n             border: 1px solid #ff5722;\n             border-radius: 4px;\n             color: #fff;\"  [disabled]=\"!location||adding||!switchCount\" (click)=\"addSwitches()\">Add</button>\n     <div *ngIf=\"!deviceLength\">\n       No devices found\n     </div>\n   </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"!showLocations\" class=\"auto-spacer\"></div>\n<div style=\"margin-bottom:250px\" style=\"padding:15px;\">\n  <ng-container *ngIf=\"!showLocations\">\n\n    <div style=\"max-width:500px;width:100%;margin: 0 auto;display: block;\" class=\"auto-inp\">\n      <input style=\"box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);\n      border-radius: 4px;\n      height: 40px;\n      padding: 0.5rem;\n      font-size: 1rem;\n      width: 100%;\n      outline: none;\n      border: 1px solid #ff5722;\n      display: flex;\n      justify-content: center;\" placeholder=\"Scene Name\" [(ngModel)]=\"name\" value=\"Bedroom Light 1\" class=\"auto-inpp\" />\n    </div>\n    <div class=\"auto-help\">\n      <label class=\"auto-helpp\">\n        Automate your switch by selecting an appropriate start time, stop time &\n        days of the week</label\n      >\n    </div>\n    <div style=\"max-width:500px;margin:20px auto;\" class=\"auto-times\">\n      <label [(ngModel)]=\"start\" style=\"padding-top: 10px;\n      font-size: 100%;\" class=\"auto-startt\">Start Time</label>\n      <ngb-timepicker [(ngModel)]=\"start\" [seconds]=\"true\"></ngb-timepicker>\n      <label style=\"padding-top: 10px;\n      font-size: 100%;\" class=\"auto-startt\">Stop Time</label>\n      <ngb-timepicker [(ngModel)]=\"stop\" [seconds]=\"true\"></ngb-timepicker>\n    </div>\n    <div style=\"display:flex;justify-content: center;flex-wrap: wrap;\">\n      <div  *ngFor=\"let day of days\" class=\"auto-days\">\n        <div (click)=\"selectDay(day)\" [ngClass]=\"{'selected-day' : day.selected}\" class=\"auto-day\">{{day.v}}</div>\n\n      </div>\n    </div>\n  </ng-container>\n\n\n  <ng-container *ngIf=\"showLocations\">\n    <app-location-list (valueChange)='displayCounter($event)' [selectedSwitches]=\"selectedForSchedule\"></app-location-list>\n  </ng-container>\n\n\n\n\n  <div class=\"auto-savebtn\" style=\"margin-bottom:65px;\">\n    <button style=\"margin-right:15px;background:#2d4059!important;border-color:#2d4059!important\" *ngIf=\"!showLocations;toggle\"  (click)=\"showLocations=true;disableBack()\" class=\"auto-savebtnn\">Select Switches</button>\n    <button *ngIf=\"showLocations\"  (click)=\"showLocations=false;enableBack()\" class=\"auto-savebtnn\">Done</button>\n\n    <button  *ngIf=\"!showLocations\" (click)=\"addSchedule()\" [disabled]=\"!name||!selectedDaysLength\" class=\"auto-savebtnn\">Create</button>\n  </div>\n\n</div>\n\n<!--\n<pre>\n  {{selectedForSchedule|json}}\n</pre> -->\n<!-- {{name}}\n{{selectedDaysLength}}\n{{activeRequests|json}} -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-header></app-header>\n</div>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<div>\n  <app-toolbar></app-toolbar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"step==1\" class=\"step1-root\">\r\n  <div class=\"step1-text\">STEP 1</div>\r\n  <div class=\"step1-text\"><img height=\"250px\" src=\"content/images/connect.gif\" /></div>\r\n  <div class=\"step1-txt\">\r\n    Plug the Bluebox hub into the socket and switch it on\r\n  </div>\r\n  <div (click)=\"step=2;changeStep('Setup your Hub')\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\r\n</div>\r\n\r\n<div *ngIf=\"step==2\" class=\"step1-root\">\r\n  <div class=\"step1-text\">STEP 2</div>\r\n  <div class=\"step1-text\"><img height=\"250px\" src=\"content/images/wifi.gif\" /></div>\r\n  <div class=\"step1-txt\">\r\n    Using your browser or phone connect to wireless network called\r\n    AP_BlueBox\r\n  </div>\r\n  <div (click)=\"step=3;changeStep('Setup your Hub')\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"step==3\" class=\"step1-root\">\r\n  <div class=\"step1-text\">STEP 3</div>\r\n  <div class=\"step1-text\"><img height=\"250px\" src=\"content/images/wifi.gif\" /></div>\r\n  <div class=\"step1-txt\">\r\n    Select to your home WiFi Network, enter password and click on connect\r\n  </div>\r\n  <div [routerLink]=\"['/devices/tutorial',true]\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;padding:50px\">\n\n  <p style=\"font-size:18px;font-family: 'Roboto';\">Change your password using the form below,</p>\n  <div class=\"l-inpbox\">\n    <div><input type=\"password\" class=\"text-input\" placeholder=\"Enter old password\" [(ngModel)]=\"oldPassword\"  name=\"oldPassword\"/></div>\n    <div><input type=\"password\" class=\"text-input\" placeholder=\"Enter new password\" [(ngModel)]=\"newPassword\"  name=\"newPassword\"/></div>\n\n  </div>\n  <p *ngIf=\"message\" class=\"message\">{{message}}</p>\n  <p *ngIf=\"error\" style=\"color:red;text-align: center;width:100%\">{{error}}</p>\n  <div class=\"l-btnbox\">\n    <button [disabled]=\"!oldPassword||!newPassword\" (click)=\"reset()\" class=\"l-btn\"  >\n  <div *ngIf=\"!loading\">\n\n    Submit\n  </div>\n    <div *ngIf=\"loading\" class=\"spinner-border text-light\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </button></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:50px 15px\" class=\"container\">\n  <img style=\"width: 700px;\n  height: auto;\n  max-width: 100%;\n  margin: 0 auto;\n  display: block;\" src=\"content/pages/refer.png\"  alt=\"\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <!-- <div class=\"row\">\n    <div style=\"box-shadow: 0px 0px 4px 0px #6d696929;\" class=\"col-12\">\n      <h4 style=\"color: #3d5af1;opacity: 0.8;margin:15px 0px 25px 0px\">Add Boards</h4>\n    </div>\n  </div> -->\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"padding:15px;\" *ngIf=\"onlineDevicesLength\" class=\"col-6 col-md-4 col-lg-3\">\n      <ng-container *ngFor=\"let device of devices|keyvalue\">\n        <div style=\"padding: 15px;\n        margin-bottom: 15px;\n        border: 1px solid #222831;\n        box-shadow: 0px 4px 4px 0px #6d696929;\n        background: #222831;\n        color: #fff;\">\n          <div style=\"margin-bottom:5px;\">\n            <span style=\"font-weight: bold;\">\n              Device Id:\n            </span>\n            <span>{{device.key}}</span>\n          </div>\n          <div style=\"opacity:0.5;margin-bottom:25px;font-size:10px;\">\n            <i  style=\"font-size: 10px;\" class=\"fas fa-microchip\"></i>\n            {{object.keys(device.value).length}}\n          </div>\n\n          <div (click)=\"launchBoardAdder(device.key)\" style=\"font-size:12px;color:#ff5722;cursor:pointer;\">\n            <i  style=\"font-size: 10px;color:#ff5722\" class=\"fas fa-plus\"></i>\n            Add Board\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <ng-container *ngIf=\"!onlineDevicesLength\">\n      <p>No online devices</p>\n    </ng-container>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-location/edit-location.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-location/edit-location.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <pre>\n  {{location|json}}\n</pre> -->\n<!--\n+++++++\n=======\n+++++++\n<pre>\n  {{onlineDevices | json}}\n</pre>\n{{error}}\n -->\n <div style=\"padding:15px\">\n\n   <div class=\"container\">\n     <div class=\"row\">\n       <div style=\"padding: 15px 0px;\n       margin-bottom: 46px;\" class=\"col-12\">\n         <h3 *ngIf=\"!editName\">\n           {{location.name}} <i (click)=\"editName=!editName\" style=\"margin-left:10px;font-size:16px\"  class=\"fas fa-pencil-alt\"></i>\n           <i  (click)=\"deleteLocation()\" style=\"margin-left:10px;font-size:16px\" class=\"fas fa-trash-alt\"></i>\n         </h3>\n         <h3  *ngIf=\"editName\">\n           <input type=\"text\" name=\"name\" id=\"location-name\" [(ngModel)]=\"location.name\">\n           <i style=\"margin-left:10px;font-size:16px\"  (click)=\"saveName()\" class=\"fas fa-check\"></i>\n         </h3>\n\n       </div>\n     </div>\n     <div class=\"row\">\n       <div style=\"color:#2d4059!important;padding: 0px;\" class=\"col-12\">\n         <div style=\"    padding: 15px 10px;\n         display: flex;\n         align-items: center;\n         font-weight: bold;\n         border: 1.5px solid #2d4059!important;\n         margin-bottom: 25px;\" (click)=\"addSwitch()\">\n          <i style=\"font-size: 35px;margin-right:15px\" class=\"far fa-plus-square\"></i>  Add switch\n        </div>\n       </div>\n     </div>\n     <div style=\"margin-bottom: 75px;\" class=\"row\">\n       <ng-container *ngIf=\"location&&location.switches&&location.switches.length&&onlineDevices\">\n         <ng-container *ngFor=\"let switch of location.switches\">\n           <div *ngIf=\"onlineDevices[switch.deviceId]&&onlineDevices[switch.deviceId][switch.board]&&\n           onlineDevices[switch.deviceId][switch.board].switches&&\n           onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=undefined&&\n           onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=null\"\n           style=\"display: flex;\n           /* background: #393e46; */\n           color: #393e46;\n           padding: 15px 15px;\n           font-size: 18px;\n           border-bottom: 1px solid #393e4630;\n           align-items: center;\" class=\"col-12\">\n           <span *ngIf=\"!switch.edit\">\n            {{switch.name}} <i (click)=\"switch.edit=true\" style=\"margin-left:10px;font-size:16px\"  class=\"fas fa-pencil-alt\"></i>\n            <i  (click)=\"deleteSwitch(switch)\" style=\"margin-left:10px;font-size:16px\" class=\"fas fa-trash-alt\"></i>\n           </span>\n          <span  *ngIf=\"switch.edit\">\n            <input type=\"text\" name=\"name\" id=\"location-name\" [(ngModel)]=\"switch.name\">\n            <i style=\"margin-left:10px;font-size:16px\"  (click)=\"saveSwitch(switch)\" class=\"fas fa-check\"></i>\n          </span>\n             <label class=\"switch\">\n               <input (click)=\"toggle(switch,onlineDevices[switch.deviceId][switch.board].switches[switch.switch])\" [(ngModel)]=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\" type=\"checkbox\">\n               <span class=\"slider round\"></span>\n             </label>\n           </div>\n         </ng-container>\n       </ng-container>\n     </div>\n   </div>\n\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;padding:50px\">\n\n  <p style=\"font-size:18px;font-family: 'Roboto';\">Please enter your registered email address below. A password rest link will be sent to your inbox</p>\n  <div class=\"l-inpbox\">\n    <div><input class=\"text-input\" placeholder=\"Enter your email\" [(ngModel)]=\"email\"  name=\"email\"/></div>\n  </div>\n  <p *ngIf=\"message\" class=\"message\">{{message}}</p>\n  <p *ngIf=\"error\" style=\"color:red;text-align: center;width:100%\">{{error}}</p>\n  <div class=\"l-btnbox\">\n    <button [disabled]=\"!email\" (click)=\"reset()\" class=\"l-btn\"  >\n  <div *ngIf=\"!loading\">\n\n    Submit\n  </div>\n    <div *ngIf=\"loading\" class=\"spinner-border text-light\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </button></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\" style=\"background:#222831;position:relative;height: 100px;width:100%;\">\n  <div style=\"width:100%;padding-bottom:10px;text-align:center; position:  absolute;bottom:0px;\">\n    <span style=\"color:#fff;font-family: 'Roboto';font-size: 21px;\">{{title}}</span>\n    <span style=\"color: #fff;\n    position: absolute;\n    right: 20px;\n    bottom: 13px;\" *ngIf=\"back\" [routerLink]=\"back\">Back</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:50px 15px\" class=\"container\">\n  <img style=\"width: 700px;\n  height: auto;\n  max-width: 100%;\n  margin: 0 auto;\n  display: block;\" src=\"content/pages/refer.png\"  alt=\"\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home-toolbar works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <pre>\n  {{onlineDevices|json}}\n</pre>\nboards - {{boards.length}} -->\n<!-- <div class=\"h-head\">\n  <div class=\"h-header\">Home</div> -->\n\n  <div style=\"display: inline;\n  position: absolute;\n  right: 15px;\n  top: 57px;\" ngbDropdown placement=\"bottom-right\" #myDrop=\"ngbDropdown\">\n    <img id=\"dropdownManual\" ngbDropdownAnchor (click)=\"myDrop.open()\" class=\"h-back\" src=\"content/images/add.png\" />\n    <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n      <button ngbDropdownItem  [routerLink]=\"['/devices/']\">Add Device</button>\n<!--<button ngbDropdownItem [routerLink]=\"['/device-list']\">Add Board</button>-->\n      <button (click)=\"launchDeviceAdder()\" ngbDropdownItem>Add Location</button>\n      <button [routerLink]=\"['/schedules']\" ngbDropdownItem>Add Schedule</button>\n\n    </div>\n   </div><!--\n\n</div> -->\n<div style=\"margin-top: 10px;margin-bottom:250px;\" class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <div style=\"display: flex;\">\n\n        <span class=\"panel\">\n\n\n          <table style=\"display:inline-block;border-right: 2px solid #2d4059;\">\n            <tr>\n              <td>\n                <i *ngIf=\"onlineDevicesLength\" style=\"font-size: 18px;\" class=\"far fa-hdd\"></i>\n                <i *ngIf=\"!onlineDevicesLength\" style=\"font-size: 18px;\" class=\"fas fa-exclamation\"></i>\n              </td>\n              <td style=\"line-height: 18px;padding: 0px 18px;\">\n                <tr><td>\n                  <span style=\"display: block;\"><span>{{onlineDevicesLength}}</span><span> Online</span></span>\n\n                </td></tr>\n                <tr><td style=\"opacity: 0.5;\">\n                  <span style=\"display:block\">Hub<span *ngIf=\"onlineDevicesLength>1||!onlineDevicesLength\">s</span></span>\n\n                </td></tr>\n              </td>\n            </tr>\n          </table>\n\n          <table [ngClass]=\"{'disabled': !onlineDevicesLength}\" style=\"padding:6px;display:inline-block\">\n            <tr  (click)=\"launchDeviceAdder()\" style=\"cursor:pointer\">\n              <td>\n                <i  style=\"font-size: 18px; margin-left: 18px;\" class=\"fas fa-plus\"></i>\n              </td>\n              <td style=\"line-height: 18px;padding: 0px 0px 0px 18px;\">\n                <tr><td>\n                  <span style=\"display: block;\">Add Location</span>\n\n                </td></tr>\n\n              </td>\n            </tr>\n          </table>\n\n        </span>\n      </div>\n    </div>\n  </div>\n\n\n<app-location-list></app-location-list>\n\n\n</div>\n\n<!-- <div style=\"cursor:pointer;padding:12px;text-align: center;position:fixed;width:100%;height:50px;bottom:0px;left:0px;color:#fff;background:#282c34 ;\">\n  <p (click)=\"logout()\" style=\"text-align:center;margin:0px\">Logout</p>\n</div>\n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"land-root\">\n  <div class=\"land-help\"><img src=\"content/images/help.png\" class=\"landhelp\"></div>\n  <div class=\"land-top\">\n    <img src=\"content/images/logo.png\" height=\"200px\" class=\"land-logo\" />\n    <div style=\"color:#222831\" class=\"appname\">BlueBox IoT</div>\n  </div>\n  <div class=\"land-buttons\">;\n    <button style=\"background-color: #222831;color:#f2f2f2;border:none;\" [routerLink]=\"['/login']\" class=\"land-loginbtn\">Login</button>\n    <button style=\"color: #f2f2f2;background:#ff5722;border:none\" [routerLink]=\"['/signup']\" class=\"land-regbtn\">Signup</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <pre>\n  {{locations|json}}\n</pre>\nboards - {{boards.length}} -->\n<div class=\"container\">\n\n\n  <div style=\"padding:45px 0px 25px 0px\"  *ngIf=\"locations\" class=\"row\">\n    <div class=\"col-12\" style=\"padding: 0px;\">\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\n        <span *ngIf=\"location.key\" [ngClass]=\"{'selected' : location.key == selectedLocation}\"  (click)=\"selectedLocation = location.key\" style=\"cursor:pointer;padding:0px 15px;padding-bottom:7px;color: #10316b;text-transform: capitalize;\" >\n          <i (click)=\"editLocation(location.key,location.value)\" style=\"margin-right:10px\" *ngIf=\"selectedLocation==location.key\" class=\"fas fa-pencil-alt\"></i>\n\n          {{location.value.name}}\n         <i [ngClass]=\"{'green': location.value.active}\" style=\"font-weight: 900;font-size: 8px;position: relative;\n         top: -2px;margin-left: 5px;color: #8080806e;\" class=\"fas fa-circle\" >\n         </i>\n        </span>\n      </ng-container>\n    </div>\n  </div>\n  <div style=\"padding-bottom:45px\"  *ngIf=\"locations\" class=\"row\">\n      <ng-container *ngFor=\"let location of locations | keyvalue\">\n        <ng-container *ngIf=\"location.value.switches && location.value.switches.length\">\n          <ng-container  *ngFor=\"let switch of location.value.switches\">\n            <div *ngIf=\"onlineDevices&&onlineDevices[switch.deviceId]&&\n            onlineDevices[switch.deviceId][switch.board]&&\n            onlineDevices[switch.deviceId][switch.board].switches&&\n            onlineDevices[switch.deviceId][switch.board].switches.length&&\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=undefined&&\n            onlineDevices[switch.deviceId][switch.board].switches[switch.switch]!=null&&\n            switch.locationId == selectedLocation\" class=\"col-12\" style=\"padding:0px\">\n\n            <!-- <div style=\"text-align:center;height:150px;background:#fff;width: 100%;border-radius: 3px;padding: 15px;box-shadow: 0px 5px 7px 0px #cac9c921;\">\n              <i style=\"margin-top:30px;font-size:34px;opacity:0.5\" class=\"fas fa-tv\"></i>\n              <p style=\"margin-bottom:0px\" *ngIf=\"switch.name\"> {{switch.name}} </p>\n\n                <p style=\"margin-bottom:0px;margin-top:10px;\">\n                <span style=\"cursor:pointer;font-size:12px;font-weight:bold;position: absolute;top:5px;right:27px\" (click)=\"toggle(switch.deviceId,onlineDevices[switch.deviceId][switch.board].switches[switch.switch],switch.board,switch.switch)\">\n                  <span style=\"color:#2cb978\" *ngIf=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">ON</span>\n                  <span style=\"color:#00000040\" *ngIf=\"!onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\">OFF</span>\n                </span>\n                </p>\n\n                <ng-container *ngIf=\"selectedSwitches\">\n                  <button  *ngIf=\"!selectedForSchedule!||!selectedForSchedule[switch.deviceId]||\n                  !selectedForSchedule[switch.deviceId][switch.board]||\n                  !selectedForSchedule[switch.deviceId][switch.board][switch.switch]\"  (click)=\"addSchedule(switch)\" style=\"outline:none;border:none;background:none;\"><i class=\"far fa-square\"></i></button>\n                  <button *ngIf=\"selectedForSchedule[switch.deviceId]&&\n                  selectedForSchedule[switch.deviceId][switch.board]&&\n                  selectedForSchedule[switch.deviceId][switch.board][switch.switch]\" (click)=\"removeSchedule(switch)\" style=\"outline:none;border:none;background:none;\" ><i class=\"far fa-check-square\"></i></button>\n                </ng-container>\n            </div> -->\n            <div style=\"display: flex;\n            /* background: #393e46; */\n            color: #393e46;\n            padding: 15px 15px;\n            font-size: 18px;\n            border-bottom: 1px solid #393e4630;\n            align-items: center;\n            \">\n              <ng-container *ngIf=\"selectedSwitches\">\n                <button  *ngIf=\"!selectedForSchedule!||!selectedForSchedule[switch.deviceId]||\n                !selectedForSchedule[switch.deviceId][switch.board]||\n                !selectedForSchedule[switch.deviceId][switch.board][switch.switch]\"  (click)=\"addSchedule(switch)\" style=\"outline:none;border:none;background:none;margin-right: 15px;color:#ff5722;\"><i class=\"far fa-square\"></i></button>\n                <button *ngIf=\"selectedForSchedule[switch.deviceId]&&\n                selectedForSchedule[switch.deviceId][switch.board]&&\n                selectedForSchedule[switch.deviceId][switch.board][switch.switch]\" (click)=\"removeSchedule(switch)\" style=\"outline:none;border:none;background:none;margin-right: 15px;color:#ff5722;\" ><i class=\"far fa-check-square\"></i></button>\n              </ng-container>\n              <p style=\"margin-bottom:0px\" *ngIf=\"switch.name\"> {{switch.name}} </p>\n\n              <label class=\"switch\">\n                <input (click)=\"toggle(switch.deviceId,onlineDevices[switch.deviceId][switch.board].switches[switch.switch],switch.board,switch.switch)\" [(ngModel)]=\"onlineDevices[switch.deviceId][switch.board].switches[switch.switch]\" type=\"checkbox\">\n                <span class=\"slider round\"></span>\n              </label>\n            </div>\n            </div>\n          </ng-container>\n\n        </ng-container>\n      </ng-container>\n\n\n  </div>\n  <div *ngIf=\"onlineDevicesLength&&!locationsLength \"class=\"row\">\n    <div [routerLink]=\"['/device-list']\" *ngIf=\"!boards||!boards.length\" style=\"cursor:pointer;text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-microchip\"></i>\n      <p style=\"opacity:0.4\">No boards found. Click here to add a board.</p>\n    </div>\n    <div *ngIf=\"boards&&boards.length\" style=\"text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-map-marker-alt\"></i>\n      <p style=\"opacity:0.4\">Looks like you haven't added any locations yet. Please add Locations to continue.</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"devices && devices.length&&!onlineDevicesLength\"class=\"row\">\n    <div style=\"text-align:center\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"fas fa-wifi\"></i>\n      <p style=\"opacity:0.4\">Please make sure your device is connected to WiFi.</p>\n    </div>\n  </div>\n\n  <div  *ngIf=\"!devices || !devices.length\"class=\"row\">\n    <div [routerLink]=\"['/devices/']\" style=\"text-align:center;cursor:pointer\" class=\"col-12\">\n      <i style=\"font-size:70px;opacity:0.2;margin-bottom:15px;\" class=\"far fa-hdd\"></i>\n      <p style=\"opacity:0.4\">No Devices registered. Click here to register your device</p>\n    </div>\n  </div >\n\n\n</div>\n\n<!-- <pre>\n  {{selectedForSchedule | json}}\n</pre>\n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"l-text-top\">Get Started !</div>\n<div class=\"l-image\"><img src=\"content/images/singup.png\" height=\"150px\" /></div>\n<div class=\"l-inpbox\">\n  <div><input class=\"text-input\" placeholder=\"Email\" [(ngModel)]=\"username\"  name=\"username\"/></div>\n  <div><input placeholder=\"Password\" class=\"text-input\"  [(ngModel)]=\"password\" name=\"password\"   type=\"password\"/></div>\n</div>\n<p *ngIf=\"error\" style=\"position:absolute;color:red;text-align: center;width:100%\">{{error}}</p>\n<div class=\"l-btnbox\"><button [disabled]=\"!username||!password\" (click)=\"login()\" class=\"l-btn\"  >\n<div *ngIf=\"!loading\">\n\n  Login\n</div>\n  <div *ngIf=\"loading\" class=\"spinner-border text-light\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</button></div>\n<div [routerLink]=\"['/forgot-password']\" class=\"forgotpass\">Forgot Password?</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/refer/refer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/refer/refer.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:50px 15px\" class=\"container\">\n  <img style=\"width: 700px;\n  height: auto;\n  max-width: 100%;\n  margin: 0 auto;\n  display: block;\" src=\"content/pages/refer.png\"  alt=\"\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;padding:50px\">\n\n  <p style=\"font-size:18px;font-family: 'Roboto';\">Please enter your registered email address below. A password rest link will be sent to your inbox</p>\n  <div class=\"l-inpbox\">\n    <div><input type=\"password\" class=\"text-input\" placeholder=\"Enter new password\" [(ngModel)]=\"password\"  name=\"password\"/></div>\n  </div>\n  <p *ngIf=\"message\" class=\"message\">{{message}}</p>\n  <p *ngIf=\"error\" style=\"color:red;text-align: center;width:100%\">{{error}}</p>\n  <div class=\"l-btnbox\">\n    <button [disabled]=\"!password\" (click)=\"reset()\" class=\"l-btn\"  >\n  <div *ngIf=\"!loading\">\n\n    Submit\n  </div>\n    <div *ngIf=\"loading\" class=\"spinner-border text-light\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </button></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>schedule works!</p>\n{{deviceLength}}\n<pre>\n  {{allDevices|json}}\n</pre> -->\n<!-- <div [routerLink]=\"['/']\" style=\"position: relative;\" class=\"auto-head\">\n  <div class=\"auto-header\">Automation</div>\n  <div style=\"position: absolute;\n  right: 25px;\n  top: 10px;\"><img class=\"auto-back\" src=\"content/images/back.svg\" /></div>\n</div> -->\n<div class=\"auto-spacer\"></div>\n<div style=\"font-size:21px;\" class=\"auto0-bodyhead\">\n  Easily Automate your smart switches\n</div>\n<div  class=\"auto0-bodyhead1\" style=\"padding:0px\">\n  <button style=\"background-color: white;\n  width: 150px;\n  height: 40px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  color: #282c34;\n  font-size: 14px!important;\n  border: 2px solid #ff5722;\n  font-family: 'Roboto', sans-serif;\n  background: #ff5722!important;\n  color: #fff;\"  (click)=\"launch()\" class=\"addautobtn\">Add</button>\n</div>\n\n\n\n<div style=\"margin-bottom:250px\" class=\"container\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let schedule of schedules | keyvalue\">\n        <div style=\"padding:10px;margin:15px 0px;\" class=\"col-lg-3 col-md-4 col-6\">\n          <div style=\"border: 1px solid #2d4059;\" *ngIf=\"schedule.value&&schedule.value.schedule\">\n           <div style=\"color:#fff;padding:5px 10px;background:#2d4059\">\n             <p style=\"margin: 0px;\" *ngIf=\"schedule.value.schedule.name\">{{schedule.value.schedule.name}}</p>\n           </div>\n           <div style=\"padding:10px\">\n            <table>\n              <tr *ngIf=\"schedule.value.switchSize\">\n                <td><p style=\"font-weight:bold\">Switches: </p></td>\n                <td><p>{{schedule.value.switchSize}}</p></td>\n              </tr>\n              <tr *ngIf=\"schedule.value.schedule.start\">\n                <td><p style=\"font-weight:bold\">Start: </p></td>\n                <td><p >{{schedule.value.schedule.start}}</p></td>\n              </tr>\n              <tr  *ngIf=\"schedule.value.schedule.end\">\n                <td>   <p style=\"font-weight:bold\">Stop: </p>\n                </td>\n                <td>\n                  <p>{{schedule.value.schedule.end}}</p>\n\n                </td>\n              </tr>\n            </table>\n\n\n\n             <div *ngIf=\"schedule.value.daysList\" style=\"width: 100%;display: flex;justify-content: center;\">\n\n                <span style=\"flex-grow:1;flex-basis:0;opacity: 0.8;\" [ngClass]=\"{'bold':schedule.value.daysList.indexOf(day.i.toString())>=0}\" *ngFor=\"let day of days\">\n                  {{day.v}}\n                </span>\n            </div>\n            <div style=\"padding-top:10px;margin-top:10px;display: flex; border-top: 1px solid beige\">\n              <i (click)=\"toggleActive(schedule.value.schedule,schedule.value.devices)\" [ngClass]=\"{'active':schedule.value.schedule.active}\" style=\"cursor:pointer;text-align:center;flex-grow:1;flex-basis:0\" class=\"fas fa-power-off\"></i>\n              <i (click)=\"deleteSchedule(schedule.value.schedule,schedule.value.devices)\" style=\"cursor:pointer;text-align:center;flex-grow:1;flex-basis:0\" class=\"far fa-trash-alt\"></i>\n            </div>\n           </div>\n          </div>\n        </div>\n    </ng-container>\n  </div>\n</div>\n<!-- <pre>\n  {{schedules|json}}\n</pre> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding:0px;\">\n\n  <div class=\"container\">\n    <div [routerLink]=\"['/about']\" style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"fas fa-info-circle\"></i></div>\n      <div class=\"col-9\">About</div>\n    </div>\n    <div [routerLink]=\"['/change-password']\"  style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"fas fa-key\"></i></div>\n      <div class=\"col-9\">Change Password</div>\n    </div>\n    <div [routerLink]=\"['/refer']\" style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"fas fa-user-tag\"></i></div>\n      <div class=\"col-9\">Refer and Earn</div>\n    </div>\n    <div  [routerLink]=\"['/help']\" style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"far fa-question-circle\"></i></div>\n      <div class=\"col-9\">Help and FAQ</div>\n    </div>\n    <div [routerLink]=\"['/contact']\" style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"fas fa-phone-volume\"></i></div>\n      <div class=\"col-9\">Contact Us</div>\n    </div>\n    <div (click)=\"logout()\" style=\"padding:10px 15px;border-bottom:1px solid black\" class=\"row\">\n      <div class=\"col-1\"><i class=\"fas fa-power-off\"></i></div>\n      <div class=\"col-9\">Logout</div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-root\">\n\n  <div class=\"register-body\">\n\n    <div class=\"regbdy-up1\"></div>\n    <div class=\"lheadtext\"><p>Dont have an account yet?</p></div>\n    <div style=\"margin-top: 0px;\" class=\"lheadtext\"><img src=\"content/images/singup.png\" height=\"100px\"></div>\n\n\n    <div class=\"regbdy-up\">\n\n<!--     <input [(ngModel)]=\"username\" class=\"reginp\" placeholder=\"Username\">\n -->\n    <input [(ngModel)]=\"email\" type=\"email\" class=\"reginp\" placeholder=\"Email\">\n\n    <input [(ngModel)]=\"password\" class=\"reginp\" placeholder=\"Password\" type=\"password\">\n    <input [(ngModel)]=\"name\" class=\"reginp\" placeholder=\"Name\" type=\"text\">\n\n    <input [(ngModel)]=\"contact\" class=\"reginp\" placeholder=\"Contact number\" type=\"text\">\n\n\n    </div>\n    <div  style=\"margin-top:15px;\" class=regbdy-up2><input [(ngModel)]=\"terms\" type=\"checkbox\"></div>\n    <div class=regbdy-up2> <br/><p> I Agree to terms & conditions</p></div>\n    <div class=\"regbdy-down\"></div>\n  </div>\n  <div class=\"register-buttons\">\n    <button (click)=\"signup()\" [disabled]=\"!email||!password||!terms||!name||!contact\" class=\"register-btn\">\n     <div *ngIf=\"!loading\">\n\n       Register\n     </div>\n     <div *ngIf=\"loading\" class=\"spinner-border text-light\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    </button>\n  </div>\n  <p class=\"error\" *ngIf=\"error\"> {{error}}</p>\n  <p class=\"message\" *ngIf=\"success\">Sign up success. A verification email has been sent to your email account. <span style=\"cursor:pointer\" [routerLink]=\"['/login']\">Proceed to login</span></p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"selected\" style=\"position:fixed;bottom:0px;right:0px;background:#222831;height: 80px;width:100%;\">\n  <div class=\"container\">\n    <div style=\"color: #fff;\n    padding-top: 20px;text-align: center;\" class=\"row\">\n      <div [routerLink]=\"['/']\" [ngClass]=\"{'selected':selected=='Home'}\" class=\"col-3\">\n       <div>\n        <i class=\"fas fa-home\"></i>\n       </div>\n        <div>\n\n          Home\n        </div>\n      </div>\n      <div [routerLink]=\"['/usage']\"  [ngClass]=\"{'selected':selected=='Usage'}\" class=\"col-3\">\n        <div>\n          <i class=\"fas fa-chart-line\"></i>\n                 </div>\n          <div>\n\n            Usage\n          </div>\n      </div>\n      <div [routerLink]=\"['/schedules']\" [ngClass]=\"{'selected':selected=='Schedules'}\" class=\"col-3\">\n        <div>\n          <i class=\"far fa-calendar-alt\"></i>\n         </div>\n          <div>\n\n            Schedules\n          </div>\n      </div>\n      <div  [routerLink]=\"['/settings']\"  [ngClass]=\"{'selected':selected=='Settings'}\" class=\"col-3\">\n        <div>\n          <i class=\"fas fa-cog\"></i>\n                 </div>\n          <div>\n\n            Settings\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usage/usage.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usage/usage.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre style=\"    font-family: Roboto;\nmargin: 15px 15px;\ncolor: #ff5722;\nfont-weight: bold;\">\n  This week's usage\n</pre>\n<div style=\"margin-bottom:250px\" class=\"container\">\n<div class=\"row\">\n  <div class=\"col-12\">\n\n    <ng-container *ngIf=\"usage\">\n      <ng-container *ngFor=\"let u of usage | keyvalue\">\n        <span [ngClass]=\"{'selected':location==u.key}\" style=\"padding: 15px;\n        margin-right: 15px;\n        display: inline-block;\n        text-transform: capitalize;\" (click)=\"location=u.key\" *ngIf=\"u.value\">{{u.value.name}}</span>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div class=\"col-12\">\n\n\n    <div style=\"padding:40px 15px\">\n      <ng-container *ngIf=\"usage\">\n        <ng-container *ngFor=\"let u of usage | keyvalue\">\n          <ng-container *ngIf=\"u.key==location && u.value && u.value.switches && u.value.switches.length\">\n            <ng-container *ngFor=\"let switch of u.value.switches\">\n                  <div style=\"    display: flex;\n                  /* background: #393e46; */\n                  color: #393e46;\n                  padding: 15px 15px;\n                  font-size: 18px;\n                  border-bottom: 1px solid #393e4630;\n                  align-items: center;position:relative;\">\n                     <span style=\"text-transform: capitalize;\">{{switch.name}}</span> <span style=\"position:absolute;right:45px\">{{switch.duration}}</span>\n                  </div>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"login-root\">\n  <div class=\"login-head\">Email Verification</div>\n  <div style=\"margin-top:150px\" class=\"login-body\">\n    <p style=\"text-align: center;\">Your email has been verified successfully.</p>\n    <p [routerLink]=\"['/login']\" style=\"cursor:pointer;text-align: center;\">Proceed to login</p>\n\n\n  </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let AboutComponent = class AboutComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.title.next('About Us');
        this.layoutService.back.next(['/settings']);
        this.layoutService.toolbar.next(false);
    }
};
AboutComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/add-board/add-board.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-board/add-board.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib2FyZC9hZGQtYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-board/add-board.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-board/add-board.component.ts ***!
  \**************************************************/
/*! exports provided: AddBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBoardComponent", function() { return AddBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");





let AddBoardComponent = class AddBoardComponent {
    constructor(activeModal, socket, connect) {
        this.activeModal = activeModal;
        this.socket = socket;
        this.connect = connect;
        this.error = null;
    }
    ngOnInit() {
        this.socket.on('board_added', (res) => {
            if (!res.error) {
                this.adding = false;
                if (!this.adding && res.boardId) {
                    this.connect.getSwitches();
                    this.activeModal.dismiss();
                }
            }
            else {
                this.adding = false;
                this.error = res.error;
            }
        });
    }
    addBoard() {
        this.adding = true;
        this.error = null;
        this.socket.emit('addBoard', { boardId: this.boardId, deviceId: this.deviceId, token: localStorage.getItem('token') }, res => {
            if (!res || res.error) {
                this.adding = false;
                this.error = (res.error ? res.error : '.');
            }
        });
    }
    ngOnDestroy() {
        this.socket.removeListener('board_added');
    }
};
AddBoardComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddBoardComponent.prototype, "deviceId", void 0);
AddBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-board/add-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-board.component.css */ "./src/app/add-board/add-board.component.css")).default]
    })
], AddBoardComponent);



/***/ }),

/***/ "./src/app/add-location/add-location.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-location/add-location.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding{\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmd7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/add-location/add-location.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-location/add-location.component.ts ***!
  \********************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");







//TODO multiple device per location
let AddLocationComponent = class AddLocationComponent {
    // get available switches
    constructor(connect, socket, router, layoutService) {
        this.connect = connect;
        this.socket = socket;
        this.router = router;
        this.layoutService = layoutService;
        this.deviceLength = null;
        this.devices = {};
        this.allDevices = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.boards = [];
        this.selectedSwitches = {};
        this.assignedSwitches = {};
        this.activeRequests = [];
        this.showSwitches = false;
        this.switchCount = 0;
        this.selectedSwitchCount = 0;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/']);
        this.layoutService.title.next('Add Location');
        this.layoutService.toolbar.next(null);
        this.subscriptions.add(this.connect.onlineDevices$.subscribe(res => {
            if (res) {
                this.allDevices = Object.assign({}, JSON.parse(JSON.stringify(res)));
                console.log(JSON.parse(JSON.stringify(res)));
                console.log('allDevices', this.allDevices);
            }
            if (this.allDevices) {
                this.deviceLength = Object.keys(this.allDevices).length;
            }
            else {
                this.deviceLength = 0;
            }
            if (!this.deviceLength) {
                // this.activeModal.dismiss();
                this.router.navigate(['/']);
            }
            this.scan(true);
        }));
        this.socket.on('locationAdded', (res) => {
            if (!res.error) {
                if (res.name && res.deviceId) {
                    this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
                }
                if (!this.activeRequests.length && res.name) {
                    this.adding = false;
                    this.connect.getLocations();
                    // this.activeModal.dismiss();
                    this.router.navigate(['/']);
                }
            }
            else {
                this.adding = false;
                this.activeRequests = [];
                alert(res.error);
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.socket.removeListener('locationAdded');
        this.socket.removeListener('assignedSwitches');
    }
    scan(show) {
        if (this.allDevices && this.deviceLength) {
            const devices = Object.keys(this.allDevices);
            devices.map(d => {
                this.socket.emit('getAssignedSwitches', d);
                return d;
            });
            this.activeRequests = devices;
            //this.adding = true;
            this.socket.on('assignedSwitches', res => {
                if (res && res.deviceId) {
                    this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
                    if (res.switches && res.switches.length) {
                        res.switches.some(s => {
                            console.log(res);
                            console.log(this.allDevices);
                            if (this.allDevices[res.deviceId] && this.allDevices[res.deviceId][s.board]
                                && this.allDevices[res.deviceId][s.board].switches
                                // tslint:disable-next-line: radix
                                && (this.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === true ||
                                    this.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === false)) {
                                // tslint:disable-next-line: radix
                                this.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 1);
                                this.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 0, null);
                            }
                        });
                    }
                }
                if (!this.activeRequests.length) {
                    // this.adding = false;
                    if (show) {
                        this.showSwitches = true;
                    }
                    this.socket.removeListener('assignedSwitches');
                }
                this.devices = this.allDevices;
                const dk = Object.keys(this.devices);
                dk.map((d, ix) => {
                    const bk = Object.keys(this.devices[d]);
                    bk.map((b, ixx) => {
                        this.setSwitchCount(ix, ixx, this.devices[d][b]);
                        return b;
                    });
                    return d;
                });
            });
        }
    }
    select(device, board, swtch) {
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
    deselect(device, board, swtch) {
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
    toggle(device, value, board, swtch) {
        if (board && swtch != null && swtch !== undefined && device &&
            this.devices &&
            this.devices[device] &&
            this.devices[device][board] &&
            this.devices[device][board].switches &&
            this.devices[device][board].switches[swtch] != null &&
            this.devices[device][board].switches[swtch] !== undefined) {
            this.connect.toggle(device, !value, board, swtch);
        }
    }
    addLocation() {
        this.adding = true;
        this.activeRequests = Object.keys(this.selectedSwitches) || [];
        this.socket.emit('addLocation', { name: this.name, devices: this.selectedSwitches }, res => {
            if (!res || res.error) {
                this.adding = false;
                alert(res.error);
            }
        });
    }
    setSwitchCount(ix, ixx, board) {
        if (ix === 0 && ixx === 0) {
            this.switchCount = 0;
        }
        if (board && board.switches) {
            this.switchCount += board.switches.filter(f => f != null).length;
        }
    }
};
AddLocationComponent.ctorParameters = () => [
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_6__["LayoutServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddLocationComponent.prototype, "location", void 0);
AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-location.component.css */ "./src/app/add-location/add-location.component.css")).default]
    })
], AddLocationComponent);



/***/ }),

/***/ "./src/app/add-schedule/add-schedule.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-schedule/add-schedule.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\r\n\r\n.auto-head {\r\n  background-color: #282c34;\r\n  color: white;\r\n  font-size: 2rem;\r\n  padding: 0.8rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n\r\n  width: 100%;\r\n\r\n}\r\n\r\n.auto-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n.auto-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n.auto-spacer {\r\n  padding-top: 4rem;\r\n}\r\n\r\n.auto-footer {\r\n  background-color: #282c34;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n.auto-homeico {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.auto-homeico2 {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 3rem;\r\n}\r\n\r\n.auto-inp {\r\n  display: grid;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-inpp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  border-radius: 8px;\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n  width: 15rem;\r\n  outline: none;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-lbl {\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-help {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #282c34;\r\n}\r\n\r\n.auto-times {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n/*   grid-gap: 2rem;\r\n  padding-top: 2rem;\r\n  padding-left: 4rem; */\r\n}\r\n\r\n.auto-startt {\r\n  display: grid;\r\n  font-size: 1.5rem;\r\n  justify-content: end;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.auto-timei {\r\n  border-radius: 8px;\r\n  width: 30%;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.auto-day {\r\n  border: 1px solid #ff5722;\r\n  border-radius: 50%;\r\n  width: 42px;\r\n  color: #ff5722;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auto-days {\r\n  padding: 0.5rem;\r\n/*  padding-top: 3rem;\r\n */  display: flex;\r\n  justify-content: space-evenly;\r\n  cursor: pointer;\r\n}\r\n\r\n.auto-savebtn {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 3rem;\r\n}\r\n\r\n.auto-savebtnn {\r\n  background-color: #ff5722;\r\n    width: 150px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    border: none;\r\n    color: #fff;\r\n    font-weight: normal;\r\n    border: 2px solid #ff5722;\r\n    font-family: 'Roboto';\r\n    font-size: 14px;\r\n}\r\n\r\n.selected-day{\r\n  background: #ff5722!important;\r\n  color:#fff!important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXNjaGVkdWxlL2FkZC1zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTs7QUFFMUU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDOztFQUVqQyxXQUFXOztBQUViOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOzt1QkFFdUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7RUFDRSxHQUFHLGFBQWE7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zY2hlZHVsZS9hZGQtc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uYXV0by1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5hdXRvLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdXRvLWJhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uYXV0by1zcGFjZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG59XHJcblxyXG4uYXV0by1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRvLWhvbWVpY28ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5hdXRvLWhvbWVpY28yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG59XHJcblxyXG4uYXV0by1pbnAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvLWlucHAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXV0by1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dG8taGVscCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI4MmMzNDtcclxufVxyXG5cclxuLmF1dG8tdGltZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4vKiAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTsgKi9cclxufVxyXG5cclxuLmF1dG8tc3RhcnR0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXV0by10aW1laSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hdXRvLWRheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgY29sb3I6ICNmZjU3MjI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvLWRheXMge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuLyogIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gKi8gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXV0by1zYXZlYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG59XHJcblxyXG4uYXV0by1zYXZlYnRubiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY1NzIyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtZGF5e1xyXG4gIGJhY2tncm91bmQ6ICNmZjU3MjIhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiNmZmYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/add-schedule/add-schedule.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-schedule/add-schedule.component.ts ***!
  \********************************************************/
/*! exports provided: AddScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function() { return AddScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");







let AddScheduleComponent = class AddScheduleComponent {
    constructor(layoutService, router, connect, socket) {
        this.layoutService = layoutService;
        this.router = router;
        this.connect = connect;
        this.socket = socket;
        this.deviceLength = null;
        this.devices = {};
        this.allDevices = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.boards = [];
        this.selectedSwitches = {};
        this.assignedSwitches = {};
        this.activeRequests = [];
        this.switchCount = 0;
        this.selectedSwitchCount = 0;
        this.start = { hour: 0, minute: 0, second: 0 };
        this.stop = { hour: 0, minute: 0, second: 0 };
        this.selectedDaysLength = 0;
        this.selectedForSchedule = {};
        this.days = [
            { i: 0, v: 'S', selected: false },
            { i: 1, v: 'M', selected: false },
            { i: 2, v: 'T', selected: false },
            { i: 3, v: 'W', selected: false },
            { i: 4, v: 'T', selected: false },
            { i: 5, v: 'F', selected: false },
            { i: 6, v: 'S', selected: false },
        ];
    }
    displayCounter(selected) {
        this.selectedForSchedule = selected;
    }
    ngOnInit() {
        this.layoutService.toolbar.next(false);
        this.layoutService.title.next("Add Schedule");
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/schedules']);
        this.subscriptions.add(this.connect.onlineDevices$.subscribe(res => {
            if (res) {
                this.allDevices = JSON.parse(JSON.stringify(res));
            }
            if (this.allDevices) {
                this.deviceLength = Object.keys(this.allDevices).length;
            }
            else {
                this.deviceLength = 0;
            }
            if (!this.deviceLength) {
                this.router.navigate(['/schedules']);
            }
        }));
        this.socket.on('scheduleAdded', (res) => {
            console.log(res);
            if (!res.error) {
                if (res.name && res.deviceId) {
                    this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
                }
                if (!this.activeRequests.length && res.name) {
                    this.adding = false;
                    this.connect.getSchedules();
                    this.router.navigate(['/schedules']);
                }
            }
            else {
                this.adding = false;
                this.activeRequests = [];
                alert(res.error);
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.socket.removeListener('scheduleAdded');
    }
    addSchedule() {
        let payload = {};
        if (this.name && this.start && this.stop) {
            let schedule = {};
            let start = ([this.start.hour < 10 ? String('0' + this.start.hour).slice(-2) : this.start.hour,
                this.start.minute < 10 ? String('0' + this.start.minute).slice(-2) : this.start.minute,
                this.start.second < 10 ? String('0' + this.start.second).slice(-2) : this.start.second]).join(':').toString();
            let stop = ([this.stop.hour < 10 ? String('0' + this.stop.hour).slice(-2) : this.stop.hour,
                this.stop.minute < 10 ? String('0' + this.stop.minute).slice(-2) : this.stop.minute,
                this.stop.second < 10 ? String('0' + this.stop.second).slice(-2) : this.stop.second]).join(':').toString();
            payload.name = this.name;
            schedule.start = start;
            schedule.end = stop;
            schedule.days = this.days.filter(f => f.selected).map(m => m.i);
            payload.devices = this.selectedForSchedule;
            payload.schedule = schedule;
            this.adding = true;
            this.activeRequests = Object.keys(this.selectedForSchedule) || [];
            this.socket.emit('addSchedule', payload, res => {
                if (!res || res.error) {
                    this.adding = false;
                    alert(res.error);
                }
            });
        }
    }
    selectDay(day) {
        day.selected = !day.selected;
        this.selectedDaysLength = (this.days.filter(f => f.selected)).length;
    }
    disableBack() {
        this.layoutService.back.next(false);
    }
    enableBack() {
        this.layoutService.back.next(['/schedules']);
    }
};
AddScheduleComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_6__["LayoutServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
];
AddScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-schedule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-schedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-schedule/add-schedule.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-schedule.component.css */ "./src/app/add-schedule/add-schedule.component.css")).default]
    })
], AddScheduleComponent);



/***/ }),

/***/ "./src/app/add-switch/add-switch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-switch/add-switch.component.ts ***!
  \****************************************************/
/*! exports provided: AddSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSwitchComponent", function() { return AddSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let AddSwitchComponent = class AddSwitchComponent extends _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_2__["AddLocationComponent"] {
    constructor(activeModal, connect, socket, router, layoutService) {
        super(connect, socket, router, layoutService);
        this.activeModal = activeModal;
        this.connect = connect;
        this.socket = socket;
        this.router = router;
        this.layoutService = layoutService;
        this.addSwitch = true;
    }
    ngAfterViewInit() {
        this.socket.on('switchesAdded', (res) => {
            if (!res.error) {
                /*       if (res.name && res.deviceId) {
                        this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
                      }
                      if (!this.activeRequests.length && res.location) {
                        this.adding = false;
                        this.connect.getLocations();
                        this.activeModal.dismiss();
                      } */
                this.adding = false;
                this.connect.getLocations();
                this.activeModal.dismiss();
            }
            else {
                this.adding = false;
                this.activeRequests = [];
                alert(res.error);
            }
        });
    }
    addSwitches() {
        if (this.location) {
            this.name = this.location.name;
            this.adding = true;
            this.activeRequests = Object.keys(this.selectedSwitches) || [];
            this.socket.emit('addSwitches', { name: this.name, devices: this.selectedSwitches, location: this.location }, res => {
                if (!res || res.error) {
                    this.adding = false;
                    alert(res.error);
                }
            });
        }
    }
};
AddSwitchComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_3__["ConnectSocket"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_6__["LayoutServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddSwitchComponent.prototype, "location", void 0);
AddSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-switch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../add-location/add-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../add-location/add-location.component.css */ "./src/app/add-location/add-location.component.css")).default]
    })
], AddSwitchComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/chowkidaar */ "./src/app/blocks/chowkidaar.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device-list/device-list.component */ "./src/app/device-list/device-list.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _verified_verified_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verified/verified.component */ "./src/app/verified/verified.component.ts");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _usage_usage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usage/usage.component */ "./src/app/usage/usage.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _refer_refer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refer/refer.component */ "./src/app/refer/refer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-schedule/add-schedule.component */ "./src/app/add-schedule/add-schedule.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-location/edit-location.component */ "./src/app/edit-location/edit-location.component.ts");
























const routes = [
    { path: 'verified', component: _verified_verified_component__WEBPACK_IMPORTED_MODULE_11__["VerifiedComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { nav: true, toolbar: false, back: '/welcome' } },
    { path: 'welcome', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"] },
    { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"] },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"] },
    { path: 'edit-location', component: _edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_23__["EditLocationComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'add-location', component: _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__["AddLocationComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'add-schedule', component: _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_19__["AddScheduleComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'refer', component: _refer_refer_component__WEBPACK_IMPORTED_MODULE_16__["ReferComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'carousel', component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'device-list', component: _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__["DeviceListComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(m => m.AdminModule) },
    { path: 'devices', loadChildren: () => __webpack_require__.e(/*! import() | device-device-module */ "device-device-module").then(__webpack_require__.bind(null, /*! ./device/device.module */ "./src/app/device/device.module.ts")).then(m => m.DeviceModule) },
    { path: 'schedules', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: 'usage', component: _usage_usage_component__WEBPACK_IMPORTED_MODULE_14__["UsageComponent"], canActivate: [_blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_5__["Chowkidaar"]], data: { authorities: ['authenticated'] } },
    { path: '**', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'iot';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.js":
/*!*******************************!*\
  !*** ./src/app/app.config.js ***!
  \*******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
let Config = {
    server: 'http://134.209.155.230:3001'
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _blocks_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/auth-interceptor */ "./src/app/blocks/auth-interceptor.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./device-list/device-list.component */ "./src/app/device-list/device-list.component.ts");
/* harmony import */ var _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-board/add-board.component */ "./src/app/add-board/add-board.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _verified_verified_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./verified/verified.component */ "./src/app/verified/verified.component.ts");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.config.js */ "./src/app/app.config.js");
/* harmony import */ var _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./location-list/location-list.component */ "./src/app/location-list/location-list.component.ts");
/* harmony import */ var _home_toolbar_home_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home-toolbar/home-toolbar.component */ "./src/app/home-toolbar/home-toolbar.component.ts");
/* harmony import */ var _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-schedule/add-schedule.component */ "./src/app/add-schedule/add-schedule.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _usage_usage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./usage/usage.component */ "./src/app/usage/usage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _refer_refer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./refer/refer.component */ "./src/app/refer/refer.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./edit-location/edit-location.component */ "./src/app/edit-location/edit-location.component.ts");
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./data.provider */ "./src/app/data.provider.ts");
/* harmony import */ var _add_switch_add_switch_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./add-switch/add-switch.component */ "./src/app/add-switch/add-switch.component.ts");






































const config = { url: _app_config_js__WEBPACK_IMPORTED_MODULE_20__["Config"].server, options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config)
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
            _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"],
            _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleComponent"],
            _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_15__["DeviceListComponent"],
            _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__["LandingPageComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
            _verified_verified_component__WEBPACK_IMPORTED_MODULE_19__["VerifiedComponent"],
            _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_21__["LocationListComponent"],
            _home_toolbar_home_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["HomeToolbarComponent"],
            _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__["AddScheduleComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__["ToolbarComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_26__["SettingsComponent"],
            _usage_usage_component__WEBPACK_IMPORTED_MODULE_27__["UsageComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_29__["HelpComponent"],
            _refer_refer_component__WEBPACK_IMPORTED_MODULE_30__["ReferComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__["ChangePasswordComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_32__["ContactComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
            _edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_35__["EditLocationComponent"],
            _add_switch_add_switch_component__WEBPACK_IMPORTED_MODULE_37__["AddSwitchComponent"]
        ],
        entryComponents: [_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_13__["AddLocationComponent"], _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_16__["AddBoardComponent"], _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_23__["AddScheduleComponent"], _add_switch_add_switch_component__WEBPACK_IMPORTED_MODULE_37__["AddSwitchComponent"]],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _blocks_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
            _data_provider__WEBPACK_IMPORTED_MODULE_36__["Data"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blocks/auth-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/blocks/auth-interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        let authReq = req;
        if (token) {
            authReq = req.clone({
                headers: req.headers.set('Authorization', token)
            });
        }
        else {
            authReq = req.clone({
                headers: req.headers.delete('Authorization')
            });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/blocks/chowkidaar.ts":
/*!**************************************!*\
  !*** ./src/app/blocks/chowkidaar.ts ***!
  \**************************************/
/*! exports provided: Chowkidaar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chowkidaar", function() { return Chowkidaar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");




let Chowkidaar = class Chowkidaar {
    constructor(router, fetchData) {
        this.router = router;
        this.fetchData = fetchData;
    }
    canActivate(route, state) {
        const authorities = route.data['authorities'];
        const url = state.url;
        return this.fetchData.account().toPromise().then(res => {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (res && res.roles && res.roles.length) {
                let valid = true;
                authorities.map(a => {
                    if (res.roles.indexOf(a) === -1) {
                        valid = false;
                    }
                    return a;
                });
                if (!valid) {
                    if (sessionStorage.getItem('url')) {
                        sessionStorage.setItem('url', '');
                        this.router.navigate(['']);
                    }
                }
                sessionStorage.setItem('url', '');
                return valid;
            }
            sessionStorage.setItem('url', url);
            this.logout();
            return false;
        }, error => {
            sessionStorage.setItem('url', url);
            this.logout();
            return false;
        });
    }
    logout() {
        this.fetchData.logout().subscribe(r => { });
        localStorage.removeItem('token');
        this.router.navigate(['/welcome']);
    }
};
Chowkidaar.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__["FetchData"] }
];
Chowkidaar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], Chowkidaar);



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.step1-head {\r\n  background-color: #222831;\r\n    display: flex;\r\n    justify-content: center;\r\n    /* font-weight: bold; */\r\n    font-size: 21px;\r\n    color: white;\r\n    padding: 15px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    /* align-items: center; */\r\n\r\n}\r\n\r\n.step1-text {\r\n  padding: 28px;\r\n  font-size: 24px;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.step1-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 43px 81px;\r\n  font-size: 21px;\r\n}\r\n\r\n.step1-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.step1-btnn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n.step2-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n.step2-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.step2-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.step2-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.step2-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7O0FBRXBGO0VBQ0UseUJBQXlCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztJQUNqQyx5QkFBeUI7O0FBRTdCOztBQUlBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBS0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uc3RlcDEtaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnN0ZXAxLXRleHQge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnN0ZXAxLXR4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDNweCA4MXB4O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnN0ZXAxLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAxLWJ0bm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAjZjJmMmYyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc3RlcDItaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcDItdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3RlcDItdHh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc3RlcDItYnRubiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdGVwMi1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let CarouselComponent = class CarouselComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.step = 1;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(null);
        this.layoutService.title.next('Setup your Hub');
    }
    changeStep(title) {
        this.layoutService.title.next(title);
    }
};
CarouselComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-input{\r\n  background: transparent;\r\n    width: 250px;\r\n    height: 40px;\r\n    border: none;\r\n    border: 1px solid #ff5722;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    margin: 10px auto;\r\n\r\n  }\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.message{\r\n  color:green;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.l-btn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7OztBQUdGO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1pbnB1dHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjU3MjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgfVxyXG5cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbi5sLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6ICNmMmYyZjI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");




let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(layoutService, fetchData) {
        this.layoutService = layoutService;
        this.fetchData = fetchData;
        this.loading = false;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/settings']);
        this.layoutService.title.next('Change Password');
        this.layoutService.toolbar.next(false);
    }
    reset() {
        this.loading = true;
        this.message = null;
        this.error = null;
        this.fetchData.changePassword({ oldPassword: this.oldPassword, newPassword: this.newPassword }).subscribe(res => {
            this.loading = false;
            this.message = "Password changed successfully";
            this.oldPassword = null;
            this.newPassword = null;
        }, err => {
            this.loading = false;
            if (err && err.error && err.error.message) {
                this.message = err.error.message;
            }
            else {
                this.error = "Please try again";
            }
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] },
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__["FetchData"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let ContactComponent = class ContactComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.title.next('Contact Us');
        this.layoutService.back.next(['/settings']);
        this.layoutService.toolbar.next(false);
    }
};
ContactComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/data.provider.ts":
/*!**********************************!*\
  !*** ./src/app/data.provider.ts ***!
  \**********************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Data = class Data {
    constructor() {
        this.storage = {};
    }
};
Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Data);



/***/ }),

/***/ "./src/app/device-list/device-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/device-list/device-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1saXN0L2RldmljZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/device-list/device-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/device-list/device-list.component.ts ***!
  \******************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_board_add_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-board/add-board.component */ "./src/app/add-board/add-board.component.ts");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");








let DeviceListComponent = class DeviceListComponent {
    constructor(layoutService, connect, router, config, modalService) {
        this.layoutService = layoutService;
        this.connect = connect;
        this.router = router;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.object = Object;
    }
    ngOnInit() {
        this.layoutService.toolbar.next(null);
        this.layoutService.title.next("Home");
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/']);
        this.subscriptions.add(this.connect.onlineDevices$.subscribe(res => {
            if (res) {
                console.log(res);
                this.devices = Object.assign({}, res);
                this.onlineDevicesLength = Object.keys(this.devices).length;
            }
            if (!this.onlineDevicesLength) {
                this.router.navigateByUrl('/');
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    launchBoardAdder(deviceId) {
        if (deviceId) {
            const modalRef = this.modalService.open(_add_board_add_board_component__WEBPACK_IMPORTED_MODULE_6__["AddBoardComponent"], { backdrop: 'static', keyboard: false });
            modalRef.componentInstance.deviceId = deviceId;
        }
    }
};
DeviceListComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_7__["LayoutServiceService"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
DeviceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./device-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./device-list.component.css */ "./src/app/device-list/device-list.component.css")).default]
    })
], DeviceListComponent);



/***/ }),

/***/ "./src/app/edit-location/edit-location.component.css":
/*!***********************************************************!*\
  !*** ./src/app/edit-location/edit-location.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbG9jYXRpb24vZWRpdC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-location/edit-location.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-location/edit-location.component.ts ***!
  \**********************************************************/
/*! exports provided: EditLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLocationComponent", function() { return EditLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _app_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/data.provider */ "./src/app/data.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_switch_add_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-switch/add-switch.component */ "./src/app/add-switch/add-switch.component.ts");










let EditLocationComponent = class EditLocationComponent {
    constructor(connect, socket, layoutService, data, router, config, modalService) {
        this.connect = connect;
        this.socket = socket;
        this.layoutService = layoutService;
        this.data = data;
        this.router = router;
        this.modalService = modalService;
        this.editName = false;
        this.loading = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        if (!this.data.storage.locationId) {
            this.router.navigate(['/']);
        }
        this.location = JSON.parse(JSON.stringify(this.data.storage.location));
        this.locationId = this.data.storage.locationId;
        this.data.storage.locationId = null;
        this.data.storage.location = null;
        this.subscription.add(this.connect.onlineDevices$.subscribe(res => {
            if (res) {
                this.onlineDevices = Object.assign({}, res);
            }
        }));
        this.subscription.add(this.connect.locations$.subscribe(res => {
            if (res) {
                let locations = Object.assign({}, res);
                const keys = Object.keys(locations);
                if (keys.length) {
                    if (keys.indexOf(this.locationId) >= 0) {
                        keys.map(m => {
                            if (this.locationId == m) {
                                this.location = locations[m];
                            }
                            return m;
                        });
                    }
                    else {
                        this.router.navigate(['/']);
                    }
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        }));
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/']);
        this.layoutService.title.next('Edit Location');
        this.layoutService.toolbar.next(null);
        this.socket.on('editedSwitch', (res) => {
            if (!res.error) {
                if (res.name && res.id) {
                    this.loading = false;
                    if (this.location && this.location.switches) {
                        /* this.location.switches = this.location.switches.map(m => {
                          if (m.board == res.board && m.id == res.id) {
                              m.name = res.name;
                              m.edit = false;
                          }
            
                          return m;
                        }); */
                        this.connect.getLocations();
                    }
                }
            }
            else {
                this.error = res.error;
                this.loading = false;
            }
        });
        this.socket.on('editedLocationName', (res) => {
            if (!res.error) {
                if (res.name) {
                    this.loading = false;
                    this.location.name = res.name;
                    this.editName = false;
                }
            }
            else {
                this.error = res.error;
                this.loading = false;
            }
        });
        this.socket.on('deletedLocation', (res) => {
            if (!res.error) {
                if (res.id) {
                    this.loading = false;
                    this.router.navigate(['/']);
                }
            }
            else {
                this.error = res.error;
                this.loading = false;
            }
        });
        this.socket.on('deletedSwitch', (res) => {
            if (!res.error) {
                if (res.id) {
                    this.loading = false;
                    this.connect.getLocations();
                }
            }
            else {
                this.error = res.error;
                this.loading = false;
            }
        });
    }
    saveName() {
        if (!this.location.name && !this.loading) {
            return;
        }
        this.loading = true;
        this.error = null;
        this.socket.emit('editLocationName', { location: this.location }, res => {
            console.log(res);
            this.loading = false;
            if (!res || res.error) {
                this.error = res.error;
            }
        });
    }
    deleteLocation() {
        if (confirm('delete location?')) {
            if (!this.locationId) {
                return;
            }
            this.loading = true;
            this.error = null;
            this.socket.emit('deleteLocation', { locationId: this.locationId, location: this.location }, res => {
                console.log(res);
                this.loading = false;
                if (!res || res.error) {
                    this.error = res.error;
                }
            });
        }
    }
    toggle(swtch, value) {
        this.connect.toggle(swtch.deviceId, !value, swtch.board, swtch.switch);
    }
    deleteSwitch(s) {
        if (this.location.switches.length === 1) {
            if (confirm('Deleting this switch will delete location. Would you like to delete switch and location?')) {
                if (!this.locationId) {
                    return;
                }
                this.loading = true;
                this.error = null;
                this.socket.emit('deleteLocation', { locationId: this.locationId, location: this.location }, res => {
                    console.log(res);
                    this.loading = false;
                    if (!res || res.error) {
                        this.error = res.error;
                    }
                });
            }
        }
        else if (this.location.switches.length > 1) {
            if (confirm('delete switch?')) {
                if (!s.deviceId || !s.id) {
                    return;
                }
                this.loading = true;
                this.error = null;
                this.socket.emit('deleteSwitch', { switch: s }, res => {
                    console.log(res);
                    this.loading = false;
                    if (!res || res.error) {
                        this.error = res.error;
                    }
                });
            }
        }
    }
    addSwitch() {
        const modal = this.modalService.open(_add_switch_add_switch_component__WEBPACK_IMPORTED_MODULE_9__["AddSwitchComponent"]);
        modal.componentInstance.location = this.location;
    }
    saveSwitch(sw) {
        if (!sw.name || !sw.id) {
            return;
        }
        this.loading = true;
        this.error = null;
        this.socket.emit('editSwitch', { switch: sw }, res => {
            console.log(res);
            this.loading = false;
            if (!res || res.error) {
                this.error = res.error;
            }
        });
    }
};
EditLocationComponent.ctorParameters = () => [
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_7__["ConnectSocket"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] },
    { type: _app_data_provider__WEBPACK_IMPORTED_MODULE_3__["Data"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }
];
EditLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-location/edit-location.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-location.component.css */ "./src/app/edit-location/edit-location.component.css")).default]
    })
], EditLocationComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-input{\r\n  background: transparent;\r\n    width: 250px;\r\n    height: 40px;\r\n    border: none;\r\n    border: 1px solid #ff5722;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    margin: 10px auto;\r\n\r\n  }\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.message{\r\n  color:green;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.l-btn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7OztBQUdGO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1pbnB1dHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjU3MjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgfVxyXG5cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbi5sLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6ICNmMmYyZjI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(layoutService, fetchData) {
        this.layoutService = layoutService;
        this.fetchData = fetchData;
        this.loading = false;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/login']);
        this.layoutService.title.next('Forgot Password');
        this.layoutService.toolbar.next(false);
    }
    reset() {
        this.loading = true;
        this.message = null;
        this.error = null;
        this.fetchData.forgotPassword({ email: this.email }).subscribe(res => {
            this.loading = false;
            this.message = "Reset link sent to " + this.email;
            this.email = null;
        }, err => {
            this.loading = false;
            if (err && err.error && err.error.message) {
                this.message = err.error.message;
            }
            else {
                this.error = "Please try again";
            }
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] },
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__["FetchData"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let HeaderComponent = class HeaderComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.layoutService.header.subscribe(header => {
            this.show = header;
        }));
        this.subscriptions.add(this.layoutService.title.subscribe(title => {
            this.title = title;
        }));
        this.subscriptions.add(this.layoutService.back.subscribe(back => {
            this.back = back;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let HelpComponent = class HelpComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.title.next('Help and FAQ');
        this.layoutService.back.next(['/settings']);
        this.layoutService.toolbar.next(false);
    }
};
HelpComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")).default]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/home-toolbar/home-toolbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home-toolbar/home-toolbar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdG9vbGJhci9ob21lLXRvb2xiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home-toolbar/home-toolbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home-toolbar/home-toolbar.component.ts ***!
  \********************************************************/
/*! exports provided: HomeToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeToolbarComponent", function() { return HomeToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeToolbarComponent = class HomeToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-toolbar/home-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-toolbar.component.css */ "./src/app/home-toolbar/home-toolbar.component.css")).default]
    })
], HomeToolbarComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel {\r\n  padding: 12px 30px;\r\n  background: #222831;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #ff5722;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n\r\n.h-head {\r\n  background-color: #222831;\r\n  color: white;\r\n  font-size: 21px;\r\n  padding: 15px;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.h-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n\r\n.h-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYixxQkFBcUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFLQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzIyMjgzMTtcclxuICBjb2xvcjogI2ZmZjtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDE5cHggMHB4ICM2ZDY5Njk2MTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjU3MjI7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogIzJjYjk3OCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaC1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaC1iYWNrIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG5cclxuLmgtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/chowkidaar */ "./src/app/blocks/chowkidaar.ts");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let HomeComponent = class HomeComponent {
    /*   locationsLength = 0;
      boards = []; */
    constructor(router, layoutService, fetchData, chowkidaar, connect, dataservice, config, modalService) {
        this.router = router;
        this.layoutService = layoutService;
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
    ngOnInit() {
        this.layoutService.toolbar.next('Home');
        this.layoutService.header.next(true);
        this.layoutService.back.next(null);
        this.layoutService.title.next('Home');
        this.fetchData.registeredDevices().subscribe((res) => {
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
                this.subscriptions.add(this.connect.onlineDevices$.subscribe((response) => {
                    if (response) {
                        this.onlineDevices = Object.assign({}, response);
                        this.onlineDevicesLength = Object.keys(this.onlineDevices).length;
                    }
                    else {
                        this.onlineDevices = null;
                        this.onlineDevicesLength = 0;
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
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        // this.connect.leaveAll(Object.keys(this.joinedRooms));
    }
    logout() {
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
    launchDeviceAdder() {
        this.router.navigate(['add-location']);
        /* if (this.onlineDevicesLength) {
          const modalRef = this.modalService.open(AddLocationComponent);
    
        } */
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_8__["LayoutServiceService"] },
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__["Chowkidaar"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".land-root {\r\n  display: grid;\r\n  grid-template-rows: 10% 60% 30%;\r\n  height: 100vh;\r\n  width: 600px;\r\n    max-width: 100vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.land-buttons {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.land-loginbtn {\r\n  background-color: #282c34;\r\n  border-radius: 8px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-regbtn {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  border: 2px solid #282c34;\r\n  outline: none;\r\n  color: #282c34;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.land-top {\r\n  margin: auto auto;\r\n}\r\n\r\n.land-logo {\r\n  display: block;\r\n  -webkit-animation: rotate 3s infinite;\r\n          animation: rotate 3s infinite;\r\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n          animation-timing-function: cubic-bezier(1, 0, 0.5, 1);\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.appname {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n}\r\n\r\n.landhelp {\r\n  padding: 1rem;\r\n}\r\n\r\n.land-help {\r\n  display: grid;\r\n  justify-content: end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsWUFBWTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qiw2REFBcUQ7VUFBckQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZC1yb290IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDYwJSAzMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sYW5kLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG59XHJcblxyXG4ubGFuZC1sb2dpbmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4ubGFuZC1yZWdidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjgyYzM0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICMyODJjMzQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4ubGFuZC10b3Age1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubGFuZC1sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBhbmltYXRpb246IHJvdGF0ZSAzcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMSwgMCwgMC41LCAxKTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxhbmRoZWxwIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubGFuZC1oZWxwIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");




let LandingPageComponent = class LandingPageComponent {
    constructor(router, layoutService) {
        this.router = router;
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(false);
        this.layoutService.toolbar.next(null);
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/layout-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/layout-service.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutServiceService", function() { return LayoutServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LayoutServiceService = class LayoutServiceService {
    constructor() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.back = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.header = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.toolbar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
};
LayoutServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutServiceService);



/***/ }),

/***/ "./src/app/location-list/location-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/location-list/location-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel {\r\n  padding: 12px 30px;\r\n  background: #3d5af1;\r\n  color: #fff;\r\ndisplay: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 7px 19px 0px #6d696961;\r\n}\r\n\r\n\r\n.selected {\r\n  border-bottom: 2px solid #f96d00;\r\n}\r\n\r\n\r\n.disabled{\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.green {\r\n  color: #2cb978!important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24tbGlzdC9sb2NhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYixxQkFBcUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFLQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWxpc3QvbG9jYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzNkNWFmMTtcclxuICBjb2xvcjogI2ZmZjtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggN3B4IDE5cHggMHB4ICM2ZDY5Njk2MTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmOTZkMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogIzJjYjk3OCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/location-list/location-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/location-list/location-list.component.ts ***!
  \**********************************************************/
/*! exports provided: LocationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationListComponent", function() { return LocationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/chowkidaar */ "./src/app/blocks/chowkidaar.ts");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_location_add_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-location/add-location.component */ "./src/app/add-location/add-location.component.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _app_data_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/data.provider */ "./src/app/data.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let LocationListComponent = class LocationListComponent {
    constructor(fetchData, chowkidaar, connect, dataservice, router, config, modalService, data) {
        this.fetchData = fetchData;
        this.chowkidaar = chowkidaar;
        this.connect = connect;
        this.dataservice = dataservice;
        this.router = router;
        this.modalService = modalService;
        this.data = data;
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
    editLocation(id, location) {
        this.data.storage.location = location;
        this.data.storage.locationId = id;
        this.router.navigate(['/edit-location']);
    }
    addSchedule(s) {
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
    removeSchedule(s) {
        if (this.selectedForSchedule[s.deviceId] && this.selectedForSchedule[s.deviceId][s.board]
            && this.selectedForSchedule[s.deviceId][s.board][s.switch]) {
            delete this.selectedForSchedule[s.deviceId][s.board][s.switch];
        }
        this.valueChange.emit(this.selectedForSchedule);
    }
    ngOnInit() {
        this.locations = {};
        this.connect.getLocations();
        if (this.selectedSwitches) {
            this.selectedForSchedule = this.selectedSwitches;
        }
        this.fetchData.registeredDevices().subscribe((res) => {
            if (res && res.devices && res.devices.length) {
                this.subscriptions.add(this.connect.locations$.subscribe(res => {
                    this.locations = Object.assign({}, res);
                    this.locationsLength = Object.keys(this.locations).length;
                    if (!this.selectedLocation && this.locations && Object.keys(this.locations)[0]) {
                        this.selectedLocation = Object.keys(res)[0];
                    }
                }));
                this.subscriptions.add(this.connect.roomsMap.subscribe((roomsMap) => {
                    if (roomsMap) {
                        console.log(roomsMap);
                        this.joinedRooms = Object.assign({}, roomsMap);
                        this.roomsCount = Object.keys(roomsMap).length;
                    }
                }));
                this.subscriptions.add(this.connect.onlineDevices$.subscribe((response) => {
                    if (response) {
                        this.onlineDevices = Object.assign({}, response);
                        this.onlineDevicesLength = Object.keys(this.onlineDevices).length;
                    }
                    else {
                        this.onlineDevices = null;
                        this.onlineDevicesLength = 0;
                    }
                }));
                this.subscriptions.add(this.connect.boards$.subscribe((response) => {
                    this.boards = response;
                }));
                this.devices = Object.assign({}, res).devices;
                this.devices.map(m => {
                    this.connect.join(m.deviceId, m);
                    return m;
                });
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        // this.connect.leaveAll(Object.keys(this.joinedRooms));
    }
    logout() {
        this.chowkidaar.logout();
    }
    inRoom(deviceId) {
        if (this.roomsCount && this.joinedRooms[deviceId]) {
            return true;
        }
        return false;
    }
    toggle(device, value, board, swtch) {
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
    launchDeviceAdder() {
        if (this.onlineDevicesLength) {
            const modalRef = this.modalService.open(_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_7__["AddLocationComponent"]);
        }
    }
};
LocationListComponent.ctorParameters = () => [
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__["Chowkidaar"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_4__["ConnectSocket"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _app_data_provider__WEBPACK_IMPORTED_MODULE_9__["Data"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LocationListComponent.prototype, "selectedSwitches", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LocationListComponent.prototype, "valueChange", void 0);
LocationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-list/location-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-list.component.css */ "./src/app/location-list/location-list.component.css")).default]
    })
], LocationListComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\r\n\r\n.l-head {\r\n  background-color: #222831;\r\n  color: white;\r\n  font-size: 21px;\r\n  padding: 15px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 999;\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr;\r\n  height:100px;\r\n}\r\n\r\n.l-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  position: absolute;\r\n    right: 15px;\r\n    top: 18px;\r\n}\r\n\r\n.l-signup {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n.l-image {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.l-text-top {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 15px;\r\n  text-align: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\n.l-inpbox {\r\n  display: grid;\r\n  justify-content: center;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.l-inp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  border-radius: 8px;\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n  width: 15rem;\r\n  outline: none;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.l-lab {\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #ff5722;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.l-lab2 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #ff5722;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.l-btn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n.l-btnbox {\r\n  padding-top: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.forgotpass {\r\n  padding-top: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  color: #ff5722;\r\n\r\n}\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n.text-input{\r\nbackground: transparent;\r\n  width: 250px;\r\n  height: 40px;\r\n  border: none;\r\n  border: 1px solid #ff5722;\r\n  border-radius: 4px;\r\n  padding-left: 10px;\r\n  margin: 10px auto;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7O0FBRTFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCLGNBQWM7O0FBRWhCOztBQUlBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsdUJBQXVCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5sLWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xyXG4gIGhlaWdodDoxMDBweDtcclxufVxyXG5cclxuLmwtYmFjayB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5sLXNpZ251cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5sLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubC10ZXh0LXRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ubC1pbnBib3gge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5sLWlucCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4ubC1sYWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmY1NzIyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5sLWxhYjIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmY1NzIyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5sLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5sLWJ0bmJveCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcmdvdHBhc3Mge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAjZmY1NzIyO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0e1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzIyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");






let LoginComponent = class LoginComponent {
    constructor(fetchData, router, dataService, layoutService) {
        this.fetchData = fetchData;
        this.router = router;
        this.dataService = dataService;
        this.layoutService = layoutService;
        this.loading = false;
    }
    ngOnInit() {
        this.layoutService.title.next('Login');
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/welcome']);
        this.layoutService.toolbar.next(null);
    }
    login() {
        this.loading = true;
        this.error = null;
        this.fetchData.login({ username: this.username, password: this.password }).subscribe((res) => {
            if (res.id && res.userId) {
                localStorage.setItem('token', res.id);
                this.fetchData.account().subscribe(res => {
                    this.loading = false;
                    if (!res.emailVerified) {
                        this.error = "Email not verified, please check your email";
                    }
                    else {
                        this.fetchData.registeredDevices().subscribe(res => {
                            console.log(res);
                            if (res.devices && res.devices.length) {
                                this.dataService.setDevices(res.devices);
                                if (!sessionStorage.getItem('url')) {
                                    this.router.navigate(['']);
                                }
                                else {
                                    this.router.navigate([sessionStorage.getItem('url')]);
                                }
                            }
                            else {
                                this.dataService.setDevices([]);
                                this.router.navigate(['carousel']);
                            }
                        }, err => {
                            this.loading = false;
                            console.log(err);
                        });
                    }
                }, err => {
                    this.loading = false;
                    this.error = "Account not found";
                });
            }
        }, (err) => {
            console.log(err);
            console.log(err.error);
            this.loading = false;
            if (err && err.error && err.error && err.error.error.message) {
                this.error = err.error.error.message;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_5__["LayoutServiceService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/refer/refer.component.css":
/*!*******************************************!*\
  !*** ./src/app/refer/refer.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyL3JlZmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/refer/refer.component.ts":
/*!******************************************!*\
  !*** ./src/app/refer/refer.component.ts ***!
  \******************************************/
/*! exports provided: ReferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferComponent", function() { return ReferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");



let ReferComponent = class ReferComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.title.next('Refer and Earn');
        this.layoutService.back.next(['/settings']);
        this.layoutService.toolbar.next(false);
    }
};
ReferComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] }
];
ReferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/refer/refer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refer.component.css */ "./src/app/refer/refer.component.css")).default]
    })
], ReferComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-input{\r\n  background: transparent;\r\n    width: 250px;\r\n    height: 40px;\r\n    border: none;\r\n    border: 1px solid #ff5722;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    margin: 10px auto;\r\n\r\n  }\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.message{\r\n  color:green;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.l-btn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0VBRW5COzs7QUFHRjtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWlucHV0e1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG5cclxuICB9XHJcblxyXG5cclxuLmVycm9ye1xyXG4gIGNvbG9yOnJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICBjb2xvcjpncmVlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmwtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogI2YyZjJmMjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(route, router, fetchData, layoutService) {
        this.route = route;
        this.router = router;
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.loading = false;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/login']);
        this.layoutService.title.next('Reset Password');
        this.layoutService.toolbar.next(false);
        this.sub = this.route
            .queryParams
            .subscribe(params => {
            console.log(params);
            if (params && params.access_token) {
                localStorage.setItem('token', params.access_token);
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    reset() {
        this.loading = true;
        this.message = null;
        this.error = null;
        this.fetchData.resetPassword({ newPassword: this.password }).subscribe(res => {
            this.loading = false;
            this.message = "Password changed successfully";
            this.password = null;
            localStorage.delete('token');
        }, err => {
            this.loading = false;
            if (err && err.error && err.error.message) {
                this.message = err.error.message;
            }
            else {
                this.error = "Please try again";
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_3__["FetchData"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_4__["LayoutServiceService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auto-head {\r\n  background-color: #282c34;\r\n  color: white;\r\n  font-size: 2rem;\r\n  padding: 0.8rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  width: 100%;;\r\n}\r\n\r\n\r\n.auto-header {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n\r\n.auto-back {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n}\r\n\r\n\r\n.auto-spacer {\r\n  padding-top: 0px;\r\n}\r\n\r\n\r\n.auto-footer {\r\n  background-color: #282c34;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.auto-homeico {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 1rem;\r\n}\r\n\r\n\r\n.auto-homeico2 {\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  padding: 0.5rem;\r\n  float: left;\r\n  padding-left: 3rem;\r\n}\r\n\r\n\r\n.auto0-bodyhead {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.auto0-bodyhead1 {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.addautobtn {\r\n  background-color: white;\r\n  width: 150px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #282c34;\r\n  font-weight: bold;\r\n  border: 2px solid #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n.bold{\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.active{\r\n  color:green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDJDQUEyQztBQUM3Qzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0by1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlOztcclxufVxyXG5cclxuXHJcbi5hdXRvLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdXRvLWJhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uYXV0by1zcGFjZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5hdXRvLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF1dG8taG9tZWljbyB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmF1dG8taG9tZWljbzIge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbn1cclxuXHJcbi5hdXRvMC1ib2R5aGVhZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dG8wLWJvZHloZWFkMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZGF1dG9idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMjgyYzM0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyODJjMzQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYm9sZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOmdyZWVuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");








let ScheduleComponent = class ScheduleComponent {
    constructor(layoutService, router, connect, socket, config, modalService) {
        this.layoutService = layoutService;
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
        this.days = [
            { i: 0, v: 'S', selected: false },
            { i: 1, v: 'M', selected: false },
            { i: 2, v: 'T', selected: false },
            { i: 3, v: 'W', selected: false },
            { i: 4, v: 'T', selected: false },
            { i: 5, v: 'F', selected: false },
            { i: 6, v: 'S', selected: false },
        ];
        config.backdrop = 'static';
        config.keyboard = false;
        config.size = 'lg';
    }
    ngOnInit() {
        this.layoutService.toolbar.next("Schedules");
        this.layoutService.title.next("Schedules");
        this.layoutService.header.next(true);
        this.layoutService.back.next(false);
        this.subscriptions.add(this.connect.onlineDevices$.subscribe(res => {
            if (res) {
                this.onlineDevices = JSON.parse(JSON.stringify(res));
            }
            if (this.onlineDevices) {
                this.deviceLength = Object.keys(this.onlineDevices).length;
            }
            else {
                this.deviceLength = 0;
            }
            if (!this.deviceLength) {
                this.router.navigate(['/']);
            }
            else {
                const devices = Object.keys(this.onlineDevices);
                devices.map(m => {
                    this.socket.emit('getSchedules', m);
                    return m;
                });
            }
        }));
        this.socket.on('scheduleToggled', msg => {
            if (msg.err && !msg.deviceId) {
                this.activeRequests[msg.scheduleId] = null;
            }
            if (msg.deviceId && this.activeRequests[msg.scheduleId] && this.activeRequests[msg.scheduleId].length &&
                this.activeRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
                this.activeRequests[msg.scheduleId].splice(this.activeRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
            }
            if (this.activeRequests[msg.scheduleId] && !this.activeRequests[msg.scheduleId].length) {
                this.activeRequests[msg.scheduleId] = null;
            }
            const d = Object.keys(this.onlineDevices);
            d.map(m => {
                this.socket.emit('getSchedules', m);
                return m;
            });
        });
        this.socket.on('scheduleDeleted', msg => {
            if (msg.err && !msg.deviceId) {
                this.deleteRequests[msg.scheduleId] = null;
            }
            if (msg.deviceId && this.deleteRequests[msg.scheduleId] && this.deleteRequests[msg.scheduleId].length &&
                this.deleteRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
                this.deleteRequests[msg.scheduleId].splice(this.deleteRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
            }
            if (this.deleteRequests[msg.scheduleId] && !this.deleteRequests[msg.scheduleId].length) {
                this.deleteRequests[msg.scheduleId] = null;
            }
            const d = Object.keys(this.onlineDevices);
            d.map(m => {
                this.socket.emit('getSchedules', m);
                return m;
            });
        });
        this.getSchedules();
    }
    getSchedules() {
        this.socket.on('schedules', (msg) => {
            if (!msg.error) {
                // this.schedules = msg;
                if (msg.schedules && msg.schedules.length) {
                    msg.schedules.map(m => {
                        if (!this.schedules[m.scheduleId]) {
                            this.schedules[m.scheduleId] = {};
                        }
                        this.schedules[m.scheduleId].schedule = m;
                        if (this.schedules[m.scheduleId].schedule && this.schedules[m.scheduleId].schedule.days) {
                            this.schedules[m.scheduleId].daysList = this.schedules[m.scheduleId].schedule.days.split(',');
                        }
                        if (!this.schedules[m.scheduleId].devices) {
                            this.schedules[m.scheduleId].devices = {};
                        }
                        if (!this.schedules[m.scheduleId].devices[msg.deviceId]) {
                            this.schedules[m.scheduleId].devices[msg.deviceId] = {};
                        }
                        if (!this.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id]) {
                            this.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id] = m;
                            if (!this.schedules[m.scheduleId].switchSize) {
                                this.schedules[m.scheduleId].switchSize = 0;
                            }
                            this.schedules[m.scheduleId].switchSize += 1;
                        }
                        return m;
                    });
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.socket.removeListener('schedules');
    }
    launch() {
        if (this.deviceLength) {
            this.router.navigate(['/add-schedule']);
            /*      const modalRef = this.modalService.open(AddScheduleComponent);
                 modalRef.result.then(res => {
                   const devices = Object.keys(this.onlineDevices);
                   devices.map(m => {
                     this.socket.emit('getSchedules', m);
                     return m;
                   });
                 }, err => {
                   const devices = Object.keys(this.onlineDevices);
                   devices.map(m => {
                     this.socket.emit('getSchedules', m);
                     return m;
                   });
                 }); */
        }
    }
    toggleActive(schedule, devices) {
        if (!this.activeRequests[schedule.scheduleId]) {
            this.activeRequests[schedule.scheduleId] = [];
        }
        let deviceKeys = Object.keys(devices);
        if (deviceKeys && deviceKeys.length) {
            deviceKeys.map(device => {
                this.activeRequests[schedule.scheduleId].push(device);
                let payload = {};
                payload.scheduleId = schedule.scheduleId;
                payload.deviceId = device;
                payload.active = schedule.active;
                this.socket.emit('toggleSchedule', payload);
                return device;
            });
        }
    }
    deleteSchedule(schedule, devices) {
        if (!this.deleteRequests[schedule.scheduleId]) {
            this.deleteRequests[schedule.scheduleId] = [];
        }
        let deviceKeys = Object.keys(devices);
        if (deviceKeys && deviceKeys.length) {
            this.schedules = {};
            deviceKeys.map(device => {
                this.deleteRequests[schedule.scheduleId].push(device);
                let payload = {};
                payload.scheduleId = schedule.scheduleId;
                payload.deviceId = device;
                this.socket.emit('deleteSchedule', payload);
                return device;
            });
        }
    }
};
ScheduleComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_7__["LayoutServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")).default]
    })
], ScheduleComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/chowkidaar */ "./src/app/blocks/chowkidaar.ts");




let SettingsComponent = class SettingsComponent {
    constructor(layoutService, chowkidaar) {
        this.layoutService = layoutService;
        this.chowkidaar = chowkidaar;
    }
    ngOnInit() {
        this.layoutService.header.next(true);
        this.layoutService.title.next('Settings');
        this.layoutService.back.next(null);
        this.layoutService.toolbar.next('Settings');
    }
    logout() {
        this.chowkidaar.logout();
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] },
    { type: _blocks_chowkidaar__WEBPACK_IMPORTED_MODULE_3__["Chowkidaar"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/shared/constants/rest-endpoints.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/constants/rest-endpoints.ts ***!
  \****************************************************/
/*! exports provided: RestEndpointConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestEndpointConstants", function() { return RestEndpointConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RestEndpointConstants {
}
RestEndpointConstants.RestEndpoints = {
    endpoints: [
        {
            name: 'signup',
            url: '/api/Customers',
            method: 'post'
        },
        {
            name: 'login',
            url: '/api/Customers/login',
            method: 'post'
        },
        {
            name: 'logout',
            url: '/api/Customers/logout',
            method: 'post'
        },
        {
            name: 'registeredDevices',
            url: '/api/Devices/registered',
            method: 'get'
        },
        {
            name: 'account',
            url: '/api/account',
            method: 'get'
        },
        {
            name: 'postDevice',
            url: '/api/Devices',
            method: 'post'
        },
        {
            name: 'registerBoard',
            url: '/api/Boards',
            method: 'post'
        },
        {
            name: 'getDeviceByDeviceId',
            url: '/api/Devices/findOne?filter={"where":{"deviceId":"{parameter}"},"include":["boards"]}',
            method: 'get'
        },
        {
            name: 'registerDevice',
            url: '/api/Devices/register?id={parameter}',
            method: 'patch'
        },
        {
            name: 'forgotPassword',
            url: '/api/Customers/reset',
            method: 'post'
        },
        {
            name: 'resetPassword',
            url: '/api/Customers/reset-password',
            method: 'post'
        },
        {
            name: 'changePassword',
            url: '/api/Customers/change-password',
            method: 'post'
        },
        {
            name: 'adminDevices',
            url: '/api/Devices',
            method: 'get'
        },
        {
            name: 'patchAdminDevices',
            url: '/api/Devices{parameter}',
            method: 'patch'
        },
        {
            name: 'deleteAdminDevices',
            url: '/api/Devices/{parameter}',
            method: 'delete'
        },
        {
            name: 'adminBoards',
            url: '/api/Boards',
            method: 'get'
        },
        {
            name: 'patchAdminBoards',
            url: '/api/Boards{parameter}',
            method: 'patch'
        },
        {
            name: 'deleteAdminBoards',
            url: '/api/Boards/{parameter}',
            method: 'delete'
        },
        {
            name: 'users',
            url: '/api/users/devices',
            method: 'get'
        },
        {
            name: 'patchUsers',
            url: '/api/Customers{parameter}',
            method: 'patch'
        },
        {
            name: 'deleteUsers',
            url: '/api/Customers/{parameter}',
            method: 'delete'
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataService = class DataService {
    constructor() {
        this.devicesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.devices$ = this.devicesSubject$.asObservable();
    }
    setDevices(devices) {
        this.devicesSubject$.next(devices);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/services/fetch-data.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/fetch-data.ts ***!
  \***********************************************/
/*! exports provided: FetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchData", function() { return FetchData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-endpoints */ "./src/app/shared/services/service-endpoints.ts");



let FetchData = class FetchData {
    constructor(serviceEndpoints) {
        this.serviceEndpoints = serviceEndpoints;
    }
    signup(payload) {
        return this.serviceEndpoints.init().signup.makeRequest(payload);
    }
    login(payload) {
        return this.serviceEndpoints.init().login.makeRequest(payload);
    }
    logout() {
        return this.serviceEndpoints.init().logout.makeRequest();
    }
    registeredDevices() {
        return this.serviceEndpoints.init().registeredDevices.makeRequest();
    }
    account() {
        return this.serviceEndpoints.init().account.makeRequest();
    }
    postDevice(payload) {
        return this.serviceEndpoints.init().postDevice.makeRequest(payload);
    }
    registerBoard(payload) {
        return this.serviceEndpoints.init().registerBoard.makeRequest(payload);
    }
    getDeviceByDeviceId(param) {
        return this.serviceEndpoints.init().getDeviceByDeviceId.makeRequest(null, param);
    }
    registerDevice(param) {
        return this.serviceEndpoints.init().registerDevice.makeRequest({}, param);
    }
    forgotPassword(payload) {
        return this.serviceEndpoints.init().forgotPassword.makeRequest(payload);
    }
    resetPassword(payload) {
        return this.serviceEndpoints.init().resetPassword.makeRequest(payload);
    }
    changePassword(payload) {
        return this.serviceEndpoints.init().changePassword.makeRequest(payload);
    }
    adminDevices() {
        return this.serviceEndpoints.init().adminDevices.makeRequest();
    }
    patchAdminDevices(param, payload) {
        return this.serviceEndpoints.init().patchAdminDevices.makeRequest(payload, param);
    }
    deleteAdminDevices(id) {
        return this.serviceEndpoints.init().deleteAdminDevices.makeRequest(null, id);
    }
    adminBoards() {
        return this.serviceEndpoints.init().adminBoards.makeRequest();
    }
    patchAdminBoards(param, payload) {
        return this.serviceEndpoints.init().patchAdminBoards.makeRequest(payload, param);
    }
    deleteAdminBoards(id) {
        return this.serviceEndpoints.init().deleteAdminBoards.makeRequest(null, id);
    }
    users() {
        return this.serviceEndpoints.init().users.makeRequest();
    }
    patchUsers(param, payload) {
        return this.serviceEndpoints.init().patchUsers.makeRequest(payload, param);
    }
    deleteUsers(id) {
        return this.serviceEndpoints.init().deleteUsers.makeRequest(null, id);
    }
};
FetchData.ctorParameters = () => [
    { type: _service_endpoints__WEBPACK_IMPORTED_MODULE_2__["ServiceEndpoints"] }
];
FetchData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FetchData);



/***/ }),

/***/ "./src/app/shared/services/service-endpoints.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/service-endpoints.ts ***!
  \******************************************************/
/*! exports provided: ServiceEndpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEndpoints", function() { return ServiceEndpoints; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/rest-endpoints */ "./src/app/shared/constants/rest-endpoints.ts");




let ServiceEndpoints = class ServiceEndpoints {
    constructor(http) {
        this.http = http;
        this.endpoints = {};
        this.serviceEndpointsList = _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__["RestEndpointConstants"].RestEndpoints.endpoints;
    }
    defineEndpoint(name, url, method, requestHeader) {
        const httpRequest = this.http;
        let finalUrl;
        this.endpoints[name] = {
            name: name,
            url: url,
            method: method,
            makeRequest: function (payload, parameter, formData, requestHeader, transform) {
                if (parameter !== undefined && parameter !== null) {
                    finalUrl = url.replace('{parameter}', parameter);
                }
                else {
                    finalUrl = url;
                }
                payload = payload || {};
                let options = {};
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
    init(headers) {
        if (Object.keys(this.endpoints).length > 0) {
            return this.endpoints;
        }
        this.serviceEndpointsList = _shared_constants_rest_endpoints__WEBPACK_IMPORTED_MODULE_3__["RestEndpointConstants"].RestEndpoints.endpoints;
        for (let i = this.serviceEndpointsList.length - 1; i >= 0; i--) {
            this.defineEndpoint(this.serviceEndpointsList[i].name, this.serviceEndpointsList[i].url, this.serviceEndpointsList[i].method, headers);
        }
        return this.endpoints;
    }
};
ServiceEndpoints.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServiceEndpoints = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceEndpoints);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n.register-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto auto;\r\n}\r\n\r\n.register-head {\r\n  background-color: #222831;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 21px;\r\n    color: white;\r\n    padding: 15px;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.reginp {\r\n  width: 250px;\r\n  height: 40px;\r\n  border: none;\r\n  border: 1px solid #ff5722;\r\n  border-radius: 4px;\r\n  padding-left: 10px;\r\n  background: none;\r\n  margin:10px auto;\r\n}\r\n\r\n.regbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.register-btn {\r\n  background-color: #ff5722;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n.register-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.regbdy-up2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.lheadtext {\r\n  font-size: 24px;\r\n  margin-top: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #282c34;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.message{\r\n  color:green;\r\n  text-align:center;\r\n  font-weight: 14px;\r\n}\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n.l-back {\r\n  position: absolute;\r\n    right: 15px;\r\n    top: 18px;\r\n    -webkit-filter: invert(1);\r\n            filter: invert(1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUJBQXlCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwyQ0FBMkM7QUFDN0M7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLnJlZ2lzdGVyLXJvb3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJlZ2lucCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTcyMjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luOjEwcHggYXV0bztcclxufVxyXG5cclxuLnJlZ2JkeS11cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnYmR5LXVwMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzI4MmMzNDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5saGVhZHRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyODJjMzQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmwtYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/fetch-data */ "./src/app/shared/services/fetch-data.ts");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");




let SignUpComponent = class SignUpComponent {
    constructor(fetchData, layoutService) {
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.loading = false;
    }
    ngOnInit() {
        this.layoutService.title.next('Register');
        this.layoutService.header.next(true);
        this.layoutService.back.next(['/welcome']);
        this.layoutService.toolbar.next(null);
    }
    signup() {
        this.success = false;
        this.error = null;
        const payload = {
            username: this.email,
            email: this.email,
            password: this.password,
            emailVerified: true,
            name: this.name,
            contactNumber: this.contact
        };
        this.loading = true;
        this.fetchData.signup(payload).subscribe(res => {
            this.loading = false;
            console.log(res);
            this.username = null;
            this.email = null;
            this.password = null;
            this.terms = true;
            this.success = true;
        }, err => {
            this.loading = false;
            let e = null;
            if (err.error && err.error.error) {
                e = err.error.error;
            }
            if (e && e.details && e.details.messages && Object.keys(e.details.messages)) {
                let m = Object.keys(e.details.messages);
                if (m.length) {
                    return this.error = m + ' ' + e.details.messages[m[0]];
                }
            }
            console.log(err);
            return this.error = 'signup failed';
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_2__["FetchData"] },
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/sockets/connect.ts":
/*!************************************!*\
  !*** ./src/app/sockets/connect.ts ***!
  \************************************/
/*! exports provided: ConnectSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectSocket", function() { return ConnectSocket; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ConnectSocket = class ConnectSocket {
    constructor(socket) {
        this.socket = socket;
        this.rooms = {};
        this.onlineDevices = null;
        this.locations = null;
        this.roomsMap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.onlineDevices$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.onlineDevices);
        this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.locations);
        this.boards = [];
        this.boards$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.boards);
        this.usage = null;
        this.usage$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.usage);
        this.getSwitches();
        this.onDeviceDisconnect();
        this.initLocations();
        this.initUsage();
    }
    ngOnDestroy() {
        this.leaveAll(Object.keys(this.rooms));
    }
    initUsage() {
        this.socket.on('usage', res => {
            console.log(res);
            if (!res.error) {
                if (res.deviceId && res.switches && res.switches.length) {
                    this.usage = {};
                    res.switches.some(s => {
                        if (!this.usage[s.locationId]) {
                            this.usage[s.locationId] = {};
                        }
                        this.usage[s.locationId].name = s.locationName;
                        if (!this.usage[s.locationId].switches) {
                            this.usage[s.locationId].switches = [];
                        }
                        s.deviceId = res.deviceId;
                        this.usage[s.locationId].switches.push(s);
                    });
                    this.usage$.next(this.usage);
                }
            }
        });
    }
    initLocations() {
        this.socket.on('locations', res => {
            console.log(res);
            if (!res.error) {
                if (res.deviceId && res.switches && res.switches.length) {
                    this.locations = {};
                    res.switches.some(s => {
                        if (!this.locations[s.locationId]) {
                            this.locations[s.locationId] = {};
                            this.locations[s.locationId].deviceId = res.deviceId;
                            this.locations[s.locationId].locationId = s.locationId;
                        }
                        this.locations[s.locationId].name = s.locationName;
                        if (!this.locations[s.locationId].switches) {
                            this.locations[s.locationId].switches = [];
                        }
                        s.deviceId = res.deviceId;
                        this.locations[s.locationId].switches.push(s);
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
                    this.calculateActiveLocations();
                    this.locations$.next(this.locations);
                }
                else if (!res.switches || !res.switches.length) {
                    this.locations = {};
                    this.calculateActiveLocations();
                    this.locations$.next(this.locations);
                }
            }
        });
    }
    calculateActiveLocations() {
        if (this.locations) {
            const locations = Object.keys(this.locations);
            if (locations.length) {
                locations.some(l => {
                    this.locations[l].active = false;
                    if (this.locations[l].switches) {
                        this.locations[l].switches.some(s => {
                            if (this.onlineDevices && this.onlineDevices[s.deviceId]
                                && this.onlineDevices[s.deviceId][s.board]
                                && this.onlineDevices[s.deviceId][s.board].switches
                                && this.onlineDevices[s.deviceId][s.board].switches.length
                                && this.onlineDevices[s.deviceId][s.board].switches[s.switch]) {
                                this.locations[l].active = true;
                                return;
                            }
                        });
                    }
                });
            }
        }
    }
    getLocations() {
        let devices = [];
        if (this.onlineDevices) {
            devices = Object.keys(this.onlineDevices);
        }
        if (devices.length) {
            this.socket.emit('getLocations', devices);
        }
        else {
            this.locations = null;
            this.locations$.next(null);
        }
    }
    getUsage() {
        let devices = [];
        if (this.onlineDevices) {
            devices = Object.keys(this.onlineDevices);
        }
        if (devices.length) {
            this.socket.emit('getUsage', devices);
        }
        else {
            this.usage = null;
            this.usage$.next(null);
        }
    }
    onDeviceDisconnect() {
        this.socket.on('deviceDisconnected', id => {
            if (id) {
                if (this.onlineDevices && this.onlineDevices[id]) {
                    delete this.onlineDevices[id];
                    if (!Object.keys(this.onlineDevices).length) {
                        this.onlineDevices = null;
                    }
                    this.getLocations();
                    this.onlineDevices$.next(this.onlineDevices);
                }
            }
        });
    }
    join(msg, device) {
        if (!this.rooms[msg]) {
            this.joined(device);
            this.socket.emit('join', msg);
        }
    }
    joined(device) {
        return this.socket.fromEvent('joined').subscribe(m => {
            if (m != null && typeof (m) === 'string') {
                this.rooms[m] = device;
                this.roomsMap.next(this.rooms);
                this.socket.emit('getBoards', m);
            }
        });
    }
    leaveAll(ids) {
        if (ids && ids.length) {
            ids.map(id => {
                this.socket.emit('leave', id);
                return id;
            });
        }
    }
    getSwitches() {
        this.socket.on('boards', response => {
            if (this.rooms && response && response.deviceId && response.boards) {
                if (!this.onlineDevices) {
                    this.onlineDevices = {};
                }
                this.onlineDevices[response.deviceId] = response.boards;
                this.getLocations();
                this.onlineDevices$.next(this.onlineDevices);
                this.calculateBoards();
            }
        });
    }
    calculateBoards() {
        let boards = [];
        const dk = Object.keys(this.onlineDevices);
        dk.some(d => {
            const bk = Object.keys(this.onlineDevices[d]);
            bk.some(b => {
                boards.push(this.onlineDevices[d][b]);
            });
        });
        this.boards = boards;
        this.boards$.next(this.boards);
    }
    toggle(device, value, board, swtch) {
        const msg = { d: device, v: value, b: board, s: swtch };
        this.socket.emit('toggle', msg);
    }
    getSchedules() {
    }
};
ConnectSocket.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
ConnectSocket = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ConnectSocket);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected{\r\n  color:#ff5722;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZHtcclxuICBjb2xvcjojZmY1NzIyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");




let ToolbarComponent = class ToolbarComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.selected = null;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.layoutService.toolbar.subscribe(t => {
            this.selected = t;
        }));
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_3__["LayoutServiceService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/usage/usage.component.css":
/*!*******************************************!*\
  !*** ./src/app/usage/usage.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected{\r\n  border-bottom: 2px solid #ff5722;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNhZ2UvdXNhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQzs7QUFFbEMiLCJmaWxlIjoic3JjL2FwcC91c2FnZS91c2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVke1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmY1NzIyO1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/usage/usage.component.ts":
/*!******************************************!*\
  !*** ./src/app/usage/usage.component.ts ***!
  \******************************************/
/*! exports provided: UsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageComponent", function() { return UsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-service.service */ "./src/app/layout-service.service.ts");
/* harmony import */ var _sockets_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets/connect */ "./src/app/sockets/connect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UsageComponent = class UsageComponent {
    constructor(layoutService, connect) {
        this.layoutService = layoutService;
        this.connect = connect;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.location = null;
    }
    ngOnInit() {
        this.layoutService.toolbar.next("Usage");
        this.layoutService.title.next("Usage");
        this.layoutService.header.next(true);
        this.layoutService.back.next(false);
        this.connect.getUsage();
        this.subscription.add(this.connect.usage$.subscribe(res => {
            this.usage = res;
            if (res) {
                let keys = Object.keys(this.usage);
                if (keys && keys.length) {
                    this.location = keys[0];
                }
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
UsageComponent.ctorParameters = () => [
    { type: _layout_service_service__WEBPACK_IMPORTED_MODULE_2__["LayoutServiceService"] },
    { type: _sockets_connect__WEBPACK_IMPORTED_MODULE_3__["ConnectSocket"] }
];
UsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usage/usage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usage.component.css */ "./src/app/usage/usage.component.css")).default]
    })
], UsageComponent);



/***/ }),

/***/ "./src/app/verified/verified.component.css":
/*!*************************************************!*\
  !*** ./src/app/verified/verified.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\");\r\n\r\n\r\n.login-root {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% auto auto auto;\r\n}\r\n\r\n\r\n.login-head {\r\n  display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.logininp {\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  height: 2rem;\r\n  width: 18rem;\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  padding: 0.2rem;\r\n  padding-left: 1rem;\r\n  margin: 1rem auto;\r\n  border:none;\r\n}\r\n\r\n\r\n.loginbdy-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 1rem;\r\n  padding-top: 4rem;\r\n}\r\n\r\n\r\n.loginister-btn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.loginister-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n\r\n.loginimg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\n.fpasssi {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n\r\n.error{\r\n  color:red;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7OztBQUdwRjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLGFBQWE7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbi5sb2dpbi1yb290IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubG9naW5pbnAge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLmxvZ2luYmR5LXVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI2MDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW5pc3Rlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbmltZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZnBhc3NzaSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/verified/verified.component.ts":
/*!************************************************!*\
  !*** ./src/app/verified/verified.component.ts ***!
  \************************************************/
/*! exports provided: VerifiedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedComponent", function() { return VerifiedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerifiedComponent = class VerifiedComponent {
    constructor() { }
    ngOnInit() {
    }
};
VerifiedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verified',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verified.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verified.component.css */ "./src/app/verified/verified.component.css")).default]
    })
], VerifiedComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shashank\Desktop\iot-loopback-server\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);