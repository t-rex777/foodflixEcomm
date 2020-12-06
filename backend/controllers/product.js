const Product = require("../models/product");
const formidable = require("formidable");
const fs = require("fs");
const mongoose = require("mongoose");
const _ = require("lodash")

//corresponds to a particular product
exports.getProductdById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "product not found !",
        });
      }
      req.product = product;
      next();
    });
};

//Create
exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with the image",
      });
    }
    //destructuring the fields
    const { product_name, description, category, price, stock } = fields;

    if (!product_name || !description || !category || !price || !stock) {
      return res.status(400).json({
        error: "Please fill all fields.",
      });
    }
    const product = new Product(fields);
 
    //checking if the size of the photo isnt large.
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Photo size is too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //saving into database
    product.save((err, product) => {
      if (err) {
        // return res.status(400).json({
        //   error: "couldn't save into the database",
        // });
        return res.json(err)
      }
       res.json(product);
    });
  });
};

//Read
exports.getAllProducts = (req, res) => {
  //req.product.photo = undefined;
  return res.json(req.product);
};

//Middleware
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

//Update
exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with the image",
      });
    }

    //updating the fields
    let product = req.product;
    product = _.extend(product, fields);

    //checking the size of the photo.
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Photo size is too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //saving into database
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "couldn't update the database",
        });
      }
      return res.json(product);
    });
  });
};

//delete
exports.deleteProduct = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the product",
      });
    }
    return res.json({
      message: "The product deleted successfully",
      deletedProduct,
    });
  });
};


//*********************to read all these*******************************

exports.getAllProducts = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "NO product FOUND"
        });
      }
      res.json(products);
    });
};

exports.getAllUniqueCategories = (req, res) => {
  Product.distinct("category", {}, (err, category) => {
    if (err) {
      return res.status(400).json({
        error: "NO category found"
      });
    }
    res.json(category);
  });
};

exports.updateStock = (req, res, next) => {
  let myOperations = req.body.order.products.map(prod => {
    return {
      updateOne: {
        filter: { _id: prod._id },
        update: { $inc: { stock: -prod.count, sold: +prod.count } }
      }
    };
  });

  Product.bulkWrite(myOperations, {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: "Bulk operation failed"
      });
    }
    next();
  });
};
