const jwtAuth = require('../api/middleware/jwtAuth');
module.exports.policies = {
  UserController: {
    find: jwtAuth,
    create: true, // Autoriser l'accès sans token pour la création d'un utilisateur
    update: jwtAuth,
    delete: jwtAuth,
  },

  AuthController: {
    login: true, // Autoriser l'accès sans token pour se connecter
    signup: true, // Autoriser l'accès sans token pour s'inscrire
  },

  // Ajoutez des règles pour d'autres contrôleurs si nécessaire
};