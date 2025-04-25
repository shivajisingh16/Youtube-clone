import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='bg-black h-screen overflow-scroll w-44 absolute text-white'>
        <div className='flex flex-col gap-10 items-center justify-center h-full mt-[180px]'>
          <ul className='space-y-4'>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Home</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Shorts</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Subscriptions</li>
          </ul>
          <ul className='space-y-4'>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>History</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Trending</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Music</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Movies</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Gaming</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Sport</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Shopping</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Studio</li>
          </ul>
          <ul className='space-y-4'>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Home</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Shorts</li>
            <li className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>Subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar