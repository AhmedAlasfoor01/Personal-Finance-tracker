const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ID: {
    type: Object,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
