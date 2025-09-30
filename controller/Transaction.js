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






module.exports = router;