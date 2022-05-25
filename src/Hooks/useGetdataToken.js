import { useEffect, useState } from "react";

const useGetToken = user =>{
    const [token,setToken] = useState('');
    useEffect(()=>{
        // console.log(user)
        const email = user?.user?.email;
        const curUser = {email : email}
        if(email){
          fetch(`http://localhost:5000/newuser/${email}`,{
            method : 'PUT',
            headers:{
              'content-type':'application/json'
            },
            body : JSON.stringify(curUser)
          })
          .then(res => res.json())
          .then(data => {
            setToken(data)
            //   console.log('from gettoke',data)
            })
        }
        else{

        } 
    },[user]);
    return [token,setToken]
}
export default useGetToken;