const locationIconsPath = './client/content/icons/location';
const switchIconsPath = './client/content/icons/switch';

const fs = require('fs');

module.exports = function(app) {
  var router = app.loopback.Router();
  const User = app.models.Customer;
  const Device = app.models.Device;
  const AccessToken = app.models.AccessToken;
  const RoleMapping = app.models.RoleMapping;

  router.get('/api/icons/location', function(req,res){
    fs.readdir(locationIconsPath, (err, files) => {
      res.status(200).send(files)
    });
  })

  router.get('/api/icons/switch', function(req,res){
    fs.readdir(switchIconsPath, (err, files) => {
      res.status(200).send(files)
    });
  })

  router.get('/api/account', function(req, res) {
    if(req.headers.authorization){

      AccessToken.findOne({'where':{'id':req.headers.authorization}},(err,accessToken)=>{
        if(accessToken){
          User.findOne({'where':{'id':accessToken.userId}},(e,user)=>{
          /*   RoleMapping.find({'where':{'principalId':user.id}},(e,roles)=>{
              console.log(roles)
                user.roles=roles.map(m=>m.name);
                user.roles.push('authenticated')
                res.send(user);

            }) */
            if(!user){
              return res.status(401).send({'error':'no user'})

            }
            RoleMapping.find({where: {principalType: 'USER', principalId: user.id}, "include":"role"},function(err,roles){
              let filteredRoles = roles.filter(f=>f.role&&f.role.name).map(m=>m.toJSON().role.name)
              user.roles=filteredRoles;
              user.roles.push('authenticated')
              res.send(user)
            });


          });
        }
      });
    }else{
      res.status(401).send({'error':'no access token'})
    }
  });

  router.get('/api/mail', function(req, res) {
      const Device = app.models.Device;
      Device.sendMail((r)=>{
        res.send(r);
      });
  });


  router.get('/api/mail', function(req, res) {
      const Device = app.models.Device;
      Device.sendMail((r)=>{
        res.send(r);
      });
  });

  router.get('/api/users/devices', function(req, res) {
    let devices =null;
    let deviceMap ={};
      Device.find({},function(err,deviceindb){
        devices = deviceindb;
        if(devices.length){
          devices.map(m=>{
            if(m.userId){
              deviceMap[m.userId] = m.deviceId;
            }
            return m
          })
        }
        User.find({},function(err,users){
          if(err){
            return res.status(500).send({"error":err})
          }
          users = users.map(m=>{
            if(deviceMap[m.id]){
              m.deviceId = deviceMap[m.id];
            }
            return m
          })
          res.status(200).send(users);
        })
        console.log(devices);

      })
 });

  app.use(router);
}
