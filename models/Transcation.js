const mongoose = require('mongoose');



const AccountSchema = new mongoose.Schema({
  User_Id: {
    type: Object ,
    required: true,
  },
  _Id: {
    type: Object,
    required: true,
  },
  Account_Id: {
    type: Object ,
    required: true,
  },
Category: {
    type: String ,
    required: true,
  },
 
  Amount: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Transcation_Date: {
    type: Date,
    required: true,
  },
  

});
const User = mongoose.model('Account', AccountSchema);

module.exports = Account;