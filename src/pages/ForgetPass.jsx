import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const ForgetPass = () => {

    const {email} = useParams();
   const handleSubmit = (e) => {
        e.preventDefault();
        const formEmail = e.target. email.value;

        sendPasswordResetEmail(auth, formEmail)
  .then(() => {
    window.open("https://mail.google.com/mail/u/0/")
  })
  .catch((error) => {
     toast.error(error.message, { position: "bottom-right" });
  });
   }



  return (
    <div className="hero min-h-screen  px-4  md:my-5">
      <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 w-full max-w-md">
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-6 
                    bg-linear-to-r from-purple-600 to-pink-500 
                    text-transparent bg-clip-text text-center"
        >
          Reset Password
        </h1>

        <div className="card bg-white/60 backdrop-blur-2xl w-full shadow-xl rounded-2xl border border-white/40">
          <div className="card-body space-y-3">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label text-[15px] font-semibold text-gray-700">
                Email
              </label>
              <input
               defaultValue={email}
                type="email"
                name="email"
                className="input input-bordered bg-white/70 border-purple-200 
                                  focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Email"
                required
              />

              
              <button
                
                type="submit"
                className="btn w-full mt-5 
                                bg-linear-to-r from-purple-600 to-pink-500 text-white 
                                rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ForgetPass;
