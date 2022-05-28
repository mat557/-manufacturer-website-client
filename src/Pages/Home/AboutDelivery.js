import React from 'react';
import pic from '../../Photos/planeForHome.jpg';

const AboutDelivery = () => {
    return (
        <div className='my-28'>
            <div className='my-12'>
                <p className='text-center text-4xl'>Exclusive Feature For Overseas Consumers</p>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <figure><img src={pic}  className="max-w-sm rounded-lg shadow-2xl" alt="Album"/></figure>
                    <div className='flex flex-col pr-4'>
                        <div className="card-body bg-gray-400 rounded-2xl my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg></span>Overseas Delivery</h2>
                            <p>Our product has reached over 70 </p>
                        </div>
                        <div className="card-body bg-gray-400  rounded-2xl  my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg></span>Easy Payment</h2>
                            <p>Select the product and click the payment.You are done!</p>
                        </div>
                        <div className="card-body bg-gray-400  rounded-2xl  my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></span>One click canceletion</h2>
                            <p>You change your mind?.ok ,Click and cancel</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AboutDelivery;