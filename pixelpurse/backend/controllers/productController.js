const { response } = require("express");
const Product = require("../models/productModel");

//crete Product --Admin
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
//get all products

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

//update Product --Admin

exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  await Product.update;
  
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    product
  });
};

//delete a product from the database --Admin

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};
