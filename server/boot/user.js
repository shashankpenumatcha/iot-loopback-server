'use strict';

module.exports = function(app) {
  let debug = console.log;
  const User = app.models.Customer;
  const Role = app.models.Role;
  const RoleMapping = app.models.RoleMapping;
  User.findOne({"where": {"username":'admin'}},function(e , user) {
    if(e) {
      console.log(e);
    }else {
      console.log(user)
        if(!user){
          User.create([

            {username: 'admin', email: 'admin@localhost.com', password: 'admin'},
            {username: 'user', email: 'user@localhost.com', password: 'user'}


        ], function(err, users) {
            if (err) return debug('%j', err);
            //...
            // Create projects, assign project owners and project team members
            //...
            // Create the admin role

            Role.findOne({"where":{"name":'admin'}},function(e, role) {
              if(e){
                console.log(e)
              }else if(role) {
                role.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: users[0].id
                }, function(err, principal) {
                  if (err) return debug(err);
                  debug(principal);
                });
              }else {
                Role.create({
                  name: 'admin'
                }, function(err, role) {
                  if (err) return debug(err);
                  debug(role);
                  role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: users[0].id
                  }, function(err, principal) {
                    if (err) return debug(err);
                    debug(principal);
                  });

                });
              }
            });

          });
        }
    }
  });


};

