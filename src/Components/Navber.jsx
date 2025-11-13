import React, { useContext, useState } from 'react';
import headericon from '../assets/cleanlinesspng.png'
import {  Link, NavLink,  } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from './Loader';

const Navber = () => {
  const {user,LogOut} = useContext(AuthContext)
  const [open,setOpen] = useState(false)
   
  if(!user){
    return <Loader></Loader>
  }

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allissues'> All Issues</NavLink>
      
       {
        user  &&   <> <NavLink to='/addissues'>Add Issues</NavLink>
        <NavLink to='/myissues'>My Issues</NavLink>
        <NavLink>My Contribution</NavLink>     </>
       }
      
    </>

    const Handlelogout = () => {
      LogOut()      
    }
   
                 
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
    <a className="flex gap-3 justify-between items-center font-bold text-gray-700  text-[1.3rem]"><img className='w-13 h-13 border-2 border-orange-300 rounded-full' src={headericon} />CleanZone Report</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
       
        <nav className='flex gap-5 text-black font-medium'>
       {links}
        </nav>
    
    </ul>
  </div>
  <div className="navbar-end gap-4">

    {
      user ? (<div className=' flex items-center gap-3'>

        {
          open &&  <Link to='/auth/login' onClick={Handlelogout} className=' btn btn-outline   text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200'>Log out</Link>
        }
         <img onClick={() => setOpen(!open)} className='w-13 h-13 border-2 cursor-pointer border-orange-300 rounded-full' src={user?.photoURL} />
       
     </div>) 
    
     : (<div>
       <Link to='/auth/login' className="btn btn-outline mr-4 text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">Log in</Link>
    <Link to='/auth/register' className="btn btn-outline text-white bg-orange-500  font-bold  hover:border-orange-400">Register</Link> 
    </div>)
    }
  </div>
</div>
            </div>
        </div>
    );
};

export default Navber;