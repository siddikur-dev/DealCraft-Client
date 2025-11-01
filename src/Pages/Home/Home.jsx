import React from "react";
import { FaSearch } from "react-icons/fa";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
const productsAll = fetch("http://localhost:3000/latest-products").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="flex flex-col items-center text-center px-6 py-16 md:py-24 min-h-[40vh]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,230,253,1) 0%, rgba(224,248,237,1) 100%)",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
          Deal Your <span className="text-primary">Products</span> <br />
          In A <span className="text-primary">Smart</span> Way !
        </h1>
        <p className="max-w-2xl mt-4 text-gray-500">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex items-center w-full max-w-lg bg-white rounded-full shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="search For Products, Categories..."
            className="flex-grow px-5 py-3 text-sm focus:outline-none"
          />
          <button className="bg-primary p-4 text-white rounded-r-full">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="btn my-btn text-white">Watch All Products</button>
          <button className="btn btn-outline btn-secondary">
            Post a Product
          </button>
        </div>
      </header>
      <LatestProducts productsAll={productsAll}></LatestProducts>
    </div>
  );
};

export default Home;
