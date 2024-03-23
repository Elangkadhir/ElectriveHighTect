import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
  const [select, setSelect] = useState('Home');
  const navigate = useNavigate()  
  

  const handleClick = (name, path) => {
    setSelect(name);
  };

  return (
    <div className="flex bg-gray-300 w-full min-h-[80vh] py-10 gap-6 px-6">
      <div className="bg-blue-100 rounded-md w-[20%] p-4 shadow-xl">
        <div className="flex gap-2 font-bold flex-col p-3">
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Home" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Home", "")}
          >
            Home
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Clothes" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Clothes", "/clothes")}
          >
            Clothes
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Home_Access" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Home_Access", "/home_access")}
          >
            Home Accessories
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Inter" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Inter")}
          >
            Mobile{" "}
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Station" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Station")}
          >
            Stationery
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Fashion" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Fashion")}
          >
            Fashion
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Contact" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Contact")}
          >
            Contact Us
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "Exer" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("Exer")}
          >
            Exercise Fitness
          </span>
          <span
            className={`cursor-pointer rounded-lg p-4 ${
              select === "More" ? "bg-yellow-400" : "bg-blue-300"
            }`}
            onClick={() => handleClick("More")}
          >
            More Category
          </span>
        </div>
      </div>
      <div className="w-[80%] h-full overflow-y-auto">{props.children}</div>
    </div>
  );
}

export default SideBar;
