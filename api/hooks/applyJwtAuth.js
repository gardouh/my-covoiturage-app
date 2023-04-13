module.exports = function applyJwtAuth(sails) {
    return {
      initialize: function (done) {
        sails.on('router:route', function (route) {
          if (route.path === '/login') {
            route.config.beforeMiddleware = ['http.middlewares.jwtAuth'];
          }
        });
        return done();
      },
    };
  };