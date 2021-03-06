'use strict';

module.exports = function(Board) {
  var app;
  var Device;
  var error = null;
  var AccessToken;

  Board.on('attached', function(a) {
    app = a;
    Device = app.models.Device;
    AccessToken = app.models.AccessToken;
    register();
    add();
  });

  function sendError(error,status,cb){
    error = new Error(error);
    error.status=status
    return cb(error)
  }

  function register(){
    Board.register =  function(deviceId,boardId, cb) {

          Device.findOne({
            "where":{"deviceId":deviceId}
          },function(err,device){
            if(!device){
              return sendError("device not found",404,cb);
            }
            if (err) {
              return sendError('error while fetching device',500,cb)
            }
            if(!device.userId || !device.userId.toString()){
              sendError("device is not registered to any account", 500, cb);
            }
            console.log(11111111111111)
            console.log(boardId)
            Board.findOne({"where":{"id":boardId}},function(err,board){
              if(err){
                console.log("get board error "  + err)
              }
              console.log(11111111111111)
              console.log(board)
              if(!board){
               return sendError("board not found", 404, cb);
              }
              if(board.deviceId&&board.deviceId.toString()!=deviceId.toString()){
                sendError("board registered to another device", 500, cb);
              }
              if(!board.deviceId_fk){
                board.deviceId_fk = device.id;
                board.deviceId = deviceId;
                Board.updateAll({id:board.id},board,function(err,brd){

                    return cb(null,board);

                });
              }else{

                if(device.id.toString() != board.deviceId_fk.toString()){
                  return sendError("board already registered to another device",500,cb);
                }
                return cb(null, board)
              }
            })


          });




    }

    Board.remoteMethod('register', {
        accepts: [
          {"arg": 'deviceId', type: 'string', required:true},
          {"arg": 'boardId', type: 'string', required:true},
          {"arg": 'token', type: 'string', required:true}

        ],
        returns: {arg: 'board', type: 'Board'},
        http: {path: '/register', verb: 'post'}
    });
  }


  function add(){
    Board.add =  function(cb) {
      let board = new Board();
      Board.create(board,function(err,board){
        if(err){
          return sendError("something went wrong while saving board",500,cb);
        }
        return cb(null,board)
      });
    }

    Board.remoteMethod('add', {
        accepts: {},
        returns: {arg: 'board', type: 'Board'},
        http: {path: '/add', verb: 'post'}
    });
  }


};
