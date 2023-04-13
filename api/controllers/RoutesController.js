module.exports = {
    getRoutes: function(req, res) {
      var routes = sails.config.routes;
      return res.json(routes);
    }
  };