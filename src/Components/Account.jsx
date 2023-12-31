import React from 'react'
import SavedShows from './Savedshows'

const Account = () => {
  return (
    <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src="bg1.jpg" alt="bg" />
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>

   <SavedShows/>

    </div>
  )
}

export default Account
