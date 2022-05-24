import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);

    const handleNavigate = () =>{
        navigate('user')
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={user.reloadUserInfo.photoUrl} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <p>Phone:{user.email}</p>
                    <p>City:{user.email}</p>
                    <p>Education:{user.email}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleNavigate} className="btn btn-primary">Update Your Info</button>
                    </div>
                </div>
        </div>
    );
};

export default MyProfile;