import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='my-4 bg-gray-400'>
                <p className='font-bold mt-4'>*What are the different ways to manage a state in a React application?</p>
                <p>-There are few different ways of managing state in react application.These are- <br></br>
                    <small className='pl-3 text-2xl'>useState hook</small><br></br>
                    <small className='pl-3 text-2xl'>useEffect hook</small><br></br>
                    <small className='pl-3 text-2xl'>useReducer hook</small><br></br>
                    <small className='pl-3 text-2xl'>useContext hook</small><br></br>
                    <small className='pl-3 text-2xl'>useContext hook</small><br></br>
                    <small className='pl-3 text-2xl'>useRef hook , etc</small><br></br>
                </p>
            </div>

            <div className='my-4 bg-gray-400'>
                <p className='font-bold mt-4'>*What are the different ways to manage a state in a React application?</p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;