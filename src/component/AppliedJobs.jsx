import React from 'react';
import { getShoppingCart } from './fakeDB';
import { useLoaderData } from 'react-router-dom';
import ShowApplyJob from './ShowApplyJob';

const AppliedJobs = () => {
   const applyData = useLoaderData()
    const Savedcart = getShoppingCart()
    let cart = []
    for(const id in Savedcart){
    const foundApplyData = applyData.find(data => data.id === id)
    
    if(foundApplyData){
        cart.push(foundApplyData)
    }
    
}
  

console.log(cart)
    return (
        <div className='' >
            <h1 className='text-2xl mt-12 text-center font-bold underline'> Applied Jobs </h1>
         
           <div className='px-24 py-12'>
           {
                cart.map(apply => <ShowApplyJob
                    apply={apply}
                    key={apply.id}></ShowApplyJob>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;