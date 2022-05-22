import React from 'react';
import banner from '../../Photos/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Find The Gear You Need</h1>
                    <p className="py-6">We are proude seller of this business.We are selleing our product both in offline
                    and online.Selling product for 30 years in offline and 10 years in online. Luckily we managed to fullfill
                    our customer need both in offline and online.Infact 40% of our customer from online!.
                    </p>
                    <button className="btn btn-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;