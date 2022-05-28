import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const [myrev,setMyrev] = useState([]);

    useEffect(()=>{
        fetch(`https://safe-bastion-74544.herokuapp.com/singlereview/${user?.email}`)
        .then(res => res.json())
        .then(rev =>{
            console.log(rev)
            setMyrev(rev)
        })
    },[user])

    console.log(myrev)


    
    const addReview = (event) =>{
        event.preventDefault();
        const ratings = event.target.ratings.value;
        if(ratings > 5 || ratings < 0){
            toast.error('Rating should be in range of 1-5')
        }
        else{
            const addedComment = {
                name : user?.displayName,
                email : user?.email,
                company:event.target.company.value,
                img : user.photoURL,
                review : event.target.review.value,
                ratings : event.target.ratings.value
            }
            fetch(`https://safe-bastion-74544.herokuapp.com/addreview`,{
                method : 'POST',
                headers :{
                    'content-type': 'application/json'
                },
                body : JSON.stringify(addedComment)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    toast.success('You commented Successfully')
                }
            })
        }
        
    }


    return (
        <div>
            <p>Add A Review</p>
            {/* <div>
                <p className='text'>{myrev.length === 0 ? 'My Review' : 'Add Review'}</p>
            </div> */}
            <div>
            <form onSubmit={addReview} className="grid grid-cols-1 gap-3 mt-2 justify-items-center">
                      <input type="text" readOnly value={user?.displayName}  className="input input-bordered w-full max-w-xs" />
                      <input type="email" readOnly value={user?.email}  className="input input-bordered w-full max-w-xs" />
                      <input type="text" name="review" placeholder="share your experience to other" className="input input-bordered w-full max-w-xs" />
                      <input type="text" name="company" placeholder="add your company" className="input input-bordered w-full max-w-xs" />
                      <input type="text" name="ratings" placeholder="rate your experiance in 1-5" className="input input-bordered w-full max-w-xs" />
                      <input type="submit" value="Add Review" className="input-bordered btn w-50 max-w-auto" />
                </form>
            </div>
        </div>
    );
};

export default MyReviews;