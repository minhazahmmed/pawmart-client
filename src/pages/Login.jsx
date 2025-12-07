import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { loginWithEmailPassword, setUser,  googleSignin } =
    useContext(AuthContext);
  const location = useLocation();
//    console.log(location);

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
        toast.success("Login successful", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        toast.error("Invalid credential", {
          position: "bottom-right",
        });
        console.log(error);
      });
  };

//   console.log(user);

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        toast.error("Login Failed", {
          position: "bottom-right",
        });
        console.log(error);
      });
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="hero min-h-screen  px-4 my-9 md:my-12">
      <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 w-full max-w-md">
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-6 
                    bg-linear-to-r from-purple-600 to-pink-500 
                    text-transparent bg-clip-text text-center"
        >
          Login Now
        </h1>

        <div className="card bg-white/60 backdrop-blur-2xl w-full shadow-xl rounded-2xl border border-white/40">
          <div className="card-body space-y-3">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label text-[15px] font-semibold text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Email"
                required
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                  placeholder="Enter Password"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="mt-2 text-right">
                <button
                  onClick={handleForget}
                  className="link link-hover text-purple-600 text-sm"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="btn w-full mt-5 
                                bg-linear-to-r from-purple-600 to-pink-500 text-white 
                                rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300"
              >
                Login
              </button>

              <div className="divider text-[14px] text-gray-500">OR</div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn   rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300"
              >
                <FcGoogle className="text-[20px]" /> Sign in with Google
              </button>

              {/* Register link */}
              <p className="text-center text-sm mt-4">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-purple-600 font-semibold hover:underline ml-1"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
