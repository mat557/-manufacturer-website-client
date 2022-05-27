import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import ModalForOrder from '../Shared/ModalForOrder';
import SingleItem from './SingleItem';

const Tools = () => {
    const [tools,setTools] = useState([]);
    const [order,setOrder] = useState(null);
    
    useEffect(()=>{
        fetch(`https://safe-bastion-74544.herokuapp.com/tools`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[]);

    

    return (
        <div className='w-11/12 mx-auto'>
            <p className='my-8 text-4xl text-center font-bold'>Everything In One Place!</p>
            <p className='my-8 text-2xl text-center font-bold'>Login to place order</p>
            <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tools.map(tool => <SingleItem
                    key={tool._id}
                    tool={tool}
                    setOrder={setOrder}
                    ></SingleItem>)
                }
            </div>
            {order && <ModalForOrder setOrder={setOrder} order={order}></ModalForOrder>}
            <Footer></Footer>
        </div>
    );
};

export default Tools;