const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
          return done(err);
        }
        if (!res) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }
        return done(null, user);
      });
    }),
  ),
);

module.exports.passport = passport;
