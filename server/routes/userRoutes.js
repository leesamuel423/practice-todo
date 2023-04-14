const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Handles requests to /api/users
// Login Route
router.route('/login', 
  userController.login,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);
// Signup Route
router.route('/signup', 
  userController.signup,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

// Export statement
module.exports = router;