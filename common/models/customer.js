// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var config = require('../../server/config.json');
var path = require('path');

//Replace this address with your actual address
var senderAddress = 'shashankpenumatcha@gmail.com';

module.exports = function(Customer) {
  //send verification email after registration

  Customer.afterRemote('create', function(context, userInstance, next) {
    console.log('> user.afterRemote triggered');

    var verifyOptions = {
      type: 'email',
      to: userInstance.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/#/verified',
      user: userInstance
    };

    userInstance.verify(verifyOptions, function(err, response, next) {
      if (err) {
        console.log(err)
       return context.res.status(500).send({"message":`Verification email has not been sent to ${userInstance.email}`})
      }

      console.log('> verification email sent:', response);

      context.res.status(201).send({"message":`Verification email has been sent to ${userInstance.email}`})
    });
  });


  //send password reset link when requested
  Customer.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/#/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    Customer.app.models.Email.send({
      to: info.email,
      from: senderAddress,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
      context.res.status(204).send({"message":"Reset password link has been sent to your email"})
    });
  });

  //render UI page after password change
  Customer.afterRemote('changePassword', function(context, user, next) {
      context.res.status(200).send({"message":"Password changed successfully"})

  });

  //render UI page after password reset
  Customer.afterRemote('setPassword', function(context, user, next) {
    context.res.status(200).send({"message":"Password reset successfully"})

  });
};
