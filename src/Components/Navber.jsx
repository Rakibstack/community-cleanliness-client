import React from 'react';
import headericon from '../assets/cleanlinesspng.png'
import usericon from '../assets/download.png'
import { NavLink } from 'react-router';

const Navber = () => {

    const links = <>
        <NavLink>Home</NavLink>
        <NavLink> All Issues</NavLink>
        <NavLink>Add Issues</NavLink>
        <NavLink>My Issues</NavLink>
        <NavLink>My Contribution</NavLink>    
    </>
              
    
    return (
        <div >
           

            <div className=' bg-[#FBF1EF]' >

                <div className="navbar container mx-auto w-11/12 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <nav className='flex gap-2 '>
            {links}
        </nav>
      </ul>
    </div>
    <a className="flex gap-3 justify-between items-center font-bold text-gray-700  text-2xl"><img className='w-14 h-14 border-1 border-gray-300 rounded-full' src={headericon} />CleanZone Report</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
       
        <nav className='flex gap-5 text-black font-medium'>
       {links}
        </nav>
    
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn btn-outline text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">Log in</a>
    <a className="btn btn-outline text-white bg-orange-500  font-bold  hover:border-orange-400">Register</a>
    <img className='w-13 h-13' src={usericon} />
  </div>
</div>
            </div>
        </div>
    );
};

export default Navber;