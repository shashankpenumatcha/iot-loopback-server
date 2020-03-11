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
}
