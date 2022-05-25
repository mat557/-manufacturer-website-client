import React, { useEffect } from 'react';
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useGetToken from '../../Hooks/useGetdataToken';

const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        neWuser,
        neWloading,
        neWerror,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useGetToken(neWuser || user)

    useEffect(()=>{
      if(token){
        navigate('/tools');
      }
    },[token,navigate])
    

    if(loading || neWloading || updating){
      return <Loading></Loading>
    }


    let logInError;
    if(error || neWerror || updatingError){
      logInError = <p className="text-center text text-red-600">{error?.message || neWerror?.message || updatingError?.message}</p>
    }

    const onSubmit = async(data) =>{ 
      await createUserWithEmailAndPassword(data.email,data.password);
      await updateProfile({displayName : data.name});
    };


    return (
        <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          
          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter Your Name</span>
                </label>
                <input
                 {...register("name", {
                    required:{
                        value : true,
                        message : 'Name is required'
                    }
                  })}
                type="text" placeholder="name" 
                className="input input-bordered w-full max-w-xs" />
                
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter Your Emial</span>
                </label>
                <input
                 {...register("email", {
                    required:{
                        value : true,
                        message : 'Email is required'
                    },
                    pattern: {
                      value:  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid email'
                    }
                  })}
                type="email" placeholder="Email" 
                className="input input-bordered w-full max-w-xs" />
                
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter Your Password</span>
                </label>
                <input
                 {...register("password", {
                        required: {
                          value: true,
                          message: 'Password is required'
                      },
                      minLength: {
                          value: 6,
                          message: 'Must be 6 characters'
                      }
                  })}
                type="text" placeholder="Password" 
                className="input input-bordered w-full max-w-xs" />
                
                <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    
                </label>
            </div>


                {logInError}
                <input value="Signup"  className= "btn  w-full" type="submit" />
           </form>
                  <p>Already Have An Account? <Link to="/login" className="text-green-900">Please Login</Link></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-active">Continue With Google</button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;