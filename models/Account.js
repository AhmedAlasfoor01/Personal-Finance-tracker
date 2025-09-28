const mongoose = require('mongoose');//This page for creating the Database of the account 



const AccountSchema = new mongoose.Schema({
  User_Id: {
    type: Object ,
    required: true,
  },

Account_Name: {
    type: String ,
    required: true,
  },
  Account_Type: {
    type: String,
    required: true,
  },
  Balance: {
    type: Number,
    required: true,
  },
  Account_Number: {
    type: String,
    required: true,
  },

});
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;