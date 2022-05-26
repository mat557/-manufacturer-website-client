import React from 'react';
import pic from '../../Photos/planeForHome.jpg';

const AboutDelivery = () => {
    return (
        <div>
            <div className='my-12'>
                <p className='text-center text-4xl'>Exclusive Feature For Overseas Consumers</p>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <figure><img src={pic}  className="max-w-sm rounded-lg shadow-2xl" alt="Album"/></figure>
                    <div className='flex flex-col pl-8'>
                        <div className="card-body bg-gray-400 rounded-2xl my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'>*</span>Overseas Delivery</h2>
                            <p>Our product has reached over 70 </p>
                        </div>
                        <div className="card-body bg-gray-400  rounded-2xl  my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'>*</span>Easy Payment</h2>
                            <p>Select the product and click the payment.You are done!</p>
                        </div>
                        <div className="card-body bg-gray-400  rounded-2xl  my-2">
                            <h2 className="card-title"><span className='text-4xl pt-1'>*</span>One click canceletion</h2>
                            <p>You change your mind?.ok ,Click and cancel</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AboutDelivery;