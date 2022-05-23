import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckAndOrder = () => {
  const { idOftool } = useParams();
  const [singleData,setSingledata] = useState([]);

  useEffect(()=>{
    const url = `http://localhost:5000/tools/${idOftool}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setSingledata(data))
  },[])


  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={singleData.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleData.name}</h2>
        <p>{singleData.description}</p>
        <p>{singleData.quantity} {singleData.quantity > 1 ? 'pieces' : 'piece'} available</p>
        <p>Minimu order quantity : {singleData.minimumOrder}</p>
        <p>Per unit cost : {singleData.price} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckAndOrder;
