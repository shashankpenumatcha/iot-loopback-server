'use strict';

module.exports = function(Board) {
  var app;
  var Device;
  var error = null;

  Board.on('attached', function(a) {
    app = a;
    Device = app.models.Device;
    register();
  });

  function sendError(error,status,cb){
    error = new Error(error);
    error.status=status
    return cb(error)
  }

  function register(){
    Board.register =  function(deviceId, cb) {

        Device.findOne({
          "where":{"deviceId":deviceId}
        },function(err,device){
          if(!device){
            return sendError("device not found",404,cb);
          }
          if (err) {
            return sendError('error while fetching device',500,cb)
          }
          let board = new Board();
          board.deviceId_fk=device.id;
          Board.create(board,function(err,board){
            if(err){
              return sendError("something went wrong while saving board",500,cb);
            }
            var deviceBoards = [];
            if(device.boards&&device.boards.length){
              deviceBoards=device.boards;
            }
            var boardFound = false;

            console.log(deviceBoards)
            console.log(device)
            deviceBoards.map(function(m){
              if(m.boardId==board.id){
                boardFound=true;
                m = board;
              }
              return m
            });
            if(!boardFound){
              deviceBoards.push(board);
            }
            device.boards = deviceBoards;
            Device.updateAll({"id":device.id},device,function(err,updatedDevice){
              return cb(null,board);
            })
          })
        });

    }

    Board.remoteMethod('register', {
        accepts: {"arg": 'deviceId', type: 'string', required:true},
        returns: {arg: 'board', type: 'Board'},
        http: {path: '/register', verb: 'post'}
    });
  }

};
