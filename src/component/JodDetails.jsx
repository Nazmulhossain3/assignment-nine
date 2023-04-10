import { Link, useLoaderData, useParams } from 'react-router-dom';
import {CurrencyDollarIcon, DocumentTextIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
const JodDetails = () => {
   const {id} = useParams()
   const data = useLoaderData()
   const details = data.find(jobId => jobId.id ===id)
   
   const {Job_description,Educational_Requirements,Experience,Job_Responsibility,
    Job_title,Salary,email,phone,Location} = details
    

return (
        <div>
         
       <h2 className='text-2xl text-center mt-12 underline'>  Job Details</h2>
      
         <div className='grid md:grid-cols-2 p-12'>
       
         <div className=" mt-4">
            <p><span className='text-xl font-bold'>Job Description </span>: <br />
            {Job_description} </p>

            <p><span className='text-xl font-bold'>Job Responsibility : <br /> </span>
            {Job_Responsibility}</p>
            <p><span className='text-xl font-bold'>Educational Requirement</span> : <br /> {Educational_Requirements}</p>

            <p> <span className='text-xl font-bold'>Experience : </span> <br /> {Experience} </p>
         </div>
       
      
        <div className="border-2 ml-12 ">
            <h2 className='underline text-center mt-4 text-2xl'>Job details</h2>
           <span className='flex md:flex-row justify-center mt-2'>
           <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
            <p><span className='font-bold'>Salary</span> : {Salary} per month</p>
           </span>
        
           <span className='flex md:flex-row justify-center mt-2'>
           <DocumentTextIcon className="h-6 w-6 text-blue-500" />
            <p><span className='font-bold'>Job title </span>: {Job_title}</p>
           </span>
            <h1 className='mt-3 text-xl text-center mb-4'>Contact Information</h1>

            <span className='flex md:flex-row justify-center mt-2'>
           <PhoneIcon className="h-6 w-6 text-blue-500" />
            <p><span className='font-bold'>Phone  </span>: {phone}</p>
           </span>
           
            <span className='flex md:flex-row justify-center mt-2'>
           <EnvelopeIcon className="h-6 w-6 text-blue-500" />
            <p><span className='font-bold'>Email  </span>: {email}</p>
           </span>
          
            <span className='flex md:flex-row justify-center mt-2'>
           <MapPinIcon className="h-6 w-6 text-blue-500" />
            <p><span className='font-bold'>Address  </span>: {Location}</p>
            
           </span>

          <Link>
          <button className='mx-auto border-2 flex justify-center px-2 py-1 mt-2
          bg-blue-500 text-white rounded-xl'>Apply Now</button>
         
          </Link>
        </div>
        
         </div>
       
        </div>
    );
};

export default JodDetails;