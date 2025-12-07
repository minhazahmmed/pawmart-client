import React, { useEffect, useState } from "react";
import AllServices from "../component/AllServices";

const Services = () => {
     const [category, setCategory] = useState('');
     const [services, setServices] = useState([]);
    useEffect(()=>{
            fetch(`https://pawmart-backend-10.vercel.app/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
            console.log(category)
    }, [category])
   
  return (
    <div className="max-w-[1200px] mx-auto">
      <select onChange={(e)=> setCategory(e.target.value)} defaultValue="Choose Category" className="select  mt-10">
        <option disabled={true}>Choose Category</option>
        <option value="">All</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>

      <title>Services</title>
      <AllServices services={services} />
    </div>
  );
};

export default Services;
