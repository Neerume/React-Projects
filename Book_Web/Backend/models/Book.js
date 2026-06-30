const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
  type: String,
  required: true,
  trim: true,
},
  author: {
  type: String,
  required: true,
  trim: true,
},
  price: {
  type: Number,
  required: true,
  min: 0
},
  image: String,
  description: String,
  category: String,
  tags: [String],
  stock:{
    type:Number,
    default:0,
    min:0
  },
  bestSeller: Boolean,
  newArrival: Boolean,
  discount: Boolean,
  language: String,
});


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;