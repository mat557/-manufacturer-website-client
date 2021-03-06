import React from "react";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";

const ModalForOrder = ({order,setOrder}) => {
  const [user] = useAuthState(auth);
  
  const handleOrder = (event) =>{
    event.preventDefault();
    if(user){
              const unit = event.target.productAmount.value;
              if(unit < order.minimumOrder || unit > order.quantity){
                toast.error(`You cannot order more then ${order.quantity} or less then ${order.minimumOrder} units`);
              }
              else{
                const orders = {
                  item : order.name,
                  buyer : user?.displayName,
                  email : user?.email,
                  phone: event.target.phone.value,
                  perUnit: order.price,
                  quantity: unit
              }

              fetch(`https://safe-bastion-74544.herokuapp.com/order`,{
                method : 'POST',
                headers :{
                  'content-type': 'application/json'
                },
                body : JSON.stringify(orders)
              })
              .then(res => res.json())
              .then(data =>{
                if(data.acknowledged){
                  toast.success('Your order has been completed')
                  setOrder(null);
                }
              })
        }
    }
    else{
      toast.error('You need to loog in to place order');
    }
          
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
                <input type="text" readOnly value={user?.displayName}  className="input input-bordered w-full max-w-xs" />
                <input type="email" readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="phone" placeholder="enter your phone" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="productAmount" placeholder="enter the amount of prod." className="input input-bordered w-full max-w-xs" />
                <input  type="submit" value="Order Now" className="input-bordered btn w-11/12 max-w-auto" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ModalForOrder;
