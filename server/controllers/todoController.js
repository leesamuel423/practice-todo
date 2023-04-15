const User = require('../models/userModel.js');

const todoController = {};
// Add a todo to the user database
todoController.add = async (req, res, next) => {
  console.log('--> userController.addTodo <--');
  const { name, description, id } = req.body;
  console.log('req.body from userController.addTodo:', req.body);
  if (!name || !description) {
    res.status(400);
    return next(new Error('Please complete all required fields'));
  }
  if (!id) {
    res.status(400);
    return next(new Error('Session expired, please sign in again'));
  }
  try {
    const user = await User.findOneAndUpdate({ _id: id }, { $push: { tasks: { name, description }}}, { new: true }).exec();
    console.log('This is the user from todoController.add:', user);
    if (!user) {
      res.status(400);
      return next(new Error('User not found'));
    }
    res.locals.user = user;

    return next();
  }
  catch (err) {
    res.status(400);
    return next(new Error('Error in userController.addTodo controller'));
  }
};

// Delete a todo from the user databse
todoController.delete = async (req, res, next) => {
  console.log('--> userController.deleteTodo <--');
  const { name, description, id } = req.body;
  console.log('req.body from userController.deleteTodo:', req.body);
  if (!name || !description) {
    res.status(400);
    return next(new Error('Please complete all required fields'));
  }
  if (!id) {
    res.status(400);
    return next(new Error('Session expired, please sign in again'));
  }
  try {
    const user = await User.findOneAndUpdate({ _id: id }, { $pull: { tasks: { name, description }}}, { new: true }).exec();
    console.log('This is the user from todoController.delete:', user);
    if (!user) {
      res.status(400);
      return next(new Error('User not found'));
    }
    res.locals.user = user;
    return next();
  }
  catch (err) {
    res.status(400);
    return next(new Error('Error in userController.deleteTodo controller'));
  }
};

// Export statement
module.exports = todoController;
