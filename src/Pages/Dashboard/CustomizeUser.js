import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'

const CustomizeUser = () => {
    const [user] = useAuthState(auth);



    const { register, handleSubmit, formState: { errors }} = useForm();
    
    
    const onSubmit = data =>{
         const image = data.image[0];
         const formData = new FormData();
         formData.append('image',image)
        

        const API_KEY = '4957c3c668ded462db1fb1002c4535e6';
        const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

        fetch(url,{
            method : 'POST',
            body : formData,
        })
        .then(res => res.json())
        .then(result => {
            // console.log('imgbb',result)
            if(result.success){
                const img = result.data.url;
                const dataOfuser = {
                    user : user?.displayName,
                    email : user?.email,
                    phone: data.phone,
                    city: data.city,
                    education: data.education,
                    img: img
                }
                // console.log(dataOfuser)

                fetch(`http://localhost:5000/user/${user.email}`,{
                        method:"PUT",
                        headers:{
                        'Content-Type': 'application/json'
                     },
                    body : JSON.stringify(dataOfuser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success('Profile Updated')
                    }
                })
            }
        })
    };






    return (
        <div>
            <p className="text-teal-900">Want to Update Your Profile?</p>
            <form className='flex flex-col ml-2' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("phone",{ required: true, message : 'This field is required'})} placeholder="phone number"          className="input input-ghost w-full max-w-xs my-2" />
                {errors.name?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("city",{ required: true, message : 'This field is required'})} placeholder="Enter your city"  className="input input-ghost w-full max-w-xs my-2" />
                {errors.quantity?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("education",{ required: true, message : 'This field is required'})} placeholder="your education"       className="input input-ghost w-full max-w-xs my-2" />
                {errors.price?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                
                <input type="file" {...register("image",{ required: true, message : 'This field is required'})} placeholder="product image"        className="input input-ghost w-full max-w-xs my-2" />
                {errors.image?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input value="update"  className="btn btn-outline w-75 mr-auto" type="submit" />
            </form>
        </div>
    );
};

export default CustomizeUser;