const express = require("express");
const router = express.Router();

const Account = require("../models/Account.js");


router.get("/new.ejs",async(req,res)=>{ //for the transaction to add new

    res.render("account/new.ejs");
});
    
router.get("/",(req,res)=>{ // so we can get all the transaction from our database

    const transaction = [];
   res.render("account/index.ejs",{account}) ;



});

router.post("/",(req,res)=>{
    const newAccount ={
       Name: req.body.accountName,
        type: req.body.accountType, 
        Nmber: req.body.accountNumber,
        Balance: req.body.balanceNumber,
        

 };
    
    res.redirect('/account');
});


//update router

router.delete('/:accountId', async (req, res) => {
  try {
    const account = await Account.findById(req.params.accountId);
    
    if (!account) {
        console.log("Account not found ")
     
      return res.redirect("/account");
    }
    
    // Check if the user owns this account
    if (account.owner.equals(req.session.user._id)) {
      console.log("Permission granted-updating the account ");
      await account.updateOne();
    
      console.log("Updated");
      await account.updateOne();
      res.redirect("/account/${req.params.accountid");
    } else {
      console.log("Permission denied ");
      res.redirect("/account");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//Delete Router
router.delete('/:accountId', async (req, res) => {
  try {
    const account = await Account.findById(req.params.accountId);
    
    if (!account) {
      console.log("Account not found");
      return res.redirect("/account");
    }
    
    // Check if the user owns this account
    if (account.owner.equals(req.session.user._id)) {
      console.log("Permission granted - checking for associated transactions");
      
      // Check if there are any transactions associated with this account
      const transactionCount = await Transaction.countDocuments({ 
        account: req.params.accountId 
      });
      
      if (transactionCount > 0) {
        console.log(`Cannot delete - ${transactionCount} transaction(s) associated`);
        // You can use flash messages or pass error through query params
        return res.redirect("/account");
      }
      
      console.log("Deleting account");
      await account.deleteOne();
      res.redirect("/account");
    } else {
      console.log("Permission denied - user does not own this account");
      res.redirect("/account");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;