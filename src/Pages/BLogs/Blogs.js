import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='my-4 bg-gray-400 p-6 rounded'>
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

            <div className='my-4 bg-gray-400 p-6 rounded'>
                <p className='font-bold mt-4'>*How will you improve the performance of a React Application?</p>
                <p>To improve react app performance ,i will take few steps:</p><br />
                <small>1.I will keep component state local</small><br />
                <small>2.I will avoid unnecessary re-render by memorizing or caching</small><br />
                <small>3.I will avoid index kew for mapping</small><br />
                <small>4.By avoiding large emage file</small><br />
                <small>5.By using react pure component</small><br />

            </div>

            <div className='my-4 bg-gray-400 p-6 rounded'>
                <p className='font-bold mt-4'>*What is a unit test? Why should write unit tests??</p>
                <p>After building a software/application it needs to be checked in later days step by step.The target is to check the application is 
                    still working as it should be.writing unit test is also importent .The procedure is to write the test cases for function and methods ,if problem arise it would be easy to find out the problem. Caus it helps the programmer to stay focused on the checklist.
                </p>
            </div>

            <div className='my-4 bg-gray-400 p-6 rounded'>
                <p className='font-bold mt-4'>*Why you do not set the state directly in React.?</p>
                <p>
                    useState helps us track state in react function.We distrcucture useState into two part ,like this const [example,setExample] = useState(),
                    we can  pass the the initial state to setExample  ,later we can find the same data in example and can be used. this process allows us to change and update the 
                </p>
            </div>

            <div className='my-4 bg-gray-400 p-6 rounded'>
                <p className='font-bold mt-4'>*What are the different ways to manage a state in a React application?</p>
                <p>
                   There are 4 magor diferent state in react app. they are - 1.local state : local state is often managed in component using useState.
                   -2.global test : a state that we can use from any component   and whenever we need is called a global component.as example useAuthState is aa global state.
                    -3.server state: data that comes from external server is known as a server state.We need to manage it alongside with local and global state. -4.url state: 
                        data that exist in url is known as url state that include path name and query paramiter that we use while fetching data using url.
                </p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;