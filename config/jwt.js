module.exports.jwt = {
    secret: process.env.JWT_SECRET || 'votre-clé-secrète',
    expiresIn: '1h',
  };