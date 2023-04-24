module.exports = function applyJwtAuth(sails) {
  return {
    initialize: function (done) {
      sails.on("router:route", function (route) {
        if (route.req.url !== "/login" && route.req.url !== "/signup") {
          if (!route.config) {
            route.config = {};
          }
          route.config.beforeMiddleware = ["http.middlewares.jwtAuth"];
        }
      });
      return done();
    },
  };
};