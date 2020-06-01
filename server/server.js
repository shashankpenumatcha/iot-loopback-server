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

      socket.on('getSchedules', function(deviceId){
        console.log("get schedules for "+ deviceId);
        app.io.to(deviceId).emit('getSchedules',{socketId:socket.id, deviceId:deviceId});
      });

      socket.on('schedules',function(msg){
        app.io.to(msg.socketId).emit('schedules',msg);
      })

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

      socket.on('getDeviceInfo2',function(deviceId){
        log.info(`request to get device info from device ${deviceId}`);
        Device.findOne({"where":{"deviceId":deviceId},"include":["boards"]},(err,device)=>{
          console.log(device)
          if(device){

            Board.find({"where" : {"deviceId":deviceId}},(err,boards)=>{
              if(boards){
                device=device.toJSON();
                device.boards=boards;
              }
              app.io.to(socket.id).emit('deviceInfo2',device);

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

      socket.on('deletedSwitch',function(msg){
        log.info(` deletedSwitch confirmation from device`)
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('deletedSwitch',msg.switch)

        }
      })
      socket.on('deleteSwitch',function(msg, callback){
        log.info(`deleteSwitch request`)
        if(!msg || !msg.switch || !msg.switch.deviceId ){
          return callback({error: "bad request deleteSwitch"})
        }
        app.io.to(msg.switch.deviceId).emit('deleteSwitch', {switch:msg.switch,socket:socket.id});


      });

      socket.on('deletedLocation',function(msg){
        log.info(` deletedLocation confirmation from device`)
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('deletedLocation',msg)

        }
      })
      socket.on('deleteLocation',function(msg, callback){
        log.info(`deleteLocation request`)
        if(!msg || !msg.location || !msg.location.deviceId ){
          return callback({error: "bad request"})
        }
        app.io.to(msg.location.deviceId).emit('deleteLocation', {locationId:msg.locationId,socket:socket.id});


      });
      socket.on('editedSwitch',function(msg){
        log.info(` editedSwitch confirmation from device`)
        console.log(msg)
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('editedSwitch',msg.switch)

        }
      })
      socket.on('editSwitch',function(msg, callback){
        log.info(`edit switch  name request`)
        if(!msg || !msg.switch || !msg.switch.deviceId ){
          return callback({error: "bad request"})
        }
        app.io.to(msg.switch.deviceId).emit('editSwitch', {switch:msg.switch,socket:socket.id});
      });

      socket.on('editedSwitchLogo',function(msg){
        log.info(` editedSwitchLogo confirmation from device`)
        console.log(msg)
        if(msg.error){
          let socket = msg.socket;
          delete msg.socket;
          return app.io.to(socket).emit('editedSwitchLogo',msg)

        }
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('editedSwitchLogo',msg.switch)

        }
      })
      socket.on('editSwitchLogo',function(msg, callback){
        log.info(`editSwitchLogo request`)
        if(!msg || !msg.switch || !msg.switch.deviceId ){
          return callback({error: "bad request"})
        }
        app.io.to(msg.switch.deviceId).emit('editSwitchLogo', {switch:msg.switch,socket:socket.id});
      });



      socket.on('editedLocationName',function(msg){
        log.info(` editedLocationName confirmation from device`)
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('editedLocationName',msg)

        }
      })
      socket.on('editLocationName',function(msg, callback){
        log.info(`edit location  name request`)
        if(!msg || !msg.location || !msg.location.deviceId ){
          return callback({error: "bad request"})
        }
        app.io.to(msg.location.deviceId).emit('editLocationName', {location:msg.location,socket:socket.id});


      });

      socket.on('editedLocationLogo',function(msg){
        log.info(` editedLocationLogo confirmation from device`)
        if(msg.error){
          let socket = msg.socket;
          delete msg.socket;
         return app.io.to(socket).emit('editedSwitchLogo',msg)

        }
        if(msg.socket){

            let socket = msg.socket;
            delete msg.socket;
            app.io.to(socket).emit('editedLocationLogo',msg)

        }
      })

      socket.on('editLocationLogo',function(msg, callback){
        log.info(`edit location  Logo request`)
        if(!msg || !msg.location || !msg.location.deviceId ){
          return callback({error: "bad request"})
        }
        app.io.to(msg.location.deviceId).emit('editLocationLogo', {location:msg.location,socket:socket.id});


      });

      socket.on('switchesAdded',function(msg){
        log.info(` switched added confirmation from device`)
        if(msg.socketId){
          if(!msg.error){
            let socket = msg.socketId;
            delete msg.socketId;
            app.io.to(socket).emit('switchesAdded',msg)
          } else if (msg.devices){

            app.io.to(socket).emit('switchesAdded',{error : 'error while creating switches'})

          }
        }
      })
      socket.on('addSwitches',function(msg, callback){
        log.info(`add switches request`)
        if(!msg || !msg.name || !msg.devices || !Object.keys(msg.devices).length || !msg.location ){
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
          const locationId = msg.location.locationId;
          devices.map(m => {
            app.io.to(m).emit('addSwitches', {devices:devices,locationId:locationId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
            return m
          })
        }
      });
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
          console.log(msg)
          devices.map(m => {
            app.io.to(m).emit('addLocation', {locationLogo:msg.locationLogo,devices:devices,locationId:locationId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
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

      socket.on('getUsage', devices => {
        console.log('get usage')
        if(devices && devices.length){
          devices.some(s=>{
            app.io.to(s).emit('getUsage',{socketId:socket.id});
          })
        } else {
          app.io.to(socket.id).emit('usage' , {error:'devices length is invalid'});
        }
      });

      socket.on('usage', response => {
        if(response.socketId) {
          console.log('sending usage')
          console.log(response)
            app.io.to(response.socketId).emit('usage', response);
        }
      })


      socket.on('sendMail', response => {
        console.log("send-mail-start")
        console.log(response)
        let payload ={};
        if(response&&response.switches&&response.switches.length){
          Device.findOne({"include":"user","where":{"deviceId":response.device}},function(err,device){

            if(!err){
               response.switches.map(s=>{
                if(!payload[s.locationId]){
                  payload[s.locationId]=[];
                }
                payload[s.locationId].push(s)
                return s;
              })
              let array=[];
              Object.values(payload).map(m=>{
                array.push(m)
                return m
              })
              if(response.days){
                let days = response.days.map(d=>d.split('T')[0])
              Device.sendMail(array,device.toJSON().user.email,days,response.week)
              }else{
                console.log("send mail fail, no days")
              }
            }
          })

        }
        console.log("send-mail-end")

      })


      socket.on('addBoard',function(msg, callback){
        log.info(`add board request`)
        if(!msg || !msg.boardId || !msg.deviceId ){
          return callback({error: "no board or device in request"})
        }

        Board.findOne({"where":{"_id":msg.boardId}},function(err,board){
            if(err){
              return callback({error: "error while fetching board"})
            }
            if(board && board.deviceId && board.deviceId!=msg.deviceId){
                return callback({error: "Board already registered to another device"});
            }
            let payload = null;

            Board.register(msg.deviceId,msg.boardId,function(err,board){
              if(err){
                callback({"error":err.message});
                log.debug("error while registering board")
              }else{
                log.debug("board registered in db")
                callback("success");
                /* Device.findOne({"where":{"deviceId":msg.deviceId},"include":["boards"]},(err,device)=>{
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
                }) */
              }
            })
        })
      });
      socket.on('scan',function(device){
        console.log('request to scan for networks')
        app.io.to(device).emit('scan',socket.id)
      })

      socket.on('networks',function(msg){
        console.log("got networks")
        console.log(msg)
        app.io.to(msg.socketId).emit('networks',msg)
      })
      socket.on('update_wifi',function(msg){
        log.info('socket message to update wifi')
        console.log('message')
        console.log(msg)
        if(!msg||!msg.device||!msg.name||!msg.password){

          return
        }
        msg.socketId = socket.id;
        app.io.to(msg.device).emit('update_wifi',msg)

      })


      socket.on('board_added',function(msg){
        console.log('rtjjjjjjjjjjjjjjjjjjjjjjjjj')

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
      socket.on('scheduleAdded',function(msg){
        log.info(` schedule added confirmation from device`)
        if(msg.socketId){
          if(!msg.error){
            let socket = msg.socketId;
            delete msg.socketId;
            app.io.to(socket).emit('scheduleAdded',msg)
          } else if (msg.devices){
            msg.devices.some(s => {
              app.io.to(s).emit('deleteSchedule', msg.scheduleId);
            })
            app.io.to(socket).emit('scheduleAdded',{error : 'error while creating schedule'})

          }
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
          const scheduleId = uuid();
          devices.map(m => {
            console.log(`add schedule request sent to device ${m}`)
            app.io.to(m).emit('addSchedule', {schedule:msg.schedule,devices:devices,scheduleId:scheduleId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
            return m
          })
        }
      });
      socket.on('scheduleEdited',function(msg){
        log.info(` schedule edited confirmation from device`)
        if(msg.socketId){
          if(!msg.error){
            let socket = msg.socketId;
            delete msg.socketId;
            app.io.to(socket).emit('scheduleEdited',msg)
          } else if (msg.devices){
            msg.devices.some(s => {
              app.io.to(s).emit('deleteSchedule', msg.scheduleId);
            })
            app.io.to(socket).emit('scheduleEdited',{error : 'error while editing schedule, please create a new schedule'})

          }
        }
      })
      socket.on('editSchedule',function(msg, callback){
        log.info(`edit schedule request`)
        if(!msg ||!msg.name || !msg.devices || !Object.keys(msg.devices).length ){
          return callback({error: "no devices in request"})
        }
        if(!msg.schedule){
          return callback({error: "no schedule in request"})

        }
        if(!msg.id){
          return callback({error: "no schedule id in request"})

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
          const scheduleId = uuid();
          devices.map(m => {
            console.log(`add schedule request sent to device ${m}`)
            app.io.to(m).emit('editSchedule', {id:msg.id,schedule:msg.schedule,devices:devices,scheduleId:scheduleId, name: msg.name, boards: msg.devices[m], socketId: socket.id})
            return m
          })
        }
      });

      socket.on('toggleSchedule', payload => {
        console.log('request to toggle schedule')
        console.log(payload)
        payload.socketId=socket.id;
        app.io.to(payload.deviceId).emit('toggleSchedule', payload);
      })

      socket.on('scheduleToggled', msg => {
        app.io.to(msg.socketId).emit('scheduleToggled', msg);
      });



      socket.on('deleteSchedule', payload => {
        console.log('request to delete schedule')
        console.log(payload)
        payload.socketId=socket.id;
        app.io.to(payload.deviceId).emit('deleteSchedule', payload);
      })

      socket.on('scheduleDeleted', msg => {
        app.io.to(msg.socketId).emit('scheduleDeleted', msg);
      });


    });
  }
});
