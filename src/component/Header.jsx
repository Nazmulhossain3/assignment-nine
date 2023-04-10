import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between bg-gray-300
        md:py-4 items-center md:px-12'>
            <h2 className='text-2xl'>Circular House</h2>
            <nav className='flex flex-col md:flex-row md:gap-6 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/Applied Jobs'>AppliedJobs</Link>
                <Link to='/Blog'>Blog</Link>
            </nav>
           
            <Link>
             <button className='border-2 border-blue-500 bg-blue-500
             py-1 px-2 text-white rounded-lg'>Star Applying</button>
            </Link>
        </div>
    );
};

export default Header;