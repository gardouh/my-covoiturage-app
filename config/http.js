const jwt = require('jsonwebtoken');

module.exports.http = {
  middleware: {
    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],
  },
  middlewares: {
    jwtAuth: async function(req, res, next) {
      // Vérifier la présence du token JWT dans les en-têtes de la requête
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Invalid authorization header' });
      }

      // Extraire le token JWT de l'en-tête d'authentification
      const token = authHeader.slice(7);

      try {
        // Vérifier la validité du token JWT
        const secret = sails.config.jwt.secret;
        const payload = jwt.verify(token, secret);
        req.userId = payload.userId; // Stocker l'ID de l'utilisateur dans la requête pour une utilisation ultérieure
        return next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    },
  },
};