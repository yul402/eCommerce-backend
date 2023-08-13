// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product model & Category model
  // Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
});
  // Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
});

// Product model & ProductTag model
  // ProductTag belongsTo Product
ProductTag.belongsTo(Product,{
  foreignKey: 'product_id',
});
  // Product have many ProductTag
Product.hasMany(ProductTag,{
foreignKey: 'product_id',
});

// ProductTag model & Tag model
  // ProductTag belongsTo Tag
ProductTag.belongsTo(Tag,{
  foreignKey: 'tag_id',
});
    // Tag have many ProductTag
Tag.hasMany(ProductTag,{
  foreignKey: 'tag_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
