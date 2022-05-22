import React from 'react';
import one from '../../Photos/people1.png';
import two from '../../Photos/people2.png';
import three from '../../Photos/people3.png';
import SingleReview from './SingleReview';

const Reviews = () => {

    const reviews = [
        {
            _id : 1,
            name : 'winston carcil',
            company : 'hard point',
            review : 'the product is best of the best , On time delevary ,no issue with quantity ,to the point quality ',
            img : one
        },
        {
            _id : 2,
            name : 'winston carcil',
            company : 'hard point',
            review : 'the product is best of the best , On time delevary ,no issue with quantity ,to the point quality ',
            img : one
        },
        {
            _id : 3,
            name : 'winston carcil',
            company : 'hard point',
            review : 'the product is best of the best , On time delevary ,no issue with quantity ,to the point quality ',
            img : one
        },
    ]
    return (
        <div className='my-28'>
            <p className='text-center text-15px mt-4 font-bold'>Reviews</p>
            <p className='text-center text-4xl mb-8'>Read what our customer sayes</p>
            <div className='grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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