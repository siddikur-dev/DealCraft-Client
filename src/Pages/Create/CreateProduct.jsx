import React from "react";

const CreateProduct = () => {
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
        <form className="space-y-5">
          {/* Title & Category */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="input input-bordered w-full"
              required
            />
            <select className="select select-bordered w-full">
              <option disabled selected>
                Select a Category
              </option>
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Furniture</option>
              <option>Clothing</option>
            </select>
          </div>

          {/* Price fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="number"
              step="0.1"
              placeholder="Min Price you want to Sale ($)"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              step="0.1"
              placeholder="Max Price you want to Sale ($)"
              className="input input-bordered w-full"
            />
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

            <input
              type="text"
              placeholder="e.g. 1 year 3 months"
              className="input input-bordered w-full"
            />
          </div>

          {/* Product Image */}
          <input
            type="url"
            placeholder="Your Product Image URL"
            className="input input-bordered w-full"
          />

          {/* Seller Info */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="e.g. Artisan Roasters"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="e.g. email@domain.com"
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="e.g. +1-555-1234"
              className="input input-bordered w-full"
            />
            <input
              type="url"
              placeholder="Seller Image URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Location */}
          <input
            type="text"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />

          {/* Description */}
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="e.g. I bought this product 3 months ago..."
          ></textarea>

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
