const express = require('express');
const Product = require('../models/product');
const { Subcategory } = require('../models/Category');

const router = express.Router();

router.post('/products', async (req, res) => {
  try {
    const { name, description, price, subcategoryId } = req.body;
    const subcategory = await Subcategory.findById(subcategoryId);

    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    const product = await Product.create({
      name,
      description,
      price,
      subcategory: subcategory._id
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
