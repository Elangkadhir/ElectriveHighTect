import React from "react";

function Footer() {
  return (
    <div className="mb-0 h-full">
      <div className="mx-20 text-center mt-4 ">
        <div className="bg-slate-200 shadow-slate-50 rounded-t-lg p-4 py-8 flex flex-col gap-8">
          <div className="text-xl font-bold">SIGN UP TO NEWSLETTER</div>
          <div className="font-normal text-[#999]">
            Make Sure That You Never Miss Our Interesting News And Exclusive
            Promotion. No Spam, Ever!
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Your email address"
              className="h-11 px-2 w-[75%] outline-none"
            />
            <button className="h-11 bg-[#f3283d] rounded-e-md text-white px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-2 mx-8 mt-10 justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-bold"> STORE INFORMATION</span>
          <ul className="flex flex-col gap-2">
            <li>Electrive Store </li>
            <li>United States </li>
            <li>123456789</li>
            <li> 0261-12345</li>
            <li>demo@demo.com</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold"> YOUR ACCOUNT</span>
          <ul className="flex flex-col gap-2">
            <li>Personal info </li>
            <li>Orders </li>
            <li>Credit slips</li>
            <li>Addresses</li>
            <li></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold"> PRODUCTS</span>
          <ul className="flex flex-col gap-2">
            <li>Prices drop </li>
            <li>New products </li>
            <li>Best sales </li>
            <li>Contact us </li>
            <li>Sitemap Stores</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold"> OUR COMPANY</span>
          <ul className="flex flex-col gap-2">
            <li>Delivery</li>
            <li> Legal Notice </li>
            <li>Terms and conditions of use </li>
            <li>About us</li>
            <li> Secure payment</li>
          </ul>
        </div>
      </div>
      <div className="py-2 mx-8 my-10 text-[#333]">
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <span>Fashion</span> | <span>Clothes</span>| <span>Jeans</span>|
          <span>Trouser</span> |<span>T-Shirts</span> |<span>Watch</span>|
          <span>Table</span> |<span>Lamp</span> |<span>Jewellery</span>|
          <span>Ethnic</span>|
          <sapn>Wear</sapn>| <span>Lingerie</span>|
          <span>Dresses And Skirts</span>| <span>Hair Care</span>|
          <span>Skin Care</span>| <span>Hair Dryer</span>| <span>Hand Bag</span>|
          <span>Clutches</span>| <span>Casual Shoes</span>|
          <span>Beauty And Grooming </span>|
          <span>Sunglasses </span>
        </div>
        <div className="text-center mt-10">© 2024 - Ecommerce software by PrestaShop™</div>
      </div>
    </div>
  );
}

export default Footer;
