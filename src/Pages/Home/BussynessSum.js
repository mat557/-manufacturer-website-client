import React from 'react';

const BussynessSum = () => {

    
    return (
        <div className='my-20' style={{backgroundColor:'#efefef'}}>
            <p className='text-center text-4xl my-4'>Checkout Our Achievement</p>

            <div className="stats shadow stats-vertical lg:stats-horizontal w-11/12 mx-auto">
  
                <div className="stat place-items-center">
                    <div className="stat-title">Our Online Users</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>
  
                <div className="stat place-items-center">
                    <div className="stat-title">We Sold Over</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">Parts Everyday</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="stat-title">Our Customer Are from</div>
                    <div className="stat-value">70</div>
                    <div className="stat-desc">Deferent Country</div>
                </div>
  
            </div>

        </div>
    );
};

export default BussynessSum;