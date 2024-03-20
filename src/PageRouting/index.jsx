import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import BestSeller from "../Components/Pages/BestSeller";

function PageRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/best_seller' element={<BestSeller />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRouting;
