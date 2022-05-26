import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CustomizeUser = () => {
    const [user] = useAuthState(auth);

    const handleOrder = (event) =>{
        event.preventDefault();
            const updatedInfo = {
                user : user.displayName,
                email : user.email,
                phone: event.target.phone.value,
                city: event.target.city.value,
                education: event.target.education.value,
                img: event.target.photo.value
            }

        fetch(`https://safe-bastion-74544.herokuapp.com/user/:${user.email}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(updatedInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Profile Updated')
            }
        })
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