import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
const Header = ({toggleSidebar}) => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  console.log(user)
  return (
    <div className='h-20 flex justify-between items-center bg-black px-4 absolute w-full z-10'>
     <div className='flex items-center justify-between gap-4'>
        <GiHamburgerMenu onClick={toggleSidebar} className='text-2xl cursor-pointer'/>
        <div className='flex items-center justify-between'>
          <img className='h-10' src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="" />
          <p className='text-2xl font-bold'>Youtube</p>
        </div>
     </div>
     <div className='flex items-center justify-between'>
      <input type="text" className='h-10 px-4 w-96 rounded-md border-2 border-gray-300' placeholder='Search' />
      <button className='bg-red-600 text-white aspect-square p-3 rounded-md'><CiSearch/></button>
     </div>
     <div className='flex items-center justify-between gap-4'>
      <IoPersonCircle className='text-3xl'/>
      {user?<button onClick={handleLogout} className='bg-red-600 text-white px-4 py-1 font-bold rounded-md'>Logout</button>:<Link to='/login' className='bg-red-600 text-white px-4 py-1 font-bold rounded-md'>SignIn</Link>}
     </div>
    </div>
  )
}

export default Header