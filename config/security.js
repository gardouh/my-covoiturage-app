module.exports.security = {
  cors: {
    allRoutes: true,
    allowOrigins: '*', // Remplacez '*' par les domaines spécifiques autorisés, si nécessaire
    allowCredentials: false,
    allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    allowRequestHeaders: 'content-type',
  },
};
