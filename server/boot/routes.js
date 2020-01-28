module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/api/account', function(req, res) {
    if(req.headers.authorization){
      const User = app.models.Customer;
      const AccessToken = app.models.AccessToken;
      const RoleMapping = app.models.RoleMapping;
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

  app.use(router);
}
