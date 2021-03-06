import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../Photos/engine.jpg'

const Banner = () => {
    const navigate = useNavigate();

    const bannerHandle = () =>{
        navigate('/tools')
    }
    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Find The Gear You Need</h1>
                    <p className="py-6">We are proude manufacturer of car tools.We are menufecturing as well as selleing our product both in offline
                    and online.Selling product for 30 years in offline and 10 years in online. Luckily we managed to fullfill
                    our customer need both in offline and online.Infact 40% of our customer from online!.
                    </p>
                    <button onClick={bannerHandle} className="btn btn-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;