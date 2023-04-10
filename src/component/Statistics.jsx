import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignment = [
        {
          "id": "1",
          "name": "Simple HTML and CSS portfolio",
          "number": "60"
        },
        {
          "id": "2",
          "name": "Responsive Web design with css Framework",
          "number": "59"
        },
        {
          "id": "3",
          "name": "Responsive with tailwind",
          "number": "58"
        },
        {
          "id": "4",
          "name": "Basic JavaScript",
          "number": "51"
        },
        {
          "id": "5",
          "name": "Exploring Javascript ES6",
          "number": "60"
        },
        {
          "id": "6",
          "name": "Introduction of React",
          "number": "60"
        },
        {
          "id": "7",
          "name": "Explore React Router",
          "number": "55"
        }
      ]
      
    return (
        <div>
            <h1 className='mt-6 mb-6'>This  Area Chart Describe PH Students Assignment Marks </h1>
           <AreaChart
            width={500}
            height={400}
            data={assignment}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
           
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name"></XAxis>
           <XAxis dataKey="id"></XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           <Area dataKey='number' stroke="#8884d8"></Area>
           <Area dataKey='id' stroke="#8884d8"></Area>
           </AreaChart>
        </div>
    );
};

export default Statistics;