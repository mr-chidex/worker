import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Index";
import Orders from "./pages/Orders";
import Worker from "./pages/worker";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/:id" element={<Worker />} />
    </Router>
  );
};

export default Routes;
