import React, { useContext, useState } from "react";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import axios from "axios"; 
import Swal from "sweetalert2";

const AddService = () => {
  const [category, setCategory] = useState("Pets");
  const [price, setPrice] = useState(0);
  const { user } = useContext(AuthContext);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === "Pets") setPrice(0);
  };

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition";

  const handleSubmit = (e) => {
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
  };
  console.log(formData);

  axios.post('https://pawmart-backend-10.vercel.app/services', formData)
  .then(res => {
    console.log(res);
        if(res.data.acknowledged==true){
      Swal.fire({
  title: "Service is created successfully!",
  icon: "success",
  draggable: true

});
form.reset();
    }
    else{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  
});
    }
    
  })
  

  };

  



  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 rounded-2xl shadow-2xl border my-10 bg-white/70 backdrop-blur-md"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-center bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Add Services
      </h2>

      {/* Product / Pet Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Product / Pet Name</label>
        <input
          type="text"
          name="name"
          className={inputClass}
          placeholder="Golden Retriever Puppy"
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
          type="text"
          name="location"
          className={inputClass}
          placeholder="Dhaka"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          className={inputClass}
          name="description"
          rows="3"
          placeholder="Friendly 2-month-old puppy available for adoption."
          required
        ></textarea>
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Image URL</label>
        <input
          type="text"
          name="image"
          className={inputClass}
          placeholder="https://example.com/golden.jpg"
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
        <input type="date" name="date" className={inputClass} required />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddService;
