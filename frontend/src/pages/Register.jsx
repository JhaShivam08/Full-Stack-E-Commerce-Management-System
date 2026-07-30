import { useState } from "react";

function Register() {
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "550px",
        margin: "60px auto",
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
        }}
      >
        📝 Register
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Create Your Account
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
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={{
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          style={{
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "15px",
            background: "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>

      {registered && (
        <h3
          style={{
            textAlign: "center",
            color: "green",
            marginTop: "20px",
          }}
        >
          ✅ Registration Successful
        </h3>
      )}
    </div>
  );
}

export default Register;