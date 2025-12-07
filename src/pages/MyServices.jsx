import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://pawmart-backend-10.vercel.app/services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://pawmart-backend-10.vercel.app/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filteredData = myServices.filter(
                (service) => service._id != id
              );
              console.log(filteredData);
              setMyServices(filteredData);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">My Services</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myServices.map((service) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.name}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <p>{service?.category}</p>
                </td>

                <td>{service?.price}</td>
                <td className="flex gap-3">
                  <button
                    onClick={() => handleDelete(service?._id)}
                    className="btn  btn-xs btn-error"
                  >
                    Delete
                  </button>

                  <Link to={`/update-service/${service?._id}`}>
                    {" "}
                    <button className="btn  btn-xs btn-primary">
                      Edit
                    </button>{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
