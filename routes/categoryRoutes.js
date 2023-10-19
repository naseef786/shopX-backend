
const express = require('express');
const { Category, Subcategory } = require('../models/Category');

const router = express.Router();

router.post('/categories', async (req, res) => {
  try {
    const { mainCategoryName, subCategoryName, endCategory } = req.body
    console.log(mainCategoryName, subCategoryName, endCategory);
    let cat = await Category.findOne({ name: mainCategoryName })
    let end = await Subcategory.findOne({ name: endCategory })
    if (cat) {
      const subCategory = await Subcategory.findOne({ name: subCategoryName });
      if (subCategory) {
        const s = await Subcategory.create({ name: endCategory, parentCategory: subCategory });
      } else {
        const s = await Subcategory.create({ name: subCategoryName, parentCategory: cat })

        const c = await Subcategory.create({ name: endCategory, parentCategory: s }).then((error)=>{
          res.status(401).json({ message: 'catgory not successfully' })
        });
      }
      res.status(201).json({ message: 'catgory created successfully' })
    } else if (end) {
      res.status(201).json({ message: 'catgory created successfully' })
    }
    else {
      const mainCategory = await Category.create({ name: mainCategoryName });
      const subCategory = await Subcategory.create({ name: subCategoryName, parentCategory: mainCategory });
      const endSubcategory = await Subcategory.create({ name: endCategory, parentCategory: subCategory });
      console.log('Categories and subcategories created successfully!');
      res.status(201).json({ message: 'catgory created successfully' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find().populate('subcategories');
    const subcategories = await Subcategory.find().populate('subcategories');
    res.status(200).json({ categories, subcategories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;




