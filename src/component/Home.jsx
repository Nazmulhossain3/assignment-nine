import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';

const Home = () => {
    const jobs = useLoaderData()
    
    
    return (
        <div>
           <section className=' bg-slate-50 flex md:flex-row flex-col justify-around mt-6'>
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

            
            <div  className=' grid md:grid-cols-4 items-center md:px-12 gap-5 mb-4 mt-4 '>
                
        {
            jobs.map((jobCategory,index) => <JobCategory
            jobCategory={jobCategory}
            key={index}></JobCategory>)
        }
            </div>
          
        </div>
    );
};

export default Home;