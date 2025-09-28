const mongoose = require('mongoose');//This page for creating the database for the transcation 



const TransactionSchema = new mongoose.Schema({
  User_Id: {
    type: Object ,
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
const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;