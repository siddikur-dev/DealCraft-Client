import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyBid = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/bids/?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      })
      .catch((error) => console.log("client side", error));
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#632EE3",
      cancelButtonColor: "#632EE3",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your bids has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            const remainingBids = bids.filter((bid) => bid._id !== _id);
            setBids(remainingBids);
          });
      }
    });
  };
  return (
    <section className="mt-12 container mx-auto px-6">
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
                    <button
                      onClick={() => handleDelete(bid?._id)}
                      className="btn btn-sm text-red-500 border border-red-400 bg-transparent hover:bg-red-100"
                    >
                      Delete Bid
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
  );
};

export default MyBid;
