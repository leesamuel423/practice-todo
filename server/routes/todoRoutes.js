const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');

// Handles requests to /api/todos
// Add a todo to the user database
router.post('/add',
  todoController.add,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

// Delete a todo from the user databse
router.delete('/delete',
  todoController.delete,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);



module.exports = router;