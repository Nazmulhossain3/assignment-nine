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
        <div>
            <h1>this is AppliedJobs and </h1>
            {
                cart.map(apply => <ShowApplyJob
                    apply={apply}
                    key={apply.id}></ShowApplyJob>)
            }
        </div>
    );
};

export default AppliedJobs;