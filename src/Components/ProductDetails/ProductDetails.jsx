import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const bidRef = useRef();
  const [bids, setBids] = useState([]);
  const { user, loading } = use(AuthContext);
  if (loading) {
    <p>Loading...</p>;
  }
  const handleBidModal = () => {
    bidRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBid = {
      name: form.name.value,
      email: form.email.value,
      bidAmount: form.bid.value,
      productId: product._id,
      image: user.photoURL,
    };
    fetch(`http://localhost:3000/bids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your bids has been placed",
            showConfirmButton: false,
            timer: 1000,
          });
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          const sortedProductsBids = newBids.sort(
            (a, b) => b.price_min - a.price_min
          );
          setBids(sortedProductsBids);
        }
      });

    console.log("Bid submitted:", newBid);
    form.reset();
    bidRef.current.close();
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${product?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [product?._id]);

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
      {/* Product Layout */}
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
          <button
            onClick={handleBidModal}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none mt-2"
          >
            I Want Buy This Product
          </button>

          {/* MODAL */}
          <dialog ref={bidRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-base-100">
              <h3 className="font-bold text-lg text-center mb-4 text-primary">
                Submit Your Bid
              </h3>

              <form onSubmit={handleBidSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Bid Amount
                  </label>
                  <input
                    type="number"
                    name="bid"
                    placeholder="Enter your bid amount"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="modal-action flex justify-between">
                  <button
                    type="button"
                    onClick={() => bidRef.current.close()}
                    className="btn btn-secondary btn-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
                  >
                    Submit Bid
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      {/* show bids*/}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Bids For This Product:{" "}
          <span className="text-[#9F62F2]">{bids?.length}</span>
        </h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="table w-full">
            <thead className="bg-base-200 text-gray-700">
              <tr>
                <th>SL</th>
                <th>Product</th>
                <th>Bidder</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bids.length > 0 ? (
                bids.map((bid, index) => (
                  <tr key={bid?._id || index} className="hover">
                    <td className="font-medium">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.productImage}
                          alt={bid.productName}
                          className="w-10 h-10 rounded-md object-cover bg-base-200"
                        />
                        <p className="font-semibold text-gray-800 text-sm">
                          {bid.productName}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.image}
                          alt={bid.name}
                          className="w-10 h-10 rounded-full object-cover bg-base-200"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {bid.name}
                          </p>
                          <p className="text-xs text-gray-500">{bid.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold text-gray-800">
                      ৳{bid.bidAmount}
                    </td>
                    <td className="flex items-center gap-2">
                      <button className="btn btn-sm text-green-600 border border-green-500 bg-transparent hover:bg-green-100">
                        Accept Offer
                      </button>
                      <button className="btn btn-sm text-red-500 border border-red-400 bg-transparent hover:bg-red-100">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No bids yet for this product.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
