import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-primary text-primary-content">
      <div className="card-body">
        {/* <h2 className="card-title">Card title!</h2> */}
        <p>{review.review}</p>
        <div className="flex items-center">
            <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                    <img src={review.img} alt=""/>
                </div>
            </div>
            <div>
                <p className="text-xl">{review.name}</p>
                <p className="text-xl">Owner Of:{review.company}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
