import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AdminCheckOrder = () => {
    const [orders,setOrders] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/getorder`)
        .then(res =>res.json())
        .then(result => {
            // console.log(result)
            setOrders(result)
        })
    },[])

    const deleteOrder = (order) =>{
        
        fetch(`http://localhost:5000/delete/${order._id}`,{
            method : 'DELETE',
            headers:{
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(btnRes => {
            // console.log('delete',btnRes)
            if(btnRes.acknowledged){
                toast.success('Delete successfull')
            }
        })
    }


    return (
        <div>
            <p>Total Order :{orders?.length}</p>

            <div className="overflow-x-auto">
                    <table className="table w-full">
                        
                        <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Action</th>
                            <th>Delivery</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map((order,index) => 
                                <tr key={order._id}>
                                    <th>{index}</th>
                                    <td>{order.email}</td>
                                    <td>{order.item}</td>
                                    <td><button onClick={() =>deleteOrder(order)} className="btn btn-sm">Delete</button></td>
                                    <td><button className="btn btn-sm">Small</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
            </div>



        </div>
    );
};

export default AdminCheckOrder;