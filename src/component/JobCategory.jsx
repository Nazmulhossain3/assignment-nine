import React from 'react';

const JobCategory = ({jobCategory}) => {
    const {Category_logo,Jobs_available,Category_name} = jobCategory
    return (
        <div>
             
            <div className='text-center  border-2 p-3 transition duration-200 transform
               hover:-translate-y-2 bg-gray-200 shadow-xl rounded-2xl '>
            <img className='  md:w-32 md:h-32 object-cover ml-16  ' src={Category_logo} alt="" />
            <p className='mt-1 font-medium'>{Category_name}</p>
            <p>Job Available : {Jobs_available}</p>
            </div>
        </div>
    );
};

export default JobCategory;