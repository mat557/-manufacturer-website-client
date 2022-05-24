import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [order,setOrder] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/customOrder?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setOrder(data);
        })
    },[user.email])



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
                                order.map((o,index) => 
                                <tr key={o._id}>
                                    <th>{index + 1}</th>
                                    <td>{o.item}</td>
                                    <td>{o.email}</td>
                                    <td>{o.quantity}</td>
                                    <td>{o.quantity*o.perUnit}</td>
                                    <td><button className="btn btn-xs">Delete</button></td>
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