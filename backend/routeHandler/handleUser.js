const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userSchema = require("../Schema/userSchema.js");
const User = mongoose.model("User", userSchema);
const jwt = require("jsonwebtoken");
const checkLogin = require("../middleware/checkLogin.js");

router.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    if (result && result.length > 0) {
      res.status(200).json({
        message: "successfully",
        data: result,
      });
    } else {
      res.status(204).status({
        error: "Failed to load user",
      });
    }
  } catch {
    console.log(err);
    res.status(204).status({
      error: "Failed to load user",
    });
  }
});

router.put("/:email", async (req, res) => {
  try {
    const filter = { email: req.params.email };
    let name;
    if (req.body.name !== null) {
      name = req.body.name;
    }
    const update = {
      name,
      email: req.params.email,
      role: req.body.role,
      image: "",
    };
    let result = await User.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
    if (result._id) {
      const token = jwt.sign(
        {
          userName: req.body.name,
          email: req.params.email,
        },
        process.env.JSON_WEB_TOKEN
      );
      res.status(200).json({
        message: "Successfully",
        token,
      });
    }
  } catch (err) {
    res.status(204).json({
      error: "Authentication Failed",
    });
  }
});

router.get("/admin/:email", async (req, res) => {
  try {
    let result = await User.findOne({ email: req.params.email });
    console.log(result);
    if (result._id) {
      res.status(200).json({
        message: "Successfully",
        admin: result?.role == "admin" ? true : false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(204).json({
      error: "Authentication Failed",
    });
  }
});
router.put("/admin/:email", async (req, res) => {
  console.log(req.body);
  try {
    const filter = { email: req.params.email };
    const update = {
      role: req.body.role,
    };
    res.status(200).json({
      filter,
      update,
    });
    let result = await User.findOneAndUpdate(filter, update);
    if (result._id) {
      res.status(200).json({
        message: "Successfully",
        result,
      });
    }
  } catch (err) {
    res.status(204).json({
      error: "Authentication Failed",
    });
  }
});

router.delete("/:id", checkLogin, async (req, res) => {
  try {
    const admin = await User.findOne({ email: req.email });
    if (admin.role === "admin") {
      const result = await User.findOneAndRemove({ _id: req.params.id });
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
