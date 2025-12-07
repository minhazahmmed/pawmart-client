import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  // -------- GET SERVICE BY ID ---------
  useEffect(() => {
    axios.get(`https://pawmart-backend-10.vercel.app/services/${id}`).then((res) => {
      setService(res.data);
      setCategory(res.data.category);
      setPrice(res.data.price);
      setDate(res.data.date);
    });
  }, [id]);

  console.log(service);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition";

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
      createdAt: service?.createdAt,
    };
    console.log(formData);

    axios
      .put(`https://pawmart-backend-10.vercel.app/update/${id}`, formData)
      .then((res) => {
        navigate('/my-services')
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

 

  if (!service) {
    return (
      <div className="min-h-[300px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto p-8 rounded-2xl shadow-2xl border my-10 bg-white/70 backdrop-blur-md"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-center bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Update Services
      </h2>

      {/* Product / Pet Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Product / Pet Name</label>
        <input
          defaultValue={service?.name}
          type="text"
          name="name"
          className={inputClass}
          required
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Category</label>
        <select
          value={category}
          name="category"
          onChange={handleCategoryChange}
          className={inputClass}
          required
        >
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={category === "Pets"}
          className={`${inputClass} ${
            category === "Pets" ? "bg-gray-200" : ""
          }`}
          required
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Location</label>
        <input
          defaultValue={service?.location}
          type="text"
          name="location"
          className={inputClass}
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          defaultValue={service?.description}
          className={inputClass}
          name="description"
          rows="3"
          required
        ></textarea>
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Image URL</label>
        <input
          defaultValue={service?.image}
          type="text"
          name="image"
          className={inputClass}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          value={user?.email}
          type="email"
          name="email"
          readOnly
          className={inputClass}
          required
        />
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold">Date</label>
        <input
          type="date"
          name="date"
          defaultValue={date}
          className={inputClass}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateService;
