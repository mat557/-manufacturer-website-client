import React from 'react';
import broken from '../../Photos/Broken.jpg'
import Footer from './Footer';

const NotFound = () => {
    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src={broken} alt="Broken" /></figure>
            <div className="card-body">
                <h2 className="card-title">404</h2>
                <p>Page Not Found</p>
                <p className='mt-auto text-center'>Please Try Again</p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;