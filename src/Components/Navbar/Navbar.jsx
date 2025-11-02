import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { BlinkBlur } from "react-loading-indicators";
const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  if (loading) {
    return (
      <div className="flex mx-auto justify-center mb-52">
        <BlinkBlur color="#632EE3" size="small" text="" textColor="" />
      </div>
    );
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Out Successful",
          showConfirmButton: false,
          timer: 1200,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="container mx-auto">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold">
            Deal<span className="text-primary">Craft</span>
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium ">
            <NavLink to={"/"} className="hover:text-primary cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to={"/all-products"}
              className="hover:text-primary cursor-pointer"
            >
              All Products
            </NavLink>
            <NavLink
              to={"/my-products"}
              className="hover:text-primary cursor-pointer"
            >
              My Products
            </NavLink>
            <NavLink
              to={"/my-bid"}
              className="hover:text-primary cursor-pointer"
            >
              My Bids
            </NavLink>
            <NavLink
              to={"/create-product"}
              className="hover:text-primary cursor-pointer"
            >
              Create Product
            </NavLink>
          </ul>

          {/* Profile & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to={"/profile"}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary"
            >
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                }
                alt="user"
                className="w-full h-full object-cover"
              />
            </Link>
            {user ? (
              <button onClick={handleSignOut} className="btn my-btn">
                LogOut
              </button>
            ) : (
              <>
                <Link to="/register" className="btn my-btn text-white">
                  Register
                </Link>
                <Link to="/login" className="btn my-btn btn-outline text-white">
                  Login
                </Link>
              </>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-primary"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 font-medium bg-white border-t border-gray-100">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">All Products</li>
            <li className="hover:text-primary cursor-pointer">My Products</li>
            <li className="hover:text-primary cursor-pointer">My Bids</li>
            <li className="hover:text-primary cursor-pointer">
              Create Product
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
