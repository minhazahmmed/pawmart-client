import React, { useContext, useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successful", { position: "bottom-right" });
      })
      .catch((error) => {
        toast.error("Logout failed");
        console.log(error);
      });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className=" bg-base-100 shadow-sm z-50 sticky top-0">
      <div className="navbar max-w-[1300px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3  w-52 p-2 shadow"
              onClick={() => document.activeElement.blur()}
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link to={"/add-services"}>Add Services</Link>
                  </li>
                  <li>
                    <Link to={"/my-services"}>My Services</Link>
                  </li>
                  <li>
                    <Link to={"/my-orders"}>My Orders</Link>
                  </li>
                  <li>
                    <Link to={"/profile"}>My Profile</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link
            to={"/"}
            className="font-semibold text-xl md:text-2xl text-purple-600 flex items-center gap-1"
          >
            <FaPaw className="text-xl md:text-2xl" />
            PawMart
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold text-[16px]">
            <li>
              <Link className="cursor-pointer" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to={"/services"}>
                Services
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link className="cursor-pointer" to={"/add-services"}>
                    Add Services
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer" to={"/my-services"}>
                    My Services
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer" to={"/my-orders"}>
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer" to={"/profile"}>
                    My Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {/* Theme toggle */}
          <label className="flex cursor-pointer gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {user ? (
            <button
              onClick={handleSignout}
              className="btn bg-linear-to-r from-purple-600 to-pink-400 text-white font-bold hover:scale-105 transform transition duration-300 shadow-sm px-5 md:px-7 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-linear-to-r from-purple-600 to-pink-400 text-white font-bold hover:scale-105 transform transition duration-300 shadow-sm px-5 md:px-7 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
