import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Admin = () => {

    
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
            console.log('imgbb',result)
            if(result.success){
                console.log('image',result.data.url)
                const img = result.data.url;
                const tool = {
                    name : data.name,
                    quantity : data.quantity,
                    price : data.price,
                    minimumOrder: data.minimumOrder,
                    description: data.description,
                    img :img
                }

                fetch(`http://localhost:5000/newTool`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(tool)
                })
                .then(res => res.json())
                .then(posted =>{
                    console.log(posted)
                    toast.success('You added a new tool')
                })
            }
        })
    };


    return (
        <div>
            <p>Add Services</p>

            <form className='flex flex-col ml-2' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name",{ required: true, message : 'This field is required'})} placeholder="product name"          className="input input-ghost w-full max-w-xs my-2" />
                {errors.name?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("quantity",{ required: true, message : 'This field is required'})} placeholder="product quantity"  className="input input-ghost w-full max-w-xs my-2" />
                {errors.quantity?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("price",{ required: true, message : 'This field is required'})} placeholder="per unit price"       className="input input-ghost w-full max-w-xs my-2" />
                {errors.price?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("minimumOrder",{ required: true, message : 'This field is required'})} placeholder="minimum order" className="input input-ghost w-full max-w-xs my-2" />
                {errors.minimumOrder?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="text" {...register("description",{ required: true, message : 'This field is required'})} placeholder="description"    className="input input-ghost w-full max-w-xs my-2" />
                {errors.description?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input type="file" {...register("image",{ required: true, message : 'This field is required'})} placeholder="product image"        className="input input-ghost w-full max-w-xs my-2" />
                {errors.image?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                
                <input  className="btn btn-outline w-75 mr-auto" type="submit" />
            </form>
        </div>
    );
};

export default Admin;


//              name : event.target.name.value,
//             quantity : event.target.quantity.value,
//             price : event.target.price.value,
//             minimumOrder: event.target.minimumOrder.value,
//             description: event.target.description.value,
//             file : event.target.img.value