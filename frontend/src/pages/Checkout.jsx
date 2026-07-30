import { useState } from "react";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "900px",
        margin: "50px auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#111827",
        }}
      >
        💳 Checkout
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "30px",
        }}
      >
        Complete your order details
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Delivery Address"
          rows="4"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "15px",
            background: "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>

      {orderPlaced && (
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            background: "#dcfce7",
            color: "#166534",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ✅ Order Placed Successfully!
        </div>
      )}
    </div>
  );
}

export default Checkout;