import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeProduct from './HomeProduct';

const HomeTools = () => {
    const [tools,setTools] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/tools`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[]);

    const products = tools.slice(0,3);

    const visiteTools = () =>{
        navigate('/tools')
    }

    return (
        <div>
            <p className='text-center text-4xl my-4'>Our Tools</p>
            <p className='text-center'>Visit Tools section to check our company production line up</p>
            <div className='grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <HomeProduct
                    key={product._id}
                    product={product}
                    ></HomeProduct>)
                }
            </div>

            
            <button onClick={visiteTools} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Visite Tools</button>
        </div>
    );
};

export default HomeTools;