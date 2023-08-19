import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Moviesimgs from './Moviesimgs'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



const Row = ({title, fetchURL}) => {

const [movies, setMovies] = useState([])


useEffect(() => {
  axios.get(fetchURL).then((response)=>{setMovies(response.data.results)
  })
},[fetchURL])

const slider = useRef()

const prevSlide = () =>{
  slider.current.scrollLeft = slider.current.scrollLeft - 500
  }

  const nextSlide = () =>{
    slider.current.scrollLeft = slider.current.scrollLeft + 500
    }
    
  
  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
    <MdChevronLeft onClick={prevSlide} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div ref={slider} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
               {movies.map((item, id) => (
               <Moviesimgs key={id} item={item}/>
                ))}
        </div>
     <MdChevronRight onClick={nextSlide} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </div>
  )
}

export default Row
