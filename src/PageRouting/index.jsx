import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BestSeller from "../Components/Pages/BestSeller";
import HomeAccess from "../Components/Pages/HomeAccess";
import Home from "../Components/Pages/Home";
import Clothes from "../Components/Pages/Clothes";

function PageRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index  element={<Home />} />
          <Route path='/best_seller' element={<BestSeller />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/home_access' element={<HomeAccess />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRouting;
