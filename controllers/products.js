const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured, page, limit } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let pages = Number(page) || 1;
  let limits = Number(limit) || 10;
  let skips = (pages - 1) * limits;

  const myData = await Product.find(queryObject).skip(skips);
  res.status(200).json(myData);
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(queryObject);
  res.status(200).json(myData);
};

module.exports = { getAllProducts, getAllProductsTesting };
