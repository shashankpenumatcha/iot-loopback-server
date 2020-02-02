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
var uuid = require('uuid-random');


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
  const Board  = app.models.Board;

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
        if(socket.handshake.query.device){
          socket.leave(socket.handshake.query.device,function(){
            console.log('socket left room')
            app.io.to(socket.handshake.query.device).emit('deviceDisconnected',socket.handshake.query.device);

          });

        }
      });

      socket.on('join',function(msg){
        log.info(`new join request for room ${msg}`);
        if(msg){
          Device.findOne({"where":{"deviceId":msg}, "include":["boards"]},(err,device)=>{
            if(device){
              socket.join(msg,function(){
                log.info(`joined room ${msg}`)
                app.io.to(socket.id).emit('joined',msg)
                console.log(socket.handshake.query)

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

            Board.find({"where" : {"deviceId":deviceId}},(err,boards)=>{
              if(boards){
                device=device.toJSON();
                device.boards=boards;
              }
              app.io.to(socket.id).emit('deviceInfo',device);

              log.info(`device info sent to ${deviceId}`);

            })


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
        console.log(msg)
        app.io.to(msg.d).emit('toggle',msg)
      });

      socket.on('locationAdded',function(msg){
        log.info(` added confirmation from device`)
        if(msg.socketId){
          if(!msg.error){
            let socket = msg.socketId;
            delete msg.socketId;
            app.io.to(socket).emit('locationAdded',msg)
          } else if (msg.devices){
            msg.devices.some(s => {
              app.io.to(s).emit('deleteLocation', msg.locationId);
            })
            app.io.to(socket).emit('locationAdded',{error : 'error while creating location'})

          }
        }
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
          const locationId = uuid();
          devices.map(m => {
            app.io.to(m).emit('addLocation', {devices:devices,locationId:locationId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
            return m
          })
        }
      });

      socket.on('getAssignedSwitches',function(id){
        log.debug(`get assigned switched request`);
        app.io.to(id).emit('getAssignedSwitches', socket.id);
      })

      socket.on('assignedSwitches', function(msg) {
        log.debug(`got assigned switches`)
        if(msg.deviceId){
          if(msg.error){
            log.error(msg.error);
          }
          let socketId = msg.socketId;
          delete msg.socketId
          app.io.to(socketId).emit('assignedSwitches', msg);
        }
      })

      socket.on('getLocations', devices => {
        console.log(devices)
        if(devices && devices.length){
          devices.some(s=>{
            app.io.to(s).emit('getLocations',{socketId:socket.id});
          })
        } else {
          app.io.to(socket.id).emit('locations' , {error:'devices length is invalid'});
        }
      });

      socket.on('locations', response => {
        if(response.socketId) {
            app.io.to(response.socketId).emit('locations', response);
        }
      })


      socket.on('addBoard',function(msg, callback){
        log.info(`add board request`)
        if(!msg || !msg.boardId || !msg.deviceId||!msg.token ){
          return callback({error: "no token or board or device in request"})
        }
        let payload = null;
        Board.register(msg.deviceId,msg.boardId,msg.token,function(err,board){
          if(err){
            callback({"error":err});
            console.log(err)
            log.debug("error while registering board")
          }else{
            log.debug("board registered in db sending to device")
            Device.findOne({"where":{"deviceId":msg.deviceId},"include":["boards"]},(err,device)=>{
              if(device){
                device = device.toJSON();
                Board.findOne({"where":{"id":msg.boardId}},function(err,board){
                    if(board){
                      if(!device.boards){
                        device.boards = [];
                      }
                      device.boards.push(board);
                      app.io.to(msg.deviceId).emit('addBoard', {deviceInfo:device,deviceId:msg.deviceId, boardId: msg.boardId, socketId: socket.id})
                      log.info(`device info with board sent to ${msg.deviceId}`);
                    }
                })
              }else{
                log.error(`device ${msg.deviceId} not found`);
              }
            })
          }
        })
      });


      socket.on('board_added',function(msg){
        log.info(` added board confirmation from device`)
        console.log('message')
        console.log(msg)
        if(msg.socketId){
            let socket = msg.socketId;
            delete msg.socketId;
            console.log('socket',socket);
            app.io.to(socket).emit('board_added',msg)

        }
      })

      socket.on('addSchedule',function(msg, callback){
        log.info(`add schedule request`)
        if(!msg || !msg.name || !msg.devices || !Object.keys(msg.devices).length ){
          return callback({error: "no devices in request"})
        }
        if(!msg.schedule){
          return callback({error: "no schedule in request"})

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
          const locationId = uuid();
          devices.map(m => {
            app.io.to(m).emit('addSchedule', {schedule:msg.schedule,devices:devices,locationId:locationId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
            return m
          })
        }
      });


    });
  }
});
