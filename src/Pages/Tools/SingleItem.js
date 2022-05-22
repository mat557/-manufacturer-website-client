import React from "react";

const SingleItem = ({tool}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={tool.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>{tool.description}</p>
        <p>Stock :{tool.quantity} pieces</p>
        <p>Price :{tool.price}$</p>
        <p>Minimum Order:{tool.minimumOrder} pieces</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
