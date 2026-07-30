const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(async () => {
    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany([
      {
        id: 1,
        name: "iPhone 16 Pro",
        category: "Mobile",
        price: 129999,
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
        rating: 4.9,
      },
      {
        id: 2,
        name: "Samsung Galaxy S25 Ultra",
        category: "Mobile",
        price: 119999,
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
        rating: 4.8,
      },
      {
        id: 3,
        name: "HP Victus Laptop",
        category: "Laptop",
        price: 68999,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Boat Rockerz 550",
        category: "Headphones",
        price: 1999,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        rating: 4.5,
      },
      {
        id: 5,
        name: "Nike Air Max",
        category: "Shoes",
        price: 7999,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
        rating: 4.6,
      },
    ]);

    console.log("✅ Products Inserted Successfully");
    process.exit();
  })
  .catch((err) => console.log(err));