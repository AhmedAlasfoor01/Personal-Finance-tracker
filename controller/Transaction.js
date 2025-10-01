const express = require("express");
const router = express.Router();

const Transaction= require("../models/Transaction");

router.get("/new.ejs",async(req,res)=>{ //for the transaction to add new

    res.render("transaction/new.ejs");
});

router.get("/",(req,res)=>{ // so we can get all the transaction from our database

    const transaction = [];
   res.render("transaction/index.ejs",{transaction}) ;



});

router.post("/",(req,res)=>{
    const newTransaction ={
        Creation : req.body.creationDate,
        type: req.body.transactionType, 
        date: req.body.transactionDate,
        Details: req.body.transactiondetails,
        

 };
    
    res.redirect('/transaction');
});

//update router 

router.put('/:transactionId', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);
    
    if (!transaction) {
      return res.redirect("/transactions");
    }
    
    // Check if the user owns this transaction
    if (transaction.owner.equals(req.session.user._id)) {
     
      await transaction.updateOne();
      res.redirect("/transactions");
    } else {
      console.log("Permission denied ");
      res.redirect("/transactions");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});


//Delete router 
router.delete('/:transactionId', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);
    
    if (!transaction) {
      console.log("Transaction not found");
      return res.redirect("/transactions");
    }
    
    // Check if the user owns this transaction
    if (transaction.owner.equals(req.session.user._id)) {
      console.log("Permission granted - deleting transaction");
      await transaction.deleteOne();
      res.redirect("/transactions");
    } else {
      console.log("Permission denied - user does not own this transaction");
      res.redirect("/transactions");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});





module.exports = router;