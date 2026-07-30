import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:5000/products", {
        ...formData,
        id: Number(formData.id),
        price: Number(formData.price),
      });

      getProducts();

      setFormData({
        id: "",
        name: "",
        category: "",
        price: "",
        image: "",
      });
    } catch (err) {
      alert("Unable to add product");
      console.log(err);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:5000/products/${formData.id}`,
        {
          name: formData.name,
          category: formData.category,
          price: Number(formData.price),
          image: formData.image,
        }
      );

      getProducts();

      setFormData({
        id: "",
        name: "",
        category: "",
        price: "",
        image: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">

      <h1 className="product-title">
        Product Management
      </h1>

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

          <button
            className="add-btn"
            onClick={addProduct}
          >
            Add Product
          </button>

          <button
            className="update-btn"
            onClick={updateProduct}
          >
            Update Product
          </button>

        </div>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="product-grid">
                {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

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

              <span className="category">
                {product.category}
              </span>

              <h3>
                ₹{product.price}
              </h3>

              <p className="rating">
                ⭐⭐⭐⭐⭐
              </p>

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
                  onClick={() =>
                    deleteProduct(product.id)
                  }
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