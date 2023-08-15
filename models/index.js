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


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'joined_product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'joined_tag_product'
});

// Product model & ProductTag model
  // ProductTag belongsTo Product
// ProductTag.belongsTo(Product,{
//   foreignKey: 'product_id',
// });
  // Product have many ProductTag
// Product.hasMany(ProductTag,{
// foreignKey: 'product_id',
// });

// ProductTag model & Tag model
  // ProductTag belongsTo Tag
// ProductTag.belongsTo(Tag,{
//   foreignKey: 'tag_id',
// });
    // Tag have many ProductTag
// Tag.hasMany(ProductTag,{
//   foreignKey: 'tag_id',
// });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
