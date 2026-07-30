import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "500px",
        margin: "60px auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        🔐 Login
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Welcome Back
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
          type="email"
          placeholder="Email"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      {login && (
        <h3
          style={{
            textAlign: "center",
            color: "green",
            marginTop: "20px",
          }}
        >
          ✅ Login Successful
        </h3>
      )}
    </div>
  );
}

export default Login;