const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middleware/checkLogin.js");
const router = express.Router();
const reviewSchema = require("../Schema/reviewSchema.js");
const Review = mongoose.model("Review", reviewSchema);
const userSchema = require("../Schema/userSchema.js");
const User = mongoose.model("User", userSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Review.find({});
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
    const result = await Review.find({ email: req.email });
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
      const newReview = new Review(req.body);
      const result = await newReview.save();
      if (result._id) {
        res.status(201).json({
          message: "Review Successfully",
          result,
        });
      } else {
        res.status(409).json({
          error: "Failed to Review",
        });
      }
    } else {
      res.status(409).json({
        error: "Failed to Review",
      });
    }
  } catch {
    res.status(409).json({
      error: "Failed to Review",
    });
  }
});
router.delete("/user/:id", checkLogin, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.email });
    if (user?.email) {
      const result = await Review.findOneAndRemove({ _id: req.params.id });
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
