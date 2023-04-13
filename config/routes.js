module.exports.routes = {
  'GET /parcels': 'ParcelController.find',
  'GET /parcels/:id': 'ParcelController.findOne',
  'POST /parcels': 'ParcelController.create',
  'PUT /parcels/:id': 'ParcelController.update',
  'DELETE /parcels/:id': 'ParcelController.destroy',

  'GET /users': 'UserController.find',
  'GET /users/:id': 'UserController.findOne',
  'POST /users': 'UserController.create',
  'PUT /users/:id': 'UserController.update',
  'DELETE /users/:id': 'UserController.destroy',

  'GET /vehicles': 'VehicleController.find',
  'GET /vehicles/:id': 'VehicleController.findOne',
  'POST /vehicles': 'VehicleController.create',
  'PUT /vehicles/:id': 'VehicleController.update',
  'DELETE /vehicles/:id': 'VehicleController.destroy',

  'POST /login': 'AuthController.login',
  'POST /logout': 'AuthController.logout',

  'post /signup': 'AuthController.signup',

};
