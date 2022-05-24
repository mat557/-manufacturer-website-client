import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProduct = ({product}) => {
  const navigate = useNavigate();

  const handleToolsDetails = (id) =>{
    navigate(`/tool/${id}`)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
      <figure>
        <img src={product.img} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleToolsDetails(product._id)} className="btn btn-primary">Check and Order</button>
          </div>
      </div>
    </div>
  );
};

export default HomeProduct;
