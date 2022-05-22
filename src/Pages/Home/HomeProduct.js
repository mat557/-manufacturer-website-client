import React from "react";

const HomeProduct = ({product}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={product.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Check and Order</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
