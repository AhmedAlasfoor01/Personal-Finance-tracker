const mongoose = require('mongoose');//This page for creating the database for the Transaction 
const Account = require('./Account.js');
const User = require('./user.js');


const TransactionSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;