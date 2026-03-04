import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/temp";
import Welcome from "./pages/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;