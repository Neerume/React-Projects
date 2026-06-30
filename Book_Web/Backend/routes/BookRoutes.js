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

  router.get("/:id", async(req, res)=>{
    try{
      const book = await Book.findById(req.params.id);
      if(book==null){
        return res.status(404).json({message:"Book not found"})
      }
      res.json(book)
    }
    catch(err){
      res.status(404).json({message:err.message})
    }
  })

  router.put("/:id", async(req,res)=>{
    try{
      const book = await Book.findById(req.params.id);
      if(book==null){
        return res.status(404).json({message:"Book not found"})
      }
      Object.assign(book, req.body);
      await book.save();
      res.json(book);
    }
    catch(err){
      res.status(400).json({message:err.message})
    }
    

  })


  router.delete("/:id", async(req,res)=>{
    try{
      const book = await Book.findById(req.params.id);
      if(book==null){
        return res.status(404).json({message:"Book not found"})
      }
      await book.deleteOne();
      res.json({message:"Book deleted successfully"})
      
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
  })


module.exports = router;