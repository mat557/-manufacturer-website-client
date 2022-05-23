import React from "react";

const ModalForOrder = ({order}) => {
    // console.log(order)
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Place order for : {order.name}</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="order-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForOrder;
