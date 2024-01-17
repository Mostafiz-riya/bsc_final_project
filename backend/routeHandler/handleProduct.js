const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middleware/checkLogin.js");
const router = express.Router();
const productSchema = require("../Schema/productSchema.js");
const Product = mongoose.model("Product", productSchema);
const userSchema = require("../Schema/userSchema.js");
const User = mongoose.model("User", userSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});

router.get("/home", async (req, res) => {
  try {
    const result = await Product.find({}).skip(0).limit(6);
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findById({ _id: req.params.id });
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});
router.post("/", checkLogin, async (req, res) => {
  try {
    const result = await User.findOne({ email: req.email });
    if (result.role === "admin") {
      const newProduct = new Product(req.body);
      const result = await newProduct.save();
      if (result._id) {
        res.status(201).json({
          message: "Product Added Successfully",
          result,
        });
      } else {
        res.status(409).json({
          error: "Failed to Added Product",
        });
      }
    }
  } catch {
    res.status(409).json({
      error: "Failed to Review",
    });
  }
});

router.delete("/:id", checkLogin, async (req, res) => {
  try {
    const admin = await User.findOne({ email: req.email });
    if (admin.role === "admin") {
      const result = await Product.findOneAndRemove({ _id: req.params.id });
      if (result._id) {
        res.status(202).json({
          message: "user deleted successsfull",
          data: result,
        });
      } else {
        res.status(204).json({
          error: "Failed to delete User",
        });
      }
    } else {
      res.status(204).json({
        error: "Forbidden access",
      });
    }
  } catch {
    res.status(204).json({
      error: "Forbidden access",
    });
  }
});
module.exports = router;
