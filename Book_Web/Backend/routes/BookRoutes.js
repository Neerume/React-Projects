const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); 


router.get("/",async (req,res)=>{
  try{
    const books = await Book.find();
    res.json(books)
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})

router.post("/",async (req,res)=>{
  try{
    const book= req.body;
    const newBook = new Book(book);
    await newBook.save();
    res.status(201).json(newBook);
  }
  catch(err){
    res.status(400).json({message:err.message})
  }

})

module.exports = router;