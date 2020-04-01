const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretOrKey = require("../config/keys").secretOrKey;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

UserSchema.statics.login = async function (username, password) {
  const User = this;
  const user = await User.findOne({ username });
  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    user.token = "Bearer " + jwt.sign({ _id: user._id }, secretOrKey);
    user.loggedIn = true;
    return user;
  }
  return null;
};

UserSchema.statics.signUp = async function (username, password) {
  const User = this;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User ({username: username, password: hashedPassword});
  const token = jwt.sign({_id: user._id}, secretOrKey);
  user.token = "Bearer " + token;
  await user.save();
  return user;
}

module.exports = mongoose.model('User', UserSchema);