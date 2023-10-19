
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Assuming you have a Category model
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory', // Assuming you have a Subcategory model
    required: true,
  },
  endCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory', // Assuming you have a model for end categories
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports =  Product ;

