import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussynessSum from './BussynessSum';
import HomeTools from './HomeTools';
import Information from './Information/Information';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=' w-11/12 mx-auto'>
            <Banner></Banner>
            <BussynessSum></BussynessSum>
            <Reviews></Reviews>
            <HomeTools></HomeTools>
            <Information></Information>
            <Footer></Footer>
        </div>
    );
};

export default Home;