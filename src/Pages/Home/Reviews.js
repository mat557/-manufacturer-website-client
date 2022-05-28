import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {

    const [reviewdata,setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://safe-bastion-74544.herokuapp.com/getreview')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[]);

    const reviews = reviewdata.slice(0,3);

    return (
        <div className='my-28 bg-gray-700 py-12 rounded'>
            <p className='text-center text-15px mt-4 font-bold text-white'>Reviews</p>
            <p className='text-center text-4xl mb-8 text-white'>Read what our customer sayes</p>
            <div  className='grid grid-cols-1 my-8 mx-5 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    reviews.map(review => <SingleReview
                    key={review._id}
                    review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;