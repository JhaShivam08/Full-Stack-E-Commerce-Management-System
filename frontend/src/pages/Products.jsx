import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Phones",
    price: 129999,
    image: "",
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    category: "Phones",
    price: 119999,
    image: "",
  },
  {
    id: 3,
    name: "HP Victus Laptop",
    category: "Laptops",
    price: 79999,
    image: "",
  },
  {
    id: 4,
    name: "Boat Rockerz 550",
    category: "Audio",
    price: 1499,
    image: "",
  },
  {
    id: 5,
    name: "Nike Air Max",
    category: "Footwear",
    price: 7999,
    image: "",
  },
];

function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    image: "",
  });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = () => {
    const trimmedName = formData.name.trim();
    const trimmedCategory = formData.category.trim();
    const trimmedImage = formData.image.trim();
    const priceValue = Number(formData.price);

    if (!trimmedName || !trimmedCategory || Number.isNaN(priceValue)) {
      alert("Please fill in name, category, and a valid price");
      return;
    }

    const enteredId = Number(formData.id);
    const newProduct = {
      id:
        Number.isInteger(enteredId) && enteredId > 0
          ? enteredId
          : products.length + 1,
      name: trimmedName,
      category: trimmedCategory,
      price: priceValue,
      image: trimmedImage,
    };

    setProducts((prev) => [...prev, newProduct]);

    setFormData({
      id: "",
      name: "",
      category: "",
      price: "",
      image: "",
    });
  };

  const updateProduct = () => {
    const idValue = Number(formData.id);

    if (!Number.isInteger(idValue) || idValue <= 0) {
      alert("Please select a valid product ID to update");
      return;
    }

    const updatedProduct = {
      id: idValue,
      name: formData.name.trim(),
      category: formData.category.trim(),
      price: Number(formData.price),
      image: formData.image.trim(),
    };

    setProducts((prev) =>
      prev.map((product) => (product.id === idValue ? updatedProduct : product))
    );

    setFormData({
      id: "",
      name: "",
      category: "",
      price: "",
      image: "",
    });
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1 className="product-title">Product Management</h1>

      <div className="product-form">
        <input
          type="number"
          placeholder="ID"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <div className="button-group">
          <button className="add-btn" onClick={addProduct}>
            Add Product
          </button>

          <button className="update-btn" onClick={updateProduct}>
            Update Product
          </button>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={
                product.image && product.image.trim() !== ""
                  ? product.image
                  : "https://via.placeholder.com/250x220?text=No+Image"
              }
              alt={product.name}
            />

            <div className="product-info">
              <h2>{product.name}</h2>

              <span className="category">{product.category}</span>

              <h3>₹{product.price}</h3>

              <p className="rating">⭐⭐⭐⭐⭐</p>

              <div className="card-buttons">
                <button
                  className="edit-btn"
                  onClick={() =>
                    setFormData({
                      id: product.id,
                      name: product.name,
                      category: product.category,
                      price: product.price,
                      image: product.image || "",
                    })
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;