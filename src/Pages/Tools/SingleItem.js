import React from "react";

const SingleItem = ({tool,setOrder}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={tool.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>{tool.description}</p>
        <p>{tool.quantity} {tool.quantity > 1 ? 'pieces' : 'piece'} available</p>
        <p>Price :{tool.price}$</p>
        <p>Minimu order quantity : {tool.minimumOrder} pieces</p>
        <div className="card-actions justify-end">
          <label onClick={() => setOrder(tool)}  htmlFor="order-modal" className="btn btn-primary">Order</label>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
