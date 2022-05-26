import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updatedData,setUpdatedData] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('user')
    }

    useEffect(()=>{
            fetch(`https://safe-bastion-74544.herokuapp.com/userByEmail?email=${user.email}`)
            .then(res => res.json())
            .then(data =>{
                setUpdatedData(data);
        })
    },[user])
    

    

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={user?.reloadUserInfo?.photoUrl} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    <p>Phone:{updatedData?.phone}</p>
                    <p>City:{updatedData?.city}</p>
                    <p>Education:{updatedData?.education}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleNavigate} className="btn btn-primary">Update Your Info</button>
                    </div>
                </div>
        </div>
    );
};

export default MyProfile;