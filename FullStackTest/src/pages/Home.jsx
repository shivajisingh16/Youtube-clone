import React from 'react'
import Header from '../components/Header'
import { Link, Navigate, useNavigate } from 'react-router'

const Home = ({toggleSidebar,isSidebarVisible}) => {
  const user = localStorage.getItem('user')
  const data = [
    {
      "videoId": "video01",
      "title": "Learn React in 30 Minutes",
      "thumbnailURL": "https://example.com/thumbnails/react30min.png",
      "description": "A quick tutorial to get started with React.",
      "channelId": "channel01",
      "uploader": "user01",
      "views": 15200,
      "likes": 1023,
      "dislikes": 45,
      "uploadDate": "2024-09-20",
      "comments": [
        {
          "commentId": "comment01",
          "userId": "user02",
          "text": "Great video! Very helpful.",
          "timestamp": "2024-09-21T08:30:00Z"
        }
      ]
    }
  ];
  const filters = [
    { name: 'All', id: 1 },
    { name: 'Comedy', id: 2 },
    { name: 'Coding', id: 3 },
    { name: 'Music', id: 4 },
    { name: 'Educational', id: 5 },
    { name: 'Gaming', id: 6 },
    { name: 'Retro', id: 7 },,
  ]
  if(!user){
    <Navigate to='/login'/>
  }
  return (
    <div className='bg-black h-screen text-white'>
      <Header toggleSidebar={toggleSidebar}/>
   <div className=' relative top-20'>
   <div className='flex items-center justify-between px-4 py-2 w-[50%] mx-auto'>
        {
          filters.map((filter => (
            <Link key={filter.id} className='text-xl font-semibold hover:bg-red-600 bg-gray-600 px-2 py-2 rounded-lg'>
              {filter.name}
            </Link>
          )))
        }
        
      </div>
      <div>
          {data.map((video) => (
            <div key={video.videoId} className='flex flex-col items-center justify-center gap-4 mt-4'>
              <img src={video.thumbnailURL} alt={video.title} className='w-full h-64 object-cover rounded-lg' />
              <h2 className='text-xl font-bold'>{video.title}</h2>
              <p className='text-gray-400'>{video.description}</p>
              <p className='text-gray-500'>{video.views} views</p>
            </div>
          ))}
        </div>
   </div>
    </div>
  )
}

export default Home