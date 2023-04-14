const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

// SignUp Route
userController.signup = async (req, res, next) => {
  console.log('--> userController.login <--');

  // destructure username and password from req.body
  const { username, password } = req.body;
  console.log('req.body from userController.login:', req.body);

  // check to see if username and password are provided
  if (!username || !password) {
    res.status(400);
    throw new Error('Please complete all required fields');
  }

  try {
    // check to see if username is in the database
    User.findOne({ username }).exec()
      .then(user => {
        // if username is in database, throw error
        if (user) {
          res.status(400);
          throw new Error('Username already exists. Please choose another username');
        }
        // if username is not in database, create new user with bcrypt hashed password
        User.create({ username, password })
          .then(user => {
            res.locals.user = user;
            return next();
          });
      });
  } 
  catch (err) {
    res.status(400);
    throw new Error('Error in userController.login controller');
  }
};
