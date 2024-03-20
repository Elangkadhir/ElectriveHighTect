import React from "react";
import { useNavigate } from "react-router-dom";
import Layouts from "./Layouts/Layouts";


function Home() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

 

  return (
    <Layouts>
      <div className="w-full h-full  bg-gray-300 py-10">
        <div className="flex py-2 mx-8 gap-6 ">
          <div className="bg-white rounded-md p-4  shadow-lime-100">
            <div className="flex flex-col justify-between h-full p-3">
              <span className="cursor-pointer">Home</span>
              <span className="cursor-pointer">Clothes</span>
              <span className="cursor-pointer">Home Accessories</span>
              <span className="cursor-pointer">Integer Sit Amet</span>
              <span className="cursor-pointer">Stationery</span>
              <span className="cursor-pointer">Contact Us</span>
              <sapn className="cursor-pointer"> Nunc Commodo</sapn>
              <span className="cursor-pointer">Exercise Fitness</span>
              <span className="cursor-pointer">Nunc Commodo</span>
              <span className="cursor-pointer">More Category</span>
            </div>
          </div>

        </div>
      </div>
    </Layouts>
  );
}

export default Home;
