const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function isValidCredentials(email, password) {
  const user = await User.findOne({ email });
  if (!user || !password) {
    return false;
  }
  console.log(user);
  const isPasswordCorrect = await comparePasswords(password, user.hashedPassword);
  return isPasswordCorrect;
}

async function createUser(email, password, name, role = 'client') { // Added a default role value
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, hashedPassword, name, role }).fetch(); // Added role to the object
  return newUser;
}

async function isEmailTaken(email) {
  const user = await User.findOne({ email });
  return !!user;
}

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } }).select([
    'id',
    'name',
    'email',
    'hashedPassword',
  ]);
  return user;
}

async function comparePasswords(providedPassword, hashedPassword) {
  return await bcrypt.compare(providedPassword, hashedPassword);
}

module.exports = {
  login: async function (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    if (!(await isValidCredentials(email, password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = await findUserByEmail(email);
    const payload = {
      userId: user.id,
    };

    const secret = sails.config.jwt.secret;
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });

    res.json({ token });
},


  logout: function (req, res) {
    res.json({ message: 'Logout successful' });
  },

  signup: async function (req, res) {
    const { email, password, name, role } = req.body; // Added 'role' to destructuring
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'L\'email, le mot de passe et le nom sont obligatoires' });
    }
    if (await isEmailTaken(email)) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }
    const newUser = await createUser(email, password, name, role); // Added 'role' as an argument

    const payload = {
      userId: newUser.id,
    };

    const secret = sails.config.jwt.secret;
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });

    res.status(201).json({ token });
  },
};
