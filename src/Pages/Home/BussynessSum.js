import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid';

const BussynessSum = () => {

    
    return (
        <div className='my-20' style={{backgroundColor:'#efefef'}}>
            <p className='text-center text-4xl my-4'>Checkout Our Online Achievements</p>

            <div className="stats shadow stats-vertical lg:stats-horizontal w-11/12 mx-auto">
  
                <div className="stat place-items-center">
                    <div className='ml-14 flex justify-center items-center'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                            </div>
                        <div>
                            <div className="stat-title">Our Online Users</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>
                    </div>
                </div>

                <div className="stat place-items-center">
                    <div className=' flex justify-center items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                </svg>
                            </div>
                        <div>
                            <div className="stat-title">We Soell Over</div>
                            <div className="stat-value text-secondary">4,200</div>
                            <div className="stat-desc text-secondary">Parts Everyday</div>
                        </div>
                    </div>
                </div>

                <div className="stat place-items-center">
                    <div className='ml-14 flex justify-center items-center'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </div>
                        <div>
                            <div className="stat-title">Our Customer Are from</div>
                            <div className="stat-value">70</div>
                            <div className="stat-desc">Deferent Country</div>
                        </div>
                    </div>
                </div>
  
                
  
            </div>

        </div>
    );
};

export default BussynessSum;