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

module.exports = router;