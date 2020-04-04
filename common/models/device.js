'use strict';
var http = require("http");
var loopback = require("loopback");
var path = require('path');

module.exports = function(Device) {

  Device.validatesUniquenessOf('deviceId', {message: 'deviceId is not unique'});

  Device.sendMail = function(payload) {

    // create a custom object your want to pass to the email template. You can create as many key-value pairs as you want
    var myMessage = {heading:"Welcome to MyCompany", text:"We are happy to have you on board."};

    // prepare a loopback template renderer
    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/email-template.ejs'));
    console.log({payload:payload,load:'load'})
    let html_body = renderer({payload:payload,load:'ayyya'});

    // send email using Email model of Loopback
    Device.app.models.Email.send({
      to: "thenewurbankid@gmail.com",
      from: 'shashankpenumatcha@gmail.com',
      subject: 'Your custom email subject here',
      html: html_body
      }, function(err, mail) {
      console.log('email sent!');
      if(err) {
       err;
      }
    });
  }


  function register(){
    Device.register =  function(id,options, cb) {
      var error = null;
      if(!id){
        error = new Error('id is required');
        error.status=400;
        return cb(error);
      }
      Device.findOne({
        "where":{"deviceId":id}
      },function(err,device){
        if(!device){
          error = new Error('device not found');
          error.status=404;
          return cb(error);
        }
        if(device.userId){
          error = new Error('device already registered');
          error.status=422;
          return cb(error);
        }
        const token = options && options.accessToken;
        const userId = token.userId;
        device.updateAttribute("userId",token.userId,function(err,device){
          if(err){
            error = new Error('error while registring device');
            error.status=500;
            return cb(error);
          }
          console.log(device);
          cb(null, device);

        });
      });
    }

    Device.remoteMethod('register', {
        accepts: [
            {"arg": 'id', type: 'string'},
            {"arg": "options", "type": "object", "http": "optionsFromRequest"}
        ],
          returns: {arg: 'greeting', type: 'Device'},
          http: {path: '/register', verb: 'patch'}

    });
  }

  function getRegisteredDevice(){
    Device.registered =  function(options, cb) {
      var error = null;
      console.log(options)
      const token = options && options.accessToken;
      const userId = token.userId;
      Device.find({
        "where":{"userId":userId}
      },function(err,device){
        if(!device){
          error=new Error("device not found");
          error.status=404;
          return cb(error);
        }
        cb(null,device);
      });
    }

    Device.remoteMethod('registered', {
        accepts: {"arg": "options", "type": "object", "http": "optionsFromRequest"},
        returns: {arg: 'devices', type: 'Device'},
        http: {path: '/registered', verb: 'get'}

    });
  }

  getRegisteredDevice();
  register();

};
