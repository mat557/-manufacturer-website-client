import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CustomizeUser = () => {
    const [user] = useAuthState(auth);

    const handleOrder = (event) =>{
    
        event.preventDefault();
                      const updatedInfo = {
                        buyer : user.displayName,
                        email : user.email,
                        phone: event.target.phone.value,
                        city: event.target.phone.value,
                        education: event.target.education.value
                    }
                    
                    console.log(updatedInfo);
                    // fetch(`http://localhost:5000/order`,{
                    //   method : 'POST',
                    //   headers :{
                    //     'content-type': 'application/json'
                    //   },
                    //   body : JSON.stringify(orders)
                    // })
                    // .then(res => res.json())
                    // .then(data =>{
                    //   console.log(data);
                    //   toast.success('Your order has been completed')
                    // //   setOrder(null);
                    // })
            
      }


    return (
        <div>
            <p className='text-center text-green-500'>Want to Update Your Data?</p>
            <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 mt-2 justify-items-center">
                <input type="text" readOnly value={user.displayName}  className="input input-bordered w-full max-w-xs" />
                <input type="email" readOnly value={user.email} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="phone" placeholder="enter your phone" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="city" placeholder="enter your city name." className="input input-bordered w-full max-w-xs" />
                <input type="text" name="education" placeholder="your education" className="input input-bordered w-full max-w-xs" />
                <input type="file" name="photo" placeholder="your photo" className="input input-bordered w-full max-w-xs" />
                <input  type="submit" value="Update" className="input-bordered btn w-75 max-w-auto" />
          </form>
        </div>
    );
};

export default CustomizeUser;