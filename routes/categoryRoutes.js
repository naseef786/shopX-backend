
const express = require('express');
const { Category, Subcategory } = require('../models/Category');

const router = express.Router();

router.post('/categories', async (req, res) => {
  try {
    const  {mainCategoryName,subCategoryName,endCategory} = req.body
    console.log(mainCategoryName,subCategoryName,endCategory);
    // const cat = Category.findOne({name:mainCategoryName})
    // console.log(cat);
    // if(cat) res.status(440).json({message:"alreaady exist"})
    // else{
    const mainCategory = await Category.create({ name:mainCategoryName});
    const subCategory = await Subcategory.create({ name: subCategoryName, parentCategory: mainCategory });
    // const phonesSubcategory = await Subcategory.create({ name: 'Phones', parentCategory: electronicsCategory });
    const endSubcategory = await Subcategory.create({ name:endCategory, parentCategory: subCategory });
    // const iosSubcategory = await Subcategory.create({ name: 'iOS', parentCategory: phonesSubcategory });
    console.log('Categories and subcategories created successfully!');
    res.status(201).json({message:'catgory created successfully'})
  
   
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



// // Create a new category
// router.post('/categories', async (req, res) => {
//   const { name, parentId } = req.body;

//   try {
//     const parentCategory = parentId ? await Category.findById(parentId) : null;

//     const newCategory = new Category({
//       name,
//       parent: parentCategory,
//     });

//     await newCategory.save();

//     res.json(newCategory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all categories
// router.get('/categories', async (req, res) => {
//   try {
//     const categories = await Category.find().populate('parent');
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

