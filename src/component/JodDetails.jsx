import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JodDetails = () => {
    const dynamic = useParams()
    const [jobsId,setJobsId] = useState([])

   useEffect(()=>{
       fetch('company.json')
       .then(res => res.json())
       .then(data=> console.log(data))
       
    // const job =  jobsId.find(jobId => jobId.id === dynamic.id)
    //  console.log(job)

   },[])
   
    
   
   
   
    return (
        <div>
            <h2>this is jod id : </h2>
        </div>
    );
};

export default JodDetails;