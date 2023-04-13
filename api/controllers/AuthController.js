const jwt = require('jsonwebtoken');

// Replace with your own function to validate email and password
async function isValidCredentials(email, password) {
  // Implement your own function to check the credentials against your database
  // For example:
  const user = await User.findOne({ email });
  console.log('User:', user);
  console.log('Provided password:', password);
  
  if (!user || !password) {
    return false;
  }
  
  // Compare the provided password with the one stored in the database (assuming you use hashed passwords)
  const isPasswordCorrect = await comparePasswords(password, user.hashedPassword);
  return isPasswordCorrect;
}

async function createUser(email, password, name) {
    // Implement your own function to create a new user and save it to your database
    // For example, using Mongoose:
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10 rounds
    const newUser = new User({ email, hashedPassword, name });
    await newUser.save();
    return newUser;
  }
  
  async function isEmailTaken(email) {
    // Implement your own function to check if the email is already taken
    const user = await User.findOne({ email });
    return !!user;
  }


// Replace with your own function to fetch user by email
async function findUserByEmail(email) {
    // Assuming your User model has a column named 'hashedPassword'
    const user = await User.findOne({ where: { email } }).select(['id', 'name', 'email', 'hashedPassword']);
    return user;
  }

  

// Replace with your own function to compare passwords
async function comparePasswords(providedPassword, hashedPassword) {
  // Implement your own function to compare the provided password with the stored hashed password
  // For example, using bcrypt:
  const bcrypt = require('bcrypt');
  return await bcrypt.compare(providedPassword, hashedPassword);
}

module.exports = {
  login: async function (req, res) {
    const { email, password } = req.body;

    // Check if the email and password are valid (e.g., query the database)
    if (!(await isValidCredentials(email, password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the credentials are valid, create the JWT payload
    const user = await findUserByEmail(email); // Replace this with your own function to fetch the user by email
    const payload = {
      userId: user.id,
      // Include any other necessary information
    };

    // Sign the JWT with the secret key from your Sails configuration
    const secret = sails.config.jwt.secret;
    const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Set the token expiration time as needed

    // Return the JWT in the response
    res.json({ token });
  },

  logout: function (req, res) {
    // Since JWT tokens are stateless, you cannot actually invalidate the token on the server-side.
    // However, you can remove the token from the client-side (e.g., remove it from local storage).
    // This controller action is just a placeholder to indicate a logout action.
    res.json({ message: 'Logout successful' });
  },

  signup: async function (req, res) {
    const { email, password, name } = req.body;

    // Validate user input
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Email, password, and name are required' });
    }

    // Check if the email is already taken
    if (await isEmailTaken(email)) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

    // Create a new user and save it to the database
    const newUser = await createUser(email, password, name);

    // If the user is created successfully, create the JWT payload
    const payload = {
      userId: newUser.id,
      // Include any other necessary information
    };

    // Sign the JWT with the secret key from your Sails configuration
    const secret = sails.config.jwt.secret;
    const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Set the token expiration time as needed

    // Return the JWT in the response
    res.status(201).json({ token });
  },
  
};
