const passport = require('./passport');

module.exports.bootstrap = async function () {
  sails.passport = passport;
};
