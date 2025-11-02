import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product._id}
      className="bg-base-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <figure className="h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </figure>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between h-44">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>
          <span className="text-xl font-bold text-primary">
            {product.price_min} - {product.price_max}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/products/${product._id}`}
            className="btn btn-outline btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
