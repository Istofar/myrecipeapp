import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <AnimatePresence exitBeforeEnter>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </AnimatePresence>
    </Routes>
  );
}

export default Pages;
