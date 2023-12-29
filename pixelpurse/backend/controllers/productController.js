const Product = require("../models/productModel");

//crete Product
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    message: "Route is working",
  });
};
