const express = require('express');
const Product = require('../models/Product');
const { Subcategory, Category } = require('../models/Category');

const router = express.Router();

router.post('/products', async (req, res) => {
  try {
    console.log(req.body);
    const { name, description, price, category, subcategoryId, endCategory } = req.body;

    const subcategory = await Subcategory.findOne({ name: subcategoryId });
    const mainCategory = await Category.findOne({ name: category });
    const endSub = await Subcategory.findOne({ name: endCategory });

    if (!subcategory || !mainCategory || !endSub) {
      return res.status(404).json({ message: 'One or more categories not found' });
    }

    const product = await Product.create({
      name,
      description,
      price,
      subcategory: subcategory._id,
      category: mainCategory.id,
      endCategory: endSub.id
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/products', async (req, res) => {
  try {
  
console.log("inside products");
   
const categories = await Category.find().populate('subcategories');
const subcategories = await Subcategory.find().populate('subcategories');
const products = await Product.find().exec()
res.status(200).json({ categories, subcategories,products });
   

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
