import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const { registerWithEmailPassword, setUser, googleSignin } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photourl = e.target.photoURL.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    setPasswordError("");

    if (password.length < 6) {
      return setPasswordError("Password must be at least 6 characters long");
    }

    if (!uppercase.test(password)) {
      return setPasswordError(
        "Password must contain at least one uppercase letter (A-Z)"
      );
    }

    if (!lowercase.test(password)) {
      return setPasswordError(
        "Password must contain at least one lowercase letter (a-z)"
      );
    }

    registerWithEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            setUser(user);
            toast.success("Registration successful", {
              position: "bottom-right",
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Profile update failed", {
              position: "bottom-right",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "bottom-right",
        });
      });
  };

//   console.log(user);

  const handleGoogleSignup = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Registration successful", { position: "bottom-right" });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { position: "bottom-right" });
      });
  };

  return (
    <div className="hero min-h-screen px-4 my-9 md:my-12">
      <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 w-full max-w-md">
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-6 
                    bg-linear-to-r from-pink-500 to-purple-600 
                    text-transparent bg-clip-text text-center"
        >
          Register Now
        </h1>

        <div className="card bg-white/60 backdrop-blur-2xl w-full shadow-xl rounded-2xl border border-white/40">
          <div className="card-body space-y-3">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label text-[15px] font-semibold text-gray-700">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Name"
                required
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Email"
                required
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Photo URL
              </label>
              <input
                name="photoURL"
                type="text"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Photo URL"
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                  placeholder="Create Password"
                  required
                />

                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}

              <button
                type="submit"
                className="btn w-full mt-5 
                                bg-linear-to-r from-pink-500 to-purple-600 text-white 
                                rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300"
              >
                Register
              </button>

              <div className="divider text-[14px] text-gray-500">OR</div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="btn   rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                              transition-all duration-300"
              >
                <FcGoogle className="text-[20px]" /> Sign up with Google
              </button>

              {/* Login link */}
              <p className="text-center text-sm mt-4">
                Already have an account?
                <Link
                  to="/login"
                  className="text-purple-600 font-semibold hover:underline ml-1"
                >
                  Login
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

export default Register;
