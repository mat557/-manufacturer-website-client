import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const Tools = () => {
    const [tools,setTools] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/tools`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[]);

    return (
        <div className='w-11/12 mx-auto'>
            <p className='my-8 text-4xl text-center font-bold'>Everything In One Place!</p>
            <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tools.map(tool => <SingleItem
                    key={tool._id}
                    tool={tool}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default Tools;