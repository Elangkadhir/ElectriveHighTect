import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function Layouts({ children }) {
  return (
    <div className="overflow-x-hidden w-screen h-screen">
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div><Footer /></div>
    </div>
  );
}

export default Layouts;
