import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussynessSum from './BussynessSum';
import Information from './Information/Information';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=' w-11/12 mx-auto'>
            <Banner></Banner>
            <BussynessSum></BussynessSum>
            <Reviews></Reviews>
            <Tools></Tools>
            <Information></Information>
            <Footer></Footer>
        </div>
    );
};

export default Home;