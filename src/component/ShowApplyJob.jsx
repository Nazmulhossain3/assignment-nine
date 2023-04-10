import React from 'react';
import {CurrencyDollarIcon,  MapPinIcon, } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ShowApplyJob = ({apply}) => {
    console.log(apply)
   const {Company_Name,Company_Logo,Job_title,Remote,Salary,Location,Onsite} = apply
    return (
        <div>
           <div className='flex md:flex-row mb-4 gap-6 px-36 border-2 py-12'>
           
            <img src={Company_Logo} alt="" className='md:w-36 md:h-36 ' />

            <div className='mt-4'>
                <h2>{Job_title}</h2>
                <h2 className='mb-3'>{Company_Name}</h2>
                <span className='border-2 bg-blue-400 text-white mt-2 
                py-1 px-1 rounded-lg'>{Remote}</span>
                <span className='ml-6 border-2 bg-blue-400 text-white mt-2 
                py-1 px-1 rounded-lg '>{Onsite}</span>
              

            <span className='flex md:flex-row mt-2'>
           <MapPinIcon className="h-6 w-6 text-blue-500" />
           <p><span className='font-bold'>Address  </span>: {Location}</p>
           </span>
           
            <span className='flex md:flex-row mt-2'>
           <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
           <p><span className='font-bold'> Salary  </span>: {Salary}</p>
           </span>
            
           
            </div>

                
            <Link>
           <button className=' relative bg-blue-500 text-white rounded-xl px-2 py-2 mt-16 ml-36'
           >View Details</button>
    
           </Link>
        
           </div>

           
        </div>
    );
};

export default ShowApplyJob;