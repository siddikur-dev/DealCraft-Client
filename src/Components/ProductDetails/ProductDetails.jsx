import React from "react";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    title,
    image,
    description,
    category,
    price_min,
    price_max,
    condition,
    usage,
    email,
    seller_name,
    seller_image,
    seller_contact,
    location,
    created_at,
    status,
  } = product;

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/products"
        className="text-gray-600 flex items-center gap-2 mb-4 hover:text-primary transition-colors"
      >
        ← Back To Products
      </Link>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {title.split(" ").slice(0, 2).join(" ")}{" "}
        <span className="text-primary">
          {title.split(" ").slice(2).join(" ")}
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <img
              src={image}
              alt={title}
              className="w-full h-72 object-cover rounded-lg mb-4"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/600x400?text=No+Image")
              }
            />

            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-2">
                Product Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <p>
                  <span className="font-semibold text-gray-700">
                    Condition:
                  </span>{" "}
                  <span className="text-green-600 capitalize">{condition}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Usage:</span>{" "}
                  <span className="text-purple-600">{usage}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Category:</span>{" "}
                  {category}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Price and Product Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-lg text-gray-700">
                Price starts from
              </h4>
              <span className="text-xl font-bold text-green-600">
                ৳{price_min} - {price_max}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-semibold">Product ID:</span> {_id}
              </p>
              <p>
                <span className="font-semibold">Posted:</span>{" "}
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-semibold text-lg mb-3">Seller Information</h4>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={seller_image}
                alt={seller_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{seller_name}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Contact:</span> {seller_contact}
            </p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`badge ${
                  status === "pending"
                    ? "badge-warning"
                    : status === "on sale"
                    ? "badge-success"
                    : "badge-neutral"
                }`}
              >
                {status}
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none mt-2">
            I Want Buy This Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
