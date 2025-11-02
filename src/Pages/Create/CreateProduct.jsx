import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const navigate = useNavigate();
  const createProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData.entries());

    newProduct.created_at = new Date();
    newProduct.status = "pending";

    fetch("https://deal-craft-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "New product has created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.error(" Error:", err));
  };

  return (
    <section className="min-h-screen bg-base-100 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 md:p-10">
        {/* Back Button */}
        <p className="text-sm text-gray-500 mb-4 hover:text-primary cursor-pointer transition">
          ← Back To Products
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            A Product
          </span>
        </h2>

        {/* Form */}
        <form onSubmit={createProduct} className="space-y-5">
          {/* Title & Category */}
          <div className="grid md:grid-cols-2 gap-5">
            <label>
              Product Name
              <input
                name="title"
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label
              htmlFor="
            "
            >
              Select Category
              <select className="select select-bordered w-full" name="category">
                <option disabled selected>
                  Select a Category
                </option>
                <option>Electronics</option>
                <option>Vehicles</option>
                <option>Furniture</option>
                <option>Clothing</option>
              </select>
            </label>
          </div>
          {/* Price fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <label htmlFor="">
              Min Price
              <input
                name="price_min"
                type="number"
                step="0.1"
                placeholder="Min Price you want to Sale ($)"
                className="input input-bordered w-full"
              />
            </label>
            <label htmlFor="">
              Max Price
              <input
                type="price_max"
                step="0.1"
                placeholder="Max Price you want to Sale ($)"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Product Condition */}
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div className="flex items-center gap-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  className="radio checked:bg-primary"
                  defaultChecked
                />
                <span>Brand New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="condition" className="radio" />
                <span>Used</span>
              </label>
            </div>
            <label htmlFor="">
              Optional
              <input
                type="text"
                placeholder="e.g. 1 year 3 months"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Product Image */}
          Product Image
          <input
            name="image"
            type="url"
            placeholder="Your Product Image URL"
            className="input input-bordered w-full"
          />
          {/* Seller Info */}
          <div className="grid md:grid-cols-2 gap-5">
            <label htmlFor="">
              Optional
              <input
                type="text"
                placeholder="e.g. Artisan Roasters"
                className="input input-bordered w-full"
              />
            </label>
            <label htmlFor="">
              Seller Email
              <input
                name="email"
                type="email"
                placeholder="e.g. email@domain.com"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label htmlFor="">
              Sellar Number{" "}
              <input
                type="text"
                name="seller_contact"
                placeholder="e.g. +1-555-1234"
                className="input input-bordered w-full"
              />
            </label>
            <label htmlFor="">
              Sellar Image{" "}
              <input
                name="seller_image"
                type="url"
                placeholder="Seller Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Location */}
          <label htmlFor="">
            Sellar Location{" "}
            <input
              name="location"
              type="text"
              placeholder="City, Country"
              className="input input-bordered w-full"
            />
          </label>
          {/* Description */}
          <label htmlFor="">
            Product Description{" "}
            <textarea
              name="description"
              className="textarea textarea-bordered w-full mb-2"
              rows="4"
              placeholder="e.g. I bought this product 3 months ago..."
            ></textarea>
          </label>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full border-none text-white font-semibold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
          >
            Create A Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;
