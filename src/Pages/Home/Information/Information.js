import React from 'react';
import './INformation.css';
import photo1 from '../../../Photos/spacial-1.jpg'
import photo2 from '../../../Photos/spacial-3.jpg'

const Information = () => {
    return (
        <div  className='box-serv my-28'>
            <h1 className='text-center mt-4 text-4xl'>Our Specialities</h1>
            <div className="purpose">
                <div className="purpose-type">
                    <img src={photo1} alt="" />
                    <div className='overlay'></div>
                    <div className="des">
                        <h4>Return Product On your Mood</h4>
                        <hr />
                        <p>
                            Lets Say you ordered from us.But after recieving you changed up your plan!
                            BOOM! here is our spacialities .If you can start can start the return proccedure within
                            5 days then you can return them to our store!.
                        </p>
                    </div>
                </div>
                <div className="purpose-type">
                    <img src={photo2} alt="" />
                    <div className='overlay'></div>
                    <div className="des">
                        <h4>Return Product Get The Money</h4>
                        <hr />
                        <p>        
                            Once you didnt like our product after recieving them you will be able to return them as soon as possible.
                            You can do them online.Get the money back Within 2 days after returning the product.As we care a lot of our 
                            customer thats why we dont push our customer out of their safe zone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;