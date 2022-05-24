import React from "react";
import { useForm } from "react-hook-form";

const ModalForOrder = ({order,setOrder}) => {
    
  const handleOrder = (event) =>{
    event.preventDefault();

    const orderName = order.name;
    const name = event.target.name.value;
    // const name = event.target.name.value;
    // const name = event.target.name.value;
    // const name = event.target.name.value;
    console.log(name,orderName)

    setOrder(null);
  }

    



  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Place order for : {order.name}</h3>
          
          <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 mt-2 justify-items-center">
                <input type="text" readOnly value={order.name} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="name" placeholder="enter your name" className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" placeholder="enter your email" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="enter your phone" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="productAmount" placeholder="enter the amount of prod." className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Order Now" className="input-bordered btn w-11/12 max-w-auto" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ModalForOrder;
