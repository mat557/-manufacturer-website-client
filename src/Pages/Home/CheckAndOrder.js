import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalForTool from "../Shared/ModalForTool";

const CheckAndOrder = () => {
  const { idOftool } = useParams();
  const [singleData,setSingledata] = useState([]);
  const [singleItem,setSingleItem] = useState(null);

  useEffect(()=>{
    const url = `https://safe-bastion-74544.herokuapp.com/tools/${idOftool}`;
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
              <label htmlFor="single-order" onClick={()=>setSingleItem(singleData)}  className="btn btn-primary">Order</label>
            </div>
        </div>
        {singleItem && <ModalForTool singleItem={singleItem} setSingleItem={setSingleItem}></ModalForTool>}
    </div>
  );
};

export default CheckAndOrder;
