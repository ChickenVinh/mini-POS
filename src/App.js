import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Order from "./Pages/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order/:floor/:table" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
