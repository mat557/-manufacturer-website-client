// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../../Hooks/useAdmin';
// import Loading from './Loading';

// const RequireAdmin = ({ children }) => {
//     const [user,loading] = useAuthState(auth);
//     const [admin,primeLoading] = useAdmin();
//     const location = useLocation();

//     if(loading || primeLoading){
//         return <Loading></Loading>
//     }

//     if(!user || !admin){
//         return <Navigate to="/login"  state={{ from: location }} replace ></Navigate>     
//     }

//     return children;
// };

// export default RequireAdmin;