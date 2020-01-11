module.exports = function(Model, options) {
  'use strict';

  Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model

    if (!ctx.isNewInstance) {
      ctx.data.updated = new Date();
    } else {
      ctx.instance.created = new Date();
      ctx.instance.updated = new Date();
      ctx.instance.createdBy = (ctx.options.accessToken&&ctx.options.accessToken.userId)?ctx.options.accessToken.userId:null;
    }
    next();
  });
}


