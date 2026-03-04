import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // remember username
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://loginapp-2s60.onrender.com",
        { username, password }
      );

      if (response.status === 200) {

        localStorage.setItem("username", username);

        navigate("/welcome");

      }

    } catch (error) {

      setError("Invalid credentials. Please try again.");

    }
  };

  return (

    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

        </div>

        <div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>

        <button type="submit">Login</button>

      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>

  );
}

export default Login;