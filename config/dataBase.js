const mongoose = require('mongoose');
const { Subcategory, Category } = require('../models/Category');

const connect = async()=>{

 

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/ShopX');
    console.log("Database Connected")
    return db;
}


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
