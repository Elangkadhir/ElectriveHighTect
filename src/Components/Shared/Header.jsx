import React from "react";
import HeaderImage from "../../Assets/electrive-logo-1608791909.jpg";

function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-slate-200 border border-b-2">
        <div className="py-2 mx-8 flex justify-between w-full">
          <div className="w-[60%]">
            <span>Get 30% Off On Selected Items</span>
          </div>
          <div className="flex justify-evenly w-[40%]">
            <select className="bg-transparent w-[70px]" id="languages">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
            <select className="bg-transparent" id="currencies">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            <span>Compare</span>
            <span>Wishlist</span>
          </div>
        </div>
      </div>
      <div className="py-2 mx-8 my-4 flex justify-between gap-4 items-center">
        <div className="w-1/4">
          <img src={HeaderImage} alt="headerImage" />
        </div>
        <div className="flex border w-3/5 border-[#fc0] h-11  rounded-full pl-4">
          <select id="categories" className="w-1/5">
            <option value="all" selected>
              All Categories
            </option>
            <option value="home">Home</option>
            <option value="clothes">Clothes</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
            <option value="stationary">Stationary</option>
            <option value="home_accessories">Home Accessories</option>
            <option value="art">Art</option>
          </select>
          <input
            type="text"
            placeholder="search here..."
            className="outline-none px-2 w-3/5"
          />
          <button className="bg-[#fc0] rounded-e-full w-1/5  p-2">
            Search
          </button>
        </div>
        <div className="flex gap-4 justify-end w-1/2">
          <div>P</div>
          <div>My Account</div>
          <div> 0</div>
          <div>$0.00</div>
        </div>
      </div>
      <div className="bg-[#f3283d] w-full">
        <div className="py-2 mx-8 font-semibold text-white flex justify-between items-center">
          <span className="bg-[#fc0] p-2 px-8 rounded-md text-black">ALL CATEGORIES</span>
          <sapn>BESTSELLER </sapn>
          <span>LATEST</span>
          <span>SPECIAL</span>
          <span>CONTACT US </span>
          <span>SITEMAP</span>
          <span>STORES</span>
          <sapn className="bg-[#2d2d2d] p-2 px-8 rounded-md">SPECIAL OFFERS!</sapn>
        </div>
      </div>
    </div>
  );
}

export default Header;
