import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [order,setOrder] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/customOrder?email=${user.email}`,{
            method:'GET',
            headers :{
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                navigate('/')
            }
            else{
                return res.json();
            }
            
        })
        .then(data =>{
            setOrder(data);
        })
    },[user.email,navigate])


    const handleDelete = (id) =>{
        const url =`http://localhost:5000/order/${id}`;
        console.log(url);
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    window.location.reload(false);
                }
            });
    }
    


    return (
        <div>
            <p>My Orders</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Action</th>
                                <th>Payment</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                order?.map((o,index) => 
                                <tr key={o._id}>
                                    <th>{index + 1}</th>
                                    <td>{o.item}</td>
                                    <td>{o.email}</td>
                                    <td>{o.quantity}</td>
                                    <td>{o.quantity*o.perUnit}</td>
                                    <td><button onClick={()=>handleDelete(o._id)} className="btn btn-xs">Delete</button></td>
                                    <td><button className="btn btn-xs">Pay</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
    );
};

export default MyOrder;