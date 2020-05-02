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


    __webpack_exports__["default"] = "\n\n\n\n<div *ngIf=\"!step && (!devices|| !devices.length)\" class=\"step1-root\">\n  <p style=\"text-align: center;\n  text-align: center;\n  width: 700px;\n  max-width: 90vw;\n  margin: 0 auto;\n  /* opacity: 0.5; */\n  margin-top: 50px;\n  font-size: 21px;\n  color: #393e46;\n  margin-bottom: 35px;\n\">Enter the device ID to register your device. Your device ID can be found printed on the device.</p>\n  <input style=\"width: 300px;\n  max-width: 90vw;\n  margin: 0 auto;\n  display: block;\n  margin-top: 20px;text-align:center;    background: transparent;\n    width: 500px;\n    height: 40px;\n    border: none;\n    border: 1px solid #0693E3;\n    border-radius: 4px;\n    margin: 10px auto;\" type=\"text\" placeholder=\"Enter device ID\" [(ngModel)]=\"deviceId\">\n    <p style=\"color:#0693E3;padding:15px;text-align:center\">{{error}}</p>\n  <div *ngIf=\"tutorial\" style=\"margin-top:40px;\" class=\"step1-btn\"><button [disabled]=\"!deviceId || !deviceId.length\" (click)=\"register(deviceId)\" class=\"step1-btnn\">Next</button></div>\n  <div *ngIf=\"!tutorial\" style=\"margin-top:40px;\" class=\"step1-btn\"><button [disabled]=\"!deviceId || !deviceId.length\" (click)=\"register(deviceId)\" class=\"step1-btnn\">Done</button></div>\n\n  <!--\n  <p (click)=\"step=4;changeStep('Setup complete')\" style=\"text-align: center;\n  font-family: 'Roboto', sans-serif;\n  color: #0693E3;\n  margin-top: 25px;\n  text-decoration: underline;\n  cursor: pointer;\">Skip</p> -->\n</div>\n\n\n<div *ngIf=\"step==4\" class=\"step1-root\">\n  <div class=\"step1-text\">STEP 4</div>\n  <div class=\"step1-text\"><img height=\"100px\" src=\"content/images/check.png\" /></div>\n  <div class=\"step1-txt\">\n    Your hub should be setup now. Time to add boards\n  </div>\n  <div (click)=\"step=5;changeStep('Adding Boards')\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\n</div>\n\n\n\n<div *ngIf=\"step==5\" class=\"step1-root\">\n  <div class=\"step1-text\">STEP 5</div>\n  <div class=\"step1-text\"><img height=\"100px\" src=\"content/images/switch.png\" /></div>\n  <div class=\"step1-txt\">\n    Boards contain multiple switches that you can use to control appliances\n  </div>\n  <div (click)=\"step=6;changeStep('Adding Locations')\"  class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\n</div>\n\n\n<div *ngIf=\"step==6\" class=\"step1-root\">\n  <div class=\"step1-text\">STEP 6</div>\n  <div class=\"step1-text\"><img height=\"200px\" src=\"content/images/loc.jpeg\" /></div>\n  <div class=\"step1-txt\">\n    Boards can be added to various locations such as bedroom,toilet\n  </div>\n  <div [routerLink]=\"['/']\" class=\"step1-btn\"><button class=\"step1-btnn\">Next</button></div>\n</div>\n";
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
    }, {
      path: 'tutorial/:tutorial',
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


    __webpack_exports__["default"] = "/* button {\r\n  margin: 0 auto;\r\n        display: block;\r\n        margin-top: 40px;\r\n        padding: 10px 35px;\r\n        background: #3d5af1;\r\n        border: 1px solid #3d5af1;\r\n        border-radius: 200px;\r\n        color: #fff;\r\n}\r\n\r\n */\r\n\r\n\r\n .step1-head {\r\n  background-color: #222831;\r\n    display: flex;\r\n    justify-content: center;\r\n    /* font-weight: bold; */\r\n    font-size: 21px;\r\n    color: white;\r\n    padding: 15px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    /* align-items: center; */\r\n\r\n}\r\n\r\n\r\n .step1-text {\r\n  padding: 28px;\r\n  font-size: 24px;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n\r\n .step1-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 43px 81px;\r\n  font-size: 21px;\r\n}\r\n\r\n\r\n .step1-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n .step1-btnn {\r\n  background-color: #0693E3;\r\n  width: 250px;\r\n  height: 45px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: #f2f2f2;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border: #f2f2f2;\r\n}\r\n\r\n\r\n .step2-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n\r\n .step2-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n .step2-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n .step2-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n .step2-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n .step4-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n\r\n .step4-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n .step4-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n .step4-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n .step4-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n .step5-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n\r\n .step5-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n .step5-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n .step5-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n .step5-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n .step6-head {\r\n  background-color: #282c34;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n  align-items: center;\r\n}\r\n\r\n\r\n .step6-text {\r\n  padding-top: 3rem;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n\r\n .step6-txt {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n .step6-btnn {\r\n  background-color: #01b600;\r\n  width: 200px;\r\n  height: 40px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n .step6-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFOzs7Q0FHRDtFQUNDLHlCQUF5QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMseUJBQXlCOztBQUU3Qjs7O0NBSUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7O0NBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0NBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOzs7Q0FFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7O0NBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7O0NBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOzs7Q0FFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7OztDQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0NBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOzs7Q0FJQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOzs7Q0FFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7OztDQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7O0NBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7Q0FFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7OztDQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7OztDQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3Qzs7O0NBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COzs7Q0FFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7OztDQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0NBSUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7O0NBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOzs7Q0FFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7OztDQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0NBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2Q1YWYxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZDVhZjE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAqL1xyXG5cclxuXHJcbiAuc3RlcDEtaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnN0ZXAxLXRleHQge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnN0ZXAxLXR4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDNweCA4MXB4O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnN0ZXAxLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAxLWJ0bm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjkzRTM7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAjZjJmMmYyO1xyXG59XHJcbi5zdGVwMi1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwMi10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zdGVwMi10eHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zdGVwMi1idG5uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiNjAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0ZXAyLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uc3RlcDQtaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcDQtdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3RlcDQtdHh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc3RlcDQtYnRubiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdGVwNC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc3RlcDUtaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcDUtdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3RlcDUtdHh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc3RlcDUtYnRubiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjYwMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdGVwNS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLnN0ZXA2LWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXA2LXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN0ZXA2LXR4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnN0ZXA2LWJ0bm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI2MDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RlcDYtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
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
    /* harmony import */


    var _layout_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../layout-service.service */
    "./src/app/layout-service.service.ts");

    var DeviceComponent =
    /*#__PURE__*/
    function () {
      function DeviceComponent(route, router, dataService, fetchData, layoutService) {
        _classCallCheck(this, DeviceComponent);

        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fetchData = fetchData;
        this.layoutService = layoutService;
        this.step = null;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(DeviceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this.tutorial = params['tutorial']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
          });
          this.layoutService.header.next(true);
          this.layoutService.back.next(null);
          this.layoutService.title.next('Register your Device');
          this.subscriptions.add(this.dataService.devices$.subscribe(function (devices) {
            _this.devices = devices;
          }));
        }
      }, {
        key: "changeStep",
        value: function changeStep(title) {
          this.layoutService.title.next(title);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.sub.unsubscribe();
        }
      }, {
        key: "register",
        value: function register(deviceId) {
          var _this2 = this;

          this.error = null;

          if (deviceId) {
            this.fetchData.registerDevice(deviceId).subscribe(function (res) {
              if (res && res.devices && res.devices.length) {
                _this2.dataService.setDevices(res.devices);
              }

              if (_this2.tutorial) {
                _this2.step = 4;

                _this2.changeStep('Setup complete');
              } else {
                _this2.router.navigate(['/']);
              }
            }, function (e) {
              if (e && e.error && e.error.error && e.error.error.message) {
                _this2.error = e.error.error.message;
              }
            });
          }
        }
      }]);

      return DeviceComponent;
    }();

    DeviceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _shared_services_fetch_data__WEBPACK_IMPORTED_MODULE_5__["FetchData"]
      }, {
        type: _layout_service_service__WEBPACK_IMPORTED_MODULE_6__["LayoutServiceService"]
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