// /**
//  * UserController
//  *
//  * @description :: Server-side actions for handling incoming requests.
//  * @help        :: See https://sailsjs.com/docs/concepts/actions
//  */



// const jwt = require('jsonwebtoken');
// const { secret, expiresIn } = sails.config.jwt;

// module.exports = {
//   create: async function(req, res) {
//     try {
//       const user = await User.create(req.body).fetch();
//       const payload = { userId: user.id };
//       const token = jwt.sign(payload, secret, { expiresIn });
//       return res.json({ user, token });
//     } catch (error) {
//       return res.serverError(error);
//     }
//   },
// };