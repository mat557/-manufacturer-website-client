import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3hrnJjOZbm6hzBHdw5iX5GnQeRTyFDsN7kvRTNZJJpyL9MZRbsrTaQqERqYELMp8DSEUvz87pJxJnmL84DbmL600pXyqC9ab');




const Payment = () => {
    const {id} = useParams();
    const [item,setItem] = useState([]);
    const url = `http://localhost:5000/payment/${id}`;
    

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setItem(data)
        })
    },[url])

    // console.log(item)
    const amount = (item.quantity)*(item.perUnit);
    console.log(amount);

    return (
        <div>
                <div className="card w-50 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Hi,{item.buyer}</p>
                        <h2 className="card-title">Payfor :{item.item}</h2>
                        <p>You have ordered {item.quantity} peices</p>
                        <p>Please Pay : ${amount}</p>
                        
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50  max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={amount}></CheckoutForm>
                    </Elements>
                        
                    </div>
                </div>
            </div>
    );
};

export default Payment;