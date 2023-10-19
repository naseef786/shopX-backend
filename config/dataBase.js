const mongoose = require('mongoose');
// const { Subcategory, Category } = require('../models/Category');
require('dotenv').config();
const ATLAS_URI = process.env.ATLAS_URI

const connect = async () => {
    try {
      mongoose.set('strictQuery', true);
      const db = await mongoose.connect(ATLAS_URI);
      console.log('Database Connected');
      return db;
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error; // Re-throw the error for higher-level handling
    }
  };
  


// const initializeCategories = async () => {
//     const electronicsCategory = await Category.create({ name: 'Electronics' });
//     const laptopsSubcategory = await Subcategory.create({ name: 'Laptops', parentCategory: electronicsCategory });
//     const phonesSubcategory = await Subcategory.create({ name: 'Phones', parentCategory: electronicsCategory });
//     const androidSubcategory = await Subcategory.create({ name: 'Android', parentCategory: phonesSubcategory });
//     const iosSubcategory = await Subcategory.create({ name: 'iOS', parentCategory: phonesSubcategory });
  
//     console.log('Categories and subcategories created successfully!');
//     process.exit(); // This will exit the script after creating the categories
//   };
  
//   initializeCategories();

module.exports =connect
