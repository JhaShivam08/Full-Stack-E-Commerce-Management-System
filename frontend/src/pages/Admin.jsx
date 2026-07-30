function Admin() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "40px auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111827",
        }}
      >
        📊 Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>5</h2>
          <p>Total Products</p>
        </div>

        <div
          style={{
            background: "#10b981",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>12</h2>
          <p>Total Orders</p>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>8</h2>
          <p>Total Users</p>
        </div>

        <div
          style={{
            background: "#ef4444",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>₹1,73,300</h2>
          <p>Total Revenue</p>
        </div>
      </div>

      <h2 style={{ marginBottom: "20px" }}>Quick Actions</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "14px 30px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Product
        </button>

        <button
          style={{
            background: "#10b981",
            color: "#fff",
            border: "none",
            padding: "14px 30px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Manage Orders
        </button>

        <button
          style={{
            background: "#f59e0b",
            color: "#fff",
            border: "none",
            padding: "14px 30px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Manage Users
        </button>
      </div>
    </div>
  );
}

export default Admin;