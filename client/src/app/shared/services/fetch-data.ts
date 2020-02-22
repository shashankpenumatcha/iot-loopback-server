import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ServiceEndpoints } from './service-endpoints';

@Injectable({
    providedIn: 'root'
})
export class FetchData {
    constructor(private serviceEndpoints: ServiceEndpoints) {}
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
}
