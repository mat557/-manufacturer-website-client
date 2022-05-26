import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch(`https://safe-bastion-74544.herokuapp.com/alluser`,{
            method:'GET',
            headers:{
                'authorization' :  `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setUser(data)
        })
    },[users]);

    const makeAdmin = (email) =>{
        fetch(`https://safe-bastion-74544.herokuapp.com/newuser/admin/${email}`,{
            method : 'PUT',
            headers : {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.acknowledged){
                toast.success('Promoted to admin')
            }
            else{
                toast.error('You need be an admin')
            }
        })
    }



    return (
        <div>
            <p>All Users</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Favorite Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'Admin' && <button onClick={()=>makeAdmin(user.email)} className="btn btn-xs">Make Admin</button>}</td>
                                <td><button className="btn btn-xs">Remove User</button></td>
                            </tr>
                        )
                    }
                    
                    </tbody>
                </table>
                </div>
            </div>
    );
};

export default AllUsers;