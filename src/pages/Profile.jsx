import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";


const Profile = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  const [profileName, setProfileName] = useState(user?.displayName || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        const updatedUser = {
          ...user,
          displayName: name,
          photoURL: photoURL,
        };
        setUser(updatedUser);
        setShowUpdateForm(false);
        toast.success("Profile updated successfully", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        toast.error("Profile update failed");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-violet-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        {/* User Info */}

        <div className="flex flex-col items-center">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "https://i.ibb.co.com/LXv7qnW8/blank-profile-picture-973460-1280.webp"
            }
            className="w-32 h-32 rounded-full shadow-lg mb-4"
          />

          <h2 className="text-2xl font-bold mb-1">{user?.displayName}</h2>
          <p className="text-gray-600 mb-4">{user?.email}</p>

          {/* Update Button */}
          <button
            onClick={() => setShowUpdateForm(!showUpdateForm)}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            {showUpdateForm ? "Close Form" : "Update Profile"}
          </button>
        </div>

        {/* Update Form */}
        {showUpdateForm && (
          <form onSubmit={handleUpdate} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                onChange={(e) => setProfileName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700">Profile Image URL</label>
              <input
                name="photoURL"
                type="text"
                defaultValue={user?.photoURL}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              disabled={profileName.trim().length === 0}
              className={`w-full text-white py-2 rounded-lg shadow transition 
    ${
      profileName.trim().length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700"
    }`}
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
