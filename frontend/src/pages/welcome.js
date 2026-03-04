import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    // remove stored username
    localStorage.removeItem("username");

    // redirect to login page
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Welcome, {username}!</h1>

      <p>You have successfully logged in.</p>

      <button 
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Welcome;