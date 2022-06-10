import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Index";
import Worker from "./pages/[worker]";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Worker />} />
    </Router>
  );
};

export default Routes;
