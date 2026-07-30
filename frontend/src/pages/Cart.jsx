import { Link } from "react-router-dom";

function Cart() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1000px",
        margin: "60px auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,.1)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#111827",
          marginBottom: "20px",
          fontSize: "42px",
        }}
      >
        🛒 Shopping Cart
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        Your selected products will appear here.
      </p>

      <div
        style={{
          background: "#f3f4f6",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      >
        <h2>Total Items : 0</h2>
        <h2>Total Price : ₹0</h2>
      </div>

      <Link to="/products">
        <button
          style={{
            padding: "14px 30px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "17px",
            marginRight: "15px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </Link>

      <Link to="/checkout">
        <button
          style={{
            padding: "14px 30px",
            background: "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;