import React from 'react';

const ShowApplyJob = ({apply}) => {
   const {Company_Name} = apply
    return (
        <div>
            <h2>name : {Company_Name}</h2>
        </div>
    );
};

export default ShowApplyJob;