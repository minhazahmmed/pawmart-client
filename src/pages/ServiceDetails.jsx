import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://pawmart-backend-10.vercel.app/services/${id}`)
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);


  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const note = form.note.value;

    const formData = {
      productID: id,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phone,
      note,
      date: new Date(),
    };

    // Send order to backend
    axios
      .post("https://pawmart-backend-10.vercel.app/orders", formData)
      .then((res) => {
        console.log("Order saved:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading)
    return (
      <div className="min-h-[300px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-3xl shadow-xl">
        <img src={service.image} className="w-full rounded-xl" />

        <h1 className="text-3xl font-bold mt-4">{service.name}</h1>
        <p className="mt-3 text-gray-700">{service.description}</p>
        <p className="mt-3 font-semibold">Category: {service.category}</p>
        <p className="mt-1 font-semibold">Price: {service.price}</p>

        <button
          className="btn btn-primary mt-5"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Adapt/Order
        </button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>

    <form
      onSubmit={handleOrder}
      className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
    >
      {/* Legend with gradient text */}
      <legend className="fieldset-legend text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500">
        Order details
      </legend>

      <label className="label">Product Name</label>
      <input
        name="productName"
        readOnly
        defaultValue={service?.name}
        type="text"
        className="input"
      />

      <label className="label">Buyer Name</label>
      <input
        name="buyerName"
        defaultValue={user?.displayName}
        type="text"
        className="input"
      />

      <label className="label">Buyer Email</label>
      <input
        name="buyerEmail"
        readOnly
        defaultValue={user?.email}
        type="email"
        className="input"
      />

      <label className="label">Quantity</label>
      <input
        required
        name="quantity"
        type="number"
        className="input"
      />

      <label className="label">Price</label>
      <input
        name="price"
        readOnly
        defaultValue={service?.price}
        type="number"
        className="input"
      />

      <label className="label">Address</label>
      <input
        required
        name="address"
        type="text"
        className="input"
      />

      <label className="label">Phone</label>
      <input
        required
        name="phone"
        type="text"
        className="input"
      />

      <label className="label">Additional Note</label>
      <textarea
        name="note"
        className="textarea"
      />

      <button className="btn btn-primary mt-3" type="submit">
        Order
      </button>
    </form>
  </div>
</dialog>



      </div>
    </div>
  );
};

export default ServiceDetails;
