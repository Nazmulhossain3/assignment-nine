import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import Feature from './Feature';

const Home = () => {
    const jobs = useLoaderData()
    const [features,setFeatures] = useState([])

    useEffect(()=>{
        fetch('company.json')
        .then(res=> res.json())
        .then(data => setFeatures(data))


    },[])
    
    return (
        <div>
          
           <section className=' flex md:flex-row flex-col justify-around mt-6'>
            <div className="header-info lg:p-6 p-6">
                <p className='text-6xl'><span>One Step</span> <br />
                 Closer To Your <br /> <span className='text-blue-400'>Dream Job</span> </p>
                 <p className='mt-3 font-medium'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your <br /> job application from start to finish.</p>
                 <button className='border-2 mt-2 px-2 py-1 bg-blue-300'>Get Start</button>
            </div>

            <div className=" md:w-[500px] w-full p-6">
                <img src="https://birthphotographybrisbane.com.au/wp-content/uploads/2021/06/Professional-Headshot-Campaign-1.jpg" alt="" />
            </div>

           </section>

           <h1 className='text-2xl text-center mt-12 mb-4'>Job Category List</h1>
            <div  className=' grid md:grid-cols-4 items-center md:px-12 gap-5 mb-4 mt-4 '>
                
        {
            jobs.map((jobCategory,index) => <JobCategory
            jobCategory={jobCategory}
            key={index}></JobCategory>)
        }
            </div>


            <h1 className='text-2xl text-center mt-12'>Featured Jobs</h1>
            <h1 className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</h1>
            <div className='bg-gray-100  grid md:grid-cols-4 items-center md:px-12 gap-5 mb-4 mt-12 gap-5'>
            {
                features.map(feature => <Feature
                    feature={feature}
                    key={feature.id} ></Feature>)
            }

            </div>


        </div>
    );
};

export default Home;