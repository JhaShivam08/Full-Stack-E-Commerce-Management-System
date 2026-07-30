const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

// ================= MONGODB CONNECTION =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

const PORT = process.env.PORT || 5000;

// ================= HOME =================

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce Backend");
});

// ================= GET ALL PRODUCTS =================

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================= GET SINGLE PRODUCT =================

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      id: Number(req.params.id),
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= GET BY CATEGORY =================

app.get("/products/category/:category", async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.category,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= ADD PRODUCT =================

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= UPDATE PRODUCT =================

app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product Updated Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= DELETE PRODUCT =================

app.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      id: Number(req.params.id),
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= START SERVER =================

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});