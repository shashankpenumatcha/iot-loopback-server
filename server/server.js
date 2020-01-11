// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
var log4js = require('log4js');
var log = log4js.getLogger();
log.level = 'debug';

const app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module){
  //  app.start();
  app.io = require('socket.io')(app.start());
  const Device  = app.models.Device;
  /*require('socketio-auth')(app.io, {
    authenticate: function (socket, value, callback) {

        var AccessToken = app.models.AccessToken;
        //get credentials sent by the client
        var token = AccessToken.find({
          where:{
            and: [{ userId: value.userId }, { id: value.id }]
          }
        }, function(err, tokenDetail){
          if (err) throw err;
          if(tokenDetail.length){
            callback(null, true);
          } else {
            callback(null, false);
          }
        });
      }
  });*/


    app.io.on('connection', function(socket){
      log.info('a user connected');
      socket.on('disconnect', function(){
        log.info('user disconnected');
      });

      socket.on('join',function(msg){
        log.info(`new join request for room ${msg}`);
        if(msg){
          Device.findOne({"where":{"deviceId":msg}, "include":["boards"]},(err,device)=>{
            if(device){
              socket.join(msg,function(){
                log.info(`joined room ${msg}`)
                app.io.to(socket.id).emit('joined',msg)
              });
            }else{
              log.error(`unable to find device ${msg}`);
              log.info(`failed to join room ${msg}`);
              app.io.to(msg).emit(null)
            }
          })
        }
      });

      socket.on('leave',function(id){
        socket.leave(id,function(){
        });
      });

      socket.on('getDeviceInfo',function(deviceId){
        log.info(`request to get device info from device ${deviceId}`);
        Device.findOne({"where":{"deviceId":deviceId},"include":["boards"]},(err,device)=>{
          console.log(device)
          if(device){
            app.io.to(socket.id).emit('deviceInfo',device);
            log.info(`device info sent to ${deviceId}`);
          }else{
            log.error(`device ${deviceId} not found`);
          }
        })
      });

      socket.on('getBoards',function(deviceId){
        log.info(`request to get boards by user for device ${deviceId}`);
        Device.findOne({"where":{"deviceId":deviceId},"include":["boards"]},(err,device)=>{
          if(device){
            app.io.to(deviceId).emit('boardDetails',{});
            log.info(`board details sent to user for ${deviceId}`);
          }else{
            log.error(`device ${deviceId} not found`);
          }
        })
      });

      socket.on('boards',function(msg){
        log.info(`sending boards for ${msg.deviceId}`)
        app.io.to(msg.deviceId).emit('boards',msg);
      });

      socket.on('toggle',function(msg){
        log.info(`toggle switch on ${msg.b} - device ${msg.d}`)
        app.io.to(msg.d).emit('toggle',msg)
      });

      socket.on('locationAdded',function(msg){
        log.info(`toggle added confirmation from device`)
        app.io.to(msg.deviceId).emit('locationAdded',msg)
      })

      socket.on('addLocation',function(msg, callback){
        log.info(`add location request`)
        if(!msg || !msg.name || !msg.devices || !Object.keys(msg.devices).length ){
          return callback({error: "no devices in request"})
        }
        let devices = Object.keys(msg.devices);

        let payload = null;
        devices.some(d => {
          let boards = Object.keys(msg.devices[d]);
          if(!boards.length){
            payload = {error: 'no borad with device in request'}
            return
          }
          boards.some(b => {
            let switches = Object.keys(msg.devices[d][b]);
            if(!switches.length){
              payload = {error: 'no switches with board in request'}
              return
            }

          });
        });
        if(payload && payload.error){
          callback(payload);
        }else{
          devices.map(m => {
            app.io.to(m).emit('addLocation', {name: msg.name, boards: msg.devices[m]})
            return m
          })
        }
      })


    });
  }
});
