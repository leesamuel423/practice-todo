const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ('bcryptjs');

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [],
});

// User Password Bcryption Pre-Save Hook
userSchema.pre('save', async function (next) {
  try {
    // if password field isn't modified, can move on to the next middleware
    if (!this.isModified('password')) return next();
    // if password field is modified, hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // replace the password with the hashed password
    this.password = hashedPassword;
    next();
  } catch (err) {
    throw new Error('Error with userSchema.pre bcryption');
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;