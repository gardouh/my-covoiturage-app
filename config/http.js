// http.js
const jwtAuth = require("../api/middleware/jwtAuth");

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
      'jwtAuth',
    ],
    jwtAuth: jwtAuth,
  },
};
