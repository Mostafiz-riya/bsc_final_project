const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const orderSchema = require("../Schema/orderSchema.js");
const checkLogin = require("../middleware/checkLogin.js");
const Order = mongoose.model("Order", orderSchema);
const userSchema = require("../Schema/userSchema.js");
const User = mongoose.model("User", userSchema);

router.get("/", checkLogin, async (req, res) => {
  try {
    const result = await Order.find({});
    if (result) {
      res.status(200).json({
        message: "Request Successfull",
        data: result,
      });
    } else {
      res.status(201).json({
        error: "Failed to load Data",
      });
    }
  } catch (err) {
    res.status(201).json({
      error: "Failed to load Data",
    });
  }
});
router.get("/:email", checkLogin, async (req, res) => {
  try {
    const result = await Order.find({ email: req.email });
    if (result) {
      res.status(200).json({
        message: "Request Successfull",
        data: result,
      });
    } else {
      res.status(201).json({
        error: "Failed to load Data",
      });
    }
  } catch (err) {
    res.status(201).json({
      error: "Failed to load Data",
    });
  }
});
router.post("/", checkLogin, async (req, res) => {
  try {
    if (req.email === req.body.email) {
      const newOrder = new Order(req.body);
      const result = await newOrder.save();
      if (result._id) {
        res.status(201).json({
          message: "Order Successfully",
          result,
        });
      } else {
        res.status(409).json({
          error: "Failed to Order",
        });
      }
    } else {
      res.status(409).json({
        error: "Failed to Order",
      });
    }
  } catch {
    res.status(409).json({
      error: "Failed to Order",
    });
  }
});
router.delete("/:id", checkLogin, async (req, res) => {
  try {
    const admin = await User.findOne({ email: req.email });
    if (admin.role === "admin") {
      const result = await Order.findOneAndRemove({ _id: req.params.id });
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
  } catch (err) {
    res.status(204).json({
      error: "Forbidden access",
    });
  }
});
router.delete("/user/:id", checkLogin, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.email });
    if (user?.email) {
      const result = await Order.findOneAndRemove({ _id: req.params.id });
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
  } catch (err) {
    res.status(204).json({
      error: "Forbidden access",
    });
  }
});
module.exports = router;
